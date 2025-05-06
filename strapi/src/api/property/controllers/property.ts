/**
 * property controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::property.property' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        listedBy: user.id, // Chỉ lấy Property của chính agent này
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const property: any = await strapi.entityService.findOne('api::property.property' as any, id, {
        fields: ['id'],
        populate: { listedBy: true },
      });
      
      if (!property || property.listedBy?.id !== user.id) {
        return ctx.unauthorized(`You can't access this property`);
      }
    }
    
    return await super.findOne(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "listedBy" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        listedBy: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Property của họ
    if (user && user.role && user.role.name === 'Agent') {
      const property: any = await strapi.entityService.findOne('api::property.property' as any, ctx.params.id, {
        fields: ['id'],
        populate: { listedBy: true },
      });

      if (!property || property.listedBy?.id !== user.id) {
        return ctx.unauthorized(`You can't update this property`);
      }

      // Ép luôn listedBy = chính họ (phòng trường hợp cố tình đổi)
      ctx.request.body.data = {
        ...ctx.request.body.data,
        listedBy: user.id
      };
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Property của họ
    if (user && user.role && user.role.name === 'Agent') {
      const property: any = await strapi.entityService.findOne('api::property.property' as any, ctx.params.id, {
        fields: ['id'],
        populate: { listedBy: true },
      });

      if (!property || property.listedBy?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this property`);
      }
    }

    return await super.delete(ctx);
  }
}));
