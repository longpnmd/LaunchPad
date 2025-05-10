import { Core } from '@strapi/strapi';

export default async (strapi: Core.Strapi) => {
  try {
    // Kiểm tra xem đã có role Agent chưa
    const agentRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({
        where: { type: 'agent' }
      });
    
    if (agentRole) {
      console.log('Agent role already exists, skipping...');
      return agentRole;
    }

    // Tạo role Agent mới
    const role = await strapi
      .query('plugin::users-permissions.role')
      .create({
        data: {
          name: 'Agent',
          description: 'Real estate agent who can manage their deals, tasks, and customers',
          type: 'agent',
        }
      });

    // Lấy danh sách tất cả các permissions
    const permissions = await strapi
      .query('plugin::users-permissions.permission')
      .findMany({
        populate: {
          role: true,
        },
      });
    console.log(`- Found ${permissions.length} permissions`);
    // console.log(`- ALL permission: ${JSON.stringify(permissions)}`);
    // Thiết lập quyền cho Agent đối với các Content Types
    const agentPermissions = permissions.filter(p => {
      // Parse the action string to extract provider and controller
      const actionParts = p.action.split('.');
      if (actionParts.length < 2) return false;
      
      const provider = actionParts[0]; // e.g., "api::deal"
      const controller = actionParts[1]; // e.g., "deal"
      const actionType = actionParts[actionParts.length - 1]; // e.g., "find"
      
      // Deal, Task, Customer, Note, Property - full CRUD (except delete)
      if (['deal', 'task', 'customer', 'note', 'property'].includes(controller) && 
          provider.startsWith('api::')) {
        return ['find', 'findOne', 'create', 'update'].includes(actionType);
      }
      
      // Read-only content types: client-stage, category, testimonial, product, plan
      if (['client-stage', 'category', 'testimonial', 'product', 'plan'].includes(controller) && 
          provider.startsWith('api::')) {
        return ['find', 'findOne'].includes(actionType);
      }
      
      // Upload files
      if (controller === 'upload' && provider === 'plugin::upload') {
        return true;
      }
      
      // User permissions
      if (controller === 'user' && provider === 'plugin::users-permissions') {
        return actionType === 'me';
      }
      
      return false;
    });
    console.log(`- Found ${agentPermissions.length} permissions for Agent role`);

    // Cập nhật quyền cho role Agent - sequential updates to avoid deadlocks
    console.log(`- Updating permissions for Agent role...`);
    for (const p of agentPermissions) {
      try {
        await strapi
          .query('plugin::users-permissions.permission')
          .update({
            where: { id: p.id },
            data: { role: role.id }
          });
      } catch (updateError) {
        console.error(`Failed to update permission ID ${p.id}:`, updateError);
        // Continue with other permissions even if one fails
      }
    }

    console.log(`Agent role created with ${agentPermissions.length} permissions`);
    return role;
  } catch (error) {
    console.error('Error setting up Agent role:', error);
  }
};
