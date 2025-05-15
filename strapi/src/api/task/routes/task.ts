/**
 * task router
 */

export default {
  routes: [
    // Find route with filterOwnTasks policy
    {
      method: 'GET',
      path: '/tasks',
      handler: 'task.find',
      config: {
        policies: ['api::task.filter-own-tasks']
      }
    },
    // FindOne route with isOwnerOrAdmin policy
    {
      method: 'GET',
      path: '/tasks/:id',
      handler: 'task.findOne',
      config: {
        policies: ['api::task.is-owner-or-admin']
      }
    },
    // Create route with assignAgentToTask policy
    {
      method: 'POST',
      path: '/tasks',
      handler: 'task.create',
      config: {
        policies: ['api::task.assign-agent-to-task']
      }
    },
    // Update route with both policies
    {
      method: 'PUT',
      path: '/tasks/:id',
      handler: 'task.update',
      config: {
        policies: [
          'api::task.is-owner-or-admin',
          'api::task.assign-agent-to-task'
        ]
      }
    },
    // Delete route with isOwnerOrAdmin policy
    {
      method: 'DELETE',
      path: '/tasks/:id',
      handler: 'task.delete',
      config: {
        policies: ['api::task.is-owner-or-admin']
      }
    }
  ]
};
