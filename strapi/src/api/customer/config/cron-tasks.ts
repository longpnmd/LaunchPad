import { Core } from '@strapi/strapi';

export default {
  /**
   * Every day at 9am check for customers that need follow up
   */
  '0 9 * * *': async ({ strapi }: { strapi: Core.Strapi }) => {
    try {
      const result = await strapi.service('api::customer.follow-up').checkDueFollowUps();
      console.log(`Found ${result.count} customers requiring follow-up today`);
      
      // TODO: Add integration with email/notification system
    } catch (error) {
      console.error('Error executing follow-up cron job:', error);
    }
  }
};
