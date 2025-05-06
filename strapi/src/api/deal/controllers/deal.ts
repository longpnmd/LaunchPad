/**
 * deal controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::deal.deal' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        agent: user.id, // Chỉ lấy Deal của chính agent này
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const deal: any = await strapi.entityService.findOne('api::deal.deal' as any, id, {
        fields: ['id'],
        populate: { agent: true },
      });
      
      if (!deal || deal.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't access this deal`);
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

    // Check quyền: Chỉ cho Agent update Deal của họ
    if (user && user.role && user.role.name === 'Agent') {
      const deal: any = await strapi.entityService.findOne('api::deal.deal' as any, ctx.params.id, {
        fields: ['id'],
        populate: { agent: true },
      });

      if (!deal || deal.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't update this deal`);
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

    // Check quyền: Chỉ cho Agent xóa Deal của họ
    if (user && user.role && user.role.name === 'Agent') {
      const deal: any = await strapi.entityService.findOne('api::deal.deal' as any, ctx.params.id, {
        fields: ['id'],
        populate: { agent: true },
      });

      if (!deal || deal.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this deal`);
      }
    }

    return await super.delete(ctx);
  }
}));
