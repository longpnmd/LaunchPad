/**
 * property router
 */

export default {
  routes: [
    // Find route with filterOwnProperties policy
    {
      method: 'GET',
      path: '/properties',
      handler: 'property.find',
      config: {
        policies: ['api::property.filter-own-properties']
      }
    },
    // FindOne route with isOwnerOrAdmin policy
    {
      method: 'GET',
      path: '/properties/:id',
      handler: 'property.findOne',
      config: {
        policies: ['api::property.is-owner-or-admin']
      }
    },
    // Create route with assignAgentToProperty policy
    {
      method: 'POST',
      path: '/properties',
      handler: 'property.create',
      config: {
        policies: ['api::property.assign-agent-to-property']
      }
    },
    // Update route with both policies
    {
      method: 'PUT',
      path: '/properties/:id',
      handler: 'property.update',
      config: {
        policies: [
          'api::property.is-owner-or-admin',
          'api::property.assign-agent-to-property'
        ]
      }
    },
    // Delete route with isOwnerOrAdmin policy
    {
      method: 'DELETE',
      path: '/properties/:id',
      handler: 'property.delete',
      config: {
        policies: ['api::property.is-owner-or-admin']
      }
    }
  ]
};
