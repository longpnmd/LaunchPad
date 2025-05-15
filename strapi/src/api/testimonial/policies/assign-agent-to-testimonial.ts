export default async (ctx, config, { strapi }) => {
  const user = ctx.state.user;
  
  // Only apply for Agents
  if (user && user.role?.name === 'Agent') {
    // Force the submittedBy field to be the current user
    ctx.request.body.data = {
      ...ctx.request.body.data,
      submittedBy: user.id // Assuming this is the field linking to the agent
    };
  }
  
  return true;
};
