/**
 * deal router
 */

export default {
  routes: [
    // Find route with filterOwnDeals policy
    {
      method: 'GET',
      path: '/deals',
      handler: 'deal.find',
      config: {
        policies: ['api::deal.filter-own-deals']
      }
    },
    // FindOne route with isOwnerOrAdmin policy
    {
      method: 'GET',
      path: '/deals/:id',
      handler: 'deal.findOne',
      config: {
        policies: ['api::deal.is-owner-or-admin']
      }
    },
    // Create route with assignAgentToDeal policy
    {
      method: 'POST',
      path: '/deals',
      handler: 'deal.create',
      config: {
        policies: ['api::deal.assign-agent-to-deal']
      }
    },
    // Update route with both policies
    {
      method: 'PUT',
      path: '/deals/:id',
      handler: 'deal.update',
      config: {
        policies: [
          'api::deal.is-owner-or-admin',
          'api::deal.assign-agent-to-deal'
        ]
      }
    },
    // Delete route with isOwnerOrAdmin policy
    {
      method: 'DELETE',
      path: '/deals/:id',
      handler: 'deal.delete',
      config: {
        policies: ['api::deal.is-owner-or-admin']
      }
    }
  ]
};
