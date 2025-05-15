import qs from "qs";
export default async (ctx, config, { strapi }) => {
  const user = ctx.state.user;

  // Only apply filter for Agents
  if (user && user.role?.name === "Agent") {
    // Convert filters to an object if it's a string or initialize as empty if null
    let query = ctx.query || ctx.request.query || {};
    const existingFilters = query && typeof query.filters === "string"
      ? JSON.parse(query.filters)
      : (query.filters || {}); // Initialize as empty object if filters is null

    // Apply agent filter
     if (ctx.request.method === 'GET') {
       query = {
         ...query,
         filters: {
           ...existingFilters,
           agent: user.id,
         },
       };
       ctx.request.query = query;
       ctx.query = query;
     }
  }

  return true;
};
