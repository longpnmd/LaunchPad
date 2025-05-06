/**
 * client-stage controller
 */

import { factories } from '@strapi/strapi';

// ClientStage chỉ là read-only đối với Agent, nên không cần custom gì nhiều
export default factories.createCoreController('api::client-stage.client-stage' as any);
