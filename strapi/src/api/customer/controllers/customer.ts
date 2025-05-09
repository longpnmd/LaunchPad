/**
 * customer controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::customer.customer' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;
    console.log('ctx.query.filters', ctx.query);
    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      // Convert filters to an object if it's a string or initialize as empty if null
      const existingFilters = ctx.query.filters && typeof ctx.query.filters === 'string' 
        ? JSON.parse(ctx.query.filters) 
        : (ctx.query.filters || {});
      
      // Apply agent filter using $and to preserve any existing filters
      ctx.query.filters = {
        ...existingFilters,
        // agent : {
        //   id: user.id
        // }
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    // throw new Error('findOne');
    const user = ctx.state.user;
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const customer: any = await  strapi.documents('api::customer.customer').findOne({
        documentId: id,
        populate: ['agent'],
      });
      
      if (!customer || customer.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't access this customer`);
      }
      ctx.body = {
        data: customer
      }
    }
    return await super.findOne(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "agent" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        agent: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Customer của họ
    if (user && user.role && user.role.name === 'Agent') {
      const customer = await strapi.documents('api::customer.customer').findFirst({
        where: { id: ctx.params.id },
        populate: ['agent'],
      });

      if (!customer || customer.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't update this customer`);
      }

      // Ép luôn agent = chính họ (phòng trường hợp cố tình đổi)
      ctx.request.body.data = {
        ...ctx.request.body.data,
        agent: user.id
      };
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Customer của họ
    if (user && user.role && user.role.name === 'Agent') {
      const customer = await strapi.documents('api::customer.customer').findFirst({
        where: { id: ctx.params.id },
        populate: ['agent'],
      });

      if (!customer || customer.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this customer`);
      }
    }

    return await super.delete(ctx);
  }
}));
