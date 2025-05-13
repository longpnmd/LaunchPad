export default async (ctx, config, { strapi }) => {
  const user = ctx.state.user;
  
  // Only apply for Agents
  if (user && user.role?.name === 'Agent') {
    // Force the createdByUser field to be the current user
    ctx.request.body.data = {
      ...ctx.request.body.data,
      createdByUser: user.id
    };
  }
  
  return true;
};
