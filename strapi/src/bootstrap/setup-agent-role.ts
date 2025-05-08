import { Core } from '@strapi/strapi';

export default async (strapi: Core.Strapi) => {
  try {
    // Kiểm tra xem đã có role Agent chưa
    const agentRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({
        where: { name: 'Agent' }
      });
    
    if (agentRole) {
      console.log('Agent role already exists, skipping...');
      return;
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
      .findMany({});

    // Thiết lập quyền cho Agent đối với các Content Types
    const agentPermissions = permissions.filter(p => {
      // Deal, Task, Customer, Note, Property
      if (['deal', 'task', 'customer', 'note', 'property'].includes(p.controller) && 
          ['api::deal', 'api::task', 'api::customer', 'api::note', 'api::property'].includes(p.provider)) {
        return ['find', 'findOne', 'create', 'update'].includes(p.action);
      }
      // ClientStage - chỉ cho phép đọc
      if (p.controller === 'client-stage' && p.provider === 'api::client-stage') {
        return ['find', 'findOne'].includes(p.action);
      }
      // Upload files
      if (p.controller === 'upload' && p.provider === 'plugin::upload') {
        return true;
      }
      // User permissions
      if (p.controller === 'user' && p.provider === 'plugin::users-permissions') {
        return ['me'].includes(p.action);
      }
      return false;
    });

    // Cập nhật quyền cho role Agent
    await Promise.all(
      agentPermissions.map(p => {
        return strapi
          .query('plugin::users-permissions.permission')
          .update({
            where: { id: p.id },
            data: { role: role.id }
          });
      })
    );

    console.log(`Agent role created with ${agentPermissions.length} permissions`);
  } catch (error) {
    console.error('Error setting up Agent role:', error);
  }
};
