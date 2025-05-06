/**
 * customer controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::customer.customer' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        agent: user.id, // Chỉ lấy Customer của chính agent này
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const customer: any = await strapi.entityService.findOne('api::customer.customer' as any, id, {
        fields: ['id'],
        populate: { agent: true },
      });
      
      if (!customer || customer.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't access this customer`);
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
      const customer: any = await strapi.entityService.findOne('api::customer.customer' as any, ctx.params.id, {
        fields: ['id'],
        populate: { agent: true },
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
      const customer: any = await strapi.entityService.findOne('api::customer.customer' as any, ctx.params.id, {
        fields: ['id'],
        populate: { agent: true },
      });

      if (!customer || customer.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this customer`);
      }
    }

    return await super.delete(ctx);
  }
}));
