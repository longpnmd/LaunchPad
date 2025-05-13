export default async (ctx, config, { strapi }) => {
    const user = ctx.state.user;
    
    // Only apply for Agents
    if (user && user.role?.name === 'Agent') {
      // Force the agent field to be the current user
      ctx.request.body.data = {
        ...ctx.request.body.data,
        agent: user.id
      };
    }
    
    return true;
  };