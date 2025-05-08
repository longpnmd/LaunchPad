#!/bin/bash

# Script tạo bootstrap files cho CRM bất động sản trên Strapi
# Đường dẫn: /Users/longpn/Workspaces/LaunchPad/strapi/setup-bootstrap.sh

echo "===== Tạo bootstrap files cho CRM Bất động sản ====="

# Tạo thư mục bootstrap cho seeder
echo "Tạo thư mục bootstrap cho seeder..."
mkdir -p src/bootstrap

# Tạo seed-client-stages.ts
cat > src/bootstrap/seed-client-stages.ts << 'EOF'
import { Core } from '@strapi/strapi';

export default async (strapi: Core.Strapi) => {
  // Kiểm tra đã có dữ liệu ClientStage chưa
  const existingStages = await strapi.entityService.findMany('api::client-stage.client-stage', {
    fields: ['name']
  });

  if (existingStages.length > 0) {
    console.log('Client stages already seeded, skipping...');
    return;
  }

  // Danh sách các stage mặc định theo yêu cầu
  const defaultStages = [
    {
      name: 'Lead',
      purpose: 'Lead đăng ký trên website nhưng chưa phản hồi các câu hỏi ban đầu của bạn.',
      focus_on: 'Value + Responsive',
      follow_up_automation_days: 0,
      isActiveStage: false,
      isSOIStage: false
    },
    {
      name: 'Warm',
      purpose: 'Đang có giao tiếp nhưng chưa chắc chắn họ sẽ mua/bán. Khách hàng có thể đang có dấu hiệu giao dịch.',
      focus_on: 'Value',
      follow_up_automation_days: 30,
      isActiveStage: false,
      isSOIStage: false
    },
    {
      name: 'Hot',
      purpose: 'Khách hàng đang mua hoặc bán nhưng chưa ký thỏa thuận với bạn.',
      focus_on: 'Value + Conversion',
      follow_up_automation_days: 7,
      isActiveStage: false,
      isSOIStage: false
    },
    {
      name: 'Active',
      purpose: 'Khách hàng đã ký thỏa thuận với bạn.',
      focus_on: 'Experience',
      follow_up_automation_days: 0,
      isActiveStage: true,
      isSOIStage: false
    },
    {
      name: 'Pending',
      purpose: 'Khách hàng đã có đề nghị được chấp nhận với các điều kiện.',
      focus_on: 'Communication + Experience',
      follow_up_automation_days: 0,
      isActiveStage: true,
      isSOIStage: false
    },
    {
      name: 'Firm',
      purpose: 'Khách hàng đang chờ nhận tài sản.',
      focus_on: 'Communication + Experience',
      follow_up_automation_days: 14,
      isActiveStage: true,
      isSOIStage: false
    },
    {
      name: 'Super Connectors & Friends',
      purpose: 'Những người biết nhiều người trong thành phố của bạn.',
      focus_on: 'Deep Personal Relationship',
      follow_up_automation_days: 60,
      isActiveStage: false,
      isSOIStage: true
    },
    {
      name: 'SOI A',
      purpose: 'Người không có ý định giao dịch và bạn thân thiết với họ.',
      focus_on: 'Personal Relationship',
      follow_up_automation_days: 90,
      isActiveStage: false,
      isSOIStage: true
    },
    {
      name: 'SOI B',
      purpose: 'Người không có ý định giao dịch.',
      focus_on: 'Business Relationship',
      follow_up_automation_days: 180,
      isActiveStage: false,
      isSOIStage: true
    },
    {
      name: 'Support',
      purpose: 'Nhà cung cấp dịch vụ và doanh nghiệp hỗ trợ bạn.',
      focus_on: 'None',
      follow_up_automation_days: 180,
      isActiveStage: false,
      isSOIStage: false
    },
    {
      name: 'Archive',
      purpose: 'Không có ý định giữ liên lạc nhưng vẫn nhận tự động hóa.',
      focus_on: 'None',
      follow_up_automation_days: 0,
      isActiveStage: false,
      isSOIStage: false
    },
    {
      name: 'Dead',
      purpose: 'Không theo dõi và không nhận tự động hóa.',
      focus_on: 'None',
      follow_up_automation_days: 0,
      isActiveStage: false,
      isSOIStage: false
    }
  ];

  // Tạo các stage mặc định
  for (const stage of defaultStages) {
    await strapi.entityService.create('api::client-stage.client-stage', {
      data: stage
    });
  }

  console.log('Successfully seeded client stages!');
};
EOF

# Tạo setup-agent-role.ts
cat > src/bootstrap/setup-agent-role.ts << 'EOF'
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
          type: 'authenticated',
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
EOF

# Cập nhật file src/index.ts để thêm bootstrap functions
cat > src/index.ts << 'EOF'
import type { Core } from '@strapi/strapi';

import seedClientStages from './bootstrap/seed-client-stages';
import setupAgentRole from './bootstrap/setup-agent-role';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Seed client stages
    seedClientStages(strapi);
    
    // Setup agent role
    setupAgentRole(strapi);
  },
};
EOF

echo "==== Bootstrap files đã được tạo thành công! ===="
