export default async (ctx, config, { strapi }) => {
  const { id } = ctx.params;
  const user = ctx.state.user;

  // If user is not authenticated
  if (!user) {
    return false;
  }
  
  // If user is an admin, allow
  if (user.role?.type === 'admin') {
    return true;
  }
  
  // If user is not an Agent, deny
  if (user.role?.name !== 'Agent') {
    return false;
  }
  
  // If it's a non-ID operation (like find/create), pass through
  if (!id) {
    return true;
  }
  
  // For operations with ID, check ownership
  const testimonial = await strapi.documents('api::testimonial.testimonial').findFirst({
    where: { id },
    populate: ['submittedBy'], // Assuming this is the field linking to the agent
  });
  
  if (!testimonial || testimonial.submittedBy?.id !== user.id) {
    return false;
  }
  
  return true;
};
