/**
 * task controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::task.task' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        assignedTo: user.id, // Chỉ lấy Task được assign cho Agent
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const task = await strapi.documents('api::task.task').findFirst({
        where: { id },
        populate: ['assignedTo'],
      });
      
      if (!task || task.assignedTo?.id !== user.id) {
        return ctx.unauthorized(`You can't access this task`);
      }
    }
    
    return await super.findOne(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "assignedTo" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        assignedTo: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Task của họ
    if (user && user.role && user.role.name === 'Agent') {
      const task = await strapi.documents('api::task.task').findFirst({
        where: { id: ctx.params.id },
        populate: ['assignedTo'],
      });

      if (!task || task.assignedTo?.id !== user.id) {
        return ctx.unauthorized(`You can't update this task`);
      }

      // Ép luôn assignedTo = chính họ (phòng trường hợp cố tình đổi)
      ctx.request.body.data = {
        ...ctx.request.body.data,
        assignedTo: user.id
      };
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Task của họ
    if (user && user.role && user.role.name === 'Agent') {
      const task = await strapi.documents('api::task.task').findFirst({
        where: { id: ctx.params.id },
        populate: ['assignedTo'],
      });

      if (!task || task.assignedTo?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this task`);
      }
    }

    return await super.delete(ctx);
  }
}));
