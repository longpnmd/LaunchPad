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
  const deal = await strapi.documents('api::deal.deal').findFirst({
    where: { id },
    populate: ['agent'],
  });
  
  if (!deal || deal.agent?.id !== user.id) {
    return false;
  }
  
  return true;
};
