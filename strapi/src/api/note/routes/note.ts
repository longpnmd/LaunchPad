/**
 * note router
 */

export default {
  routes: [
    // Find route with filterOwnNotes policy
    {
      method: 'GET',
      path: '/notes',
      handler: 'note.find',
      config: {
        policies: ['api::note.filter-own-notes']
      }
    },
    // FindOne route with isOwnerOrAdmin policy
    {
      method: 'GET',
      path: '/notes/:id',
      handler: 'note.findOne',
      config: {
        policies: ['api::note.is-owner-or-admin']
      }
    },
    // Create route with assignAgentToNote policy
    {
      method: 'POST',
      path: '/notes',
      handler: 'note.create',
      config: {
        policies: ['api::note.assign-agent-to-note']
      }
    },
    // Update route with both policies
    {
      method: 'PUT',
      path: '/notes/:id',
      handler: 'note.update',
      config: {
        policies: [
          'api::note.is-owner-or-admin',
          'api::note.assign-agent-to-note'
        ]
      }
    },
    // Delete route with isOwnerOrAdmin policy
    {
      method: 'DELETE',
      path: '/notes/:id',
      handler: 'note.delete',
      config: {
        policies: ['api::note.is-owner-or-admin']
      }
    }
  ]
};
