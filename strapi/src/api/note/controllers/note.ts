/**
 * note controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::note.note' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        createdByUser: user.id, // Chỉ lấy Note của chính agent này
      };
    }

    return await super.find(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "createdByUser" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        createdByUser: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Note của họ
    if (user && user.role && user.role.name === 'Agent') {
      const note: any = await strapi.entityService.findOne('api::note.note' as any, ctx.params.id, {
        fields: ['id'],
        populate: { createdByUser: true },
      });

      if (!note || note.createdByUser?.id !== user.id) {
        return ctx.unauthorized(`You can't update this note`);
      }
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Note của họ
    if (user && user.role && user.role.name === 'Agent') {
      const note: any = await strapi.entityService.findOne('api::note.note' as any, ctx.params.id, {
        fields: ['id'],
        populate: { createdByUser: true },
      });

      if (!note || note.createdByUser?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this note`);
      }
    }

    return await super.delete(ctx);
  }
}));
