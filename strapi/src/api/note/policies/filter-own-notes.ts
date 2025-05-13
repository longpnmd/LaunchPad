export default async (ctx, config, { strapi }) => {
  const user = ctx.state.user;
  
  // Only apply filter for Agents
  if (user && user.role?.name === 'Agent') {
    // Convert filters to an object if it's a string or initialize as empty if null
    const existingFilters = ctx.query.filters && typeof ctx.query.filters === 'string' 
      ? JSON.parse(ctx.query.filters) 
      : (ctx.query.filters || {});
    
    // Apply agent filter
    ctx.query.filters = {
      ...existingFilters,
      createdByUser: {
        id: user.id
      }
    };
  }
  
  return true;
};
