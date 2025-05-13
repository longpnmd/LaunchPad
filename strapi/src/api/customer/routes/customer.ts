/**
 * customer router
 */

export default {
  routes: [
    // Find route with filterOwnCustomers policy
    {
      method: 'GET',
      path: '/customers',
      handler: 'customer.find',
      config: {
        policies: ['api::customer.filter-own-customers']
      },
    },
    // FindOne route with isOwnerOrAdmin policy
    {
      method: 'GET',
      path: '/customers/:id',
      handler: 'customer.findOne',
      config: {
        policies: ['api::customer.is-owner-or-admin']
      }
    },
    // Create route with assignAgentToCustomer policy
    {
      method: 'POST',
      path: '/customers',
      handler: 'customer.create',
      config: {
        policies: ['api::customer.assign-agent-to-customer']
      }
    },
    // Update route with both policies
    {
      method: 'PUT',
      path: '/customers/:id',
      handler: 'customer.update',
      config: {
        policies: [
          'api::customer.is-owner-or-admin',
          'api::customer.assign-agent-to-customer'
        ]
      }
    },
    // Delete route with isOwnerOrAdmin policy
    {
      method: 'DELETE',
      path: '/customers/:id',
      handler: 'customer.delete',
      config: {
        policies: ['api::customer.is-owner-or-admin']
      }
    }
  ]
};
