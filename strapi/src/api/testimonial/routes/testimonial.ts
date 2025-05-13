/**
 * testimonial router
 */

export default {
  routes: [
    // Find route with filterOwnTestimonials policy
    {
      method: 'GET',
      path: '/testimonials',
      handler: 'testimonial.find',
      config: {
        policies: ['api::testimonial.filter-own-testimonials']
      }
    },
    // FindOne route with isOwnerOrAdmin policy
    {
      method: 'GET',
      path: '/testimonials/:id',
      handler: 'testimonial.findOne',
      config: {
        policies: ['api::testimonial.is-owner-or-admin']
      }
    },
    // Create route with assignAgentToTestimonial policy
    {
      method: 'POST',
      path: '/testimonials',
      handler: 'testimonial.create',
      config: {
        policies: ['api::testimonial.assign-agent-to-testimonial']
      }
    },
    // Update route with both policies
    {
      method: 'PUT',
      path: '/testimonials/:id',
      handler: 'testimonial.update',
      config: {
        policies: [
          'api::testimonial.is-owner-or-admin',
          'api::testimonial.assign-agent-to-testimonial'
        ]
      }
    },
    // Delete route with isOwnerOrAdmin policy
    {
      method: 'DELETE',
      path: '/testimonials/:id',
      handler: 'testimonial.delete',
      config: {
        policies: ['api::testimonial.is-owner-or-admin']
      }
    }
  ]
};
