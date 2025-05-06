import type { Core } from '@strapi/strapi';

import setupAgentRole from './bootstrap/setup-agent-role';
import seedMockData from './bootstrap/seed-mock-data';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Setup agent role
    setupAgentRole(strapi);
    
    // Seed mock data (bao gồm client stages)
    seedMockData(strapi);
  },
};
