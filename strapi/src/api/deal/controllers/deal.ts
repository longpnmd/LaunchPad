/**
 * deal controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::deal.deal' as any, ({ strapi }) => ({
  // The controller methods are now clean and focused on their main functionality
  async find(ctx) {
    return await super.find(ctx);
  },

  async findOne(ctx) {
    return await super.findOne(ctx);
  },

  async create(ctx) {
    return await super.create(ctx);
  },

  async update(ctx) {
    return await super.update(ctx);
  },
  
  async delete(ctx) {
    return await super.delete(ctx);
  }
}));
