#!/bin/bash

# Script tạo routes và services cho CRM bất động sản trên Strapi
# Đường dẫn: /Users/longpn/Workspaces/LaunchPad/strapi/setup-routes-services.sh

echo "===== Tạo routes và services cho CRM Bất động sản ====="

# Tạo TypeScript routes cho các content types
echo "Tạo TypeScript routes cho các content types..."

# Customer routes
mkdir -p src/api/customer/routes
cat > src/api/customer/routes/customer.ts << 'EOF'
/**
 * customer router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::customer.customer');
EOF

# Deal routes
mkdir -p src/api/deal/routes
cat > src/api/deal/routes/deal.ts << 'EOF'
/**
 * deal router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::deal.deal');
EOF

# Property routes
mkdir -p src/api/property/routes
cat > src/api/property/routes/property.ts << 'EOF'
/**
 * property router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::property.property');
EOF

# Task routes
mkdir -p src/api/task/routes
cat > src/api/task/routes/task.ts << 'EOF'
/**
 * task router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::task.task');
EOF

# Note routes
mkdir -p src/api/note/routes
cat > src/api/note/routes/note.ts << 'EOF'
/**
 * note router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::note.note');
EOF

# Client Stage routes
mkdir -p src/api/client-stage/routes
cat > src/api/client-stage/routes/client-stage.ts << 'EOF'
/**
 * client-stage router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::client-stage.client-stage');
EOF

# Tạo TypeScript services cho các content types
echo "Tạo TypeScript services cho các content types..."

# Customer service
mkdir -p src/api/customer/services
cat > src/api/customer/services/customer.ts << 'EOF'
/**
 * customer service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::customer.customer');
EOF

# Deal service
mkdir -p src/api/deal/services
cat > src/api/deal/services/deal.ts << 'EOF'
/**
 * deal service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::deal.deal');
EOF

# Property service
mkdir -p src/api/property/services
cat > src/api/property/services/property.ts << 'EOF'
/**
 * property service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::property.property');
EOF

# Task service
mkdir -p src/api/task/services
cat > src/api/task/services/task.ts << 'EOF'
/**
 * task service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::task.task');
EOF

# Note service
mkdir -p src/api/note/services
cat > src/api/note/services/note.ts << 'EOF'
/**
 * note service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::note.note');
EOF

# Client Stage service
mkdir -p src/api/client-stage/services
cat > src/api/client-stage/services/client-stage.ts << 'EOF'
/**
 * client-stage service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::client-stage.client-stage');
EOF

# Tạo follow-up service cho Customer
cat > src/api/customer/services/follow-up.ts << 'EOF'
/**
 * Follow-up service cho Customer
 */

import { Core } from '@strapi/strapi';

// Define an interface for the Customer with stage property
interface CustomerWithStage {
  id: number;
  stage?: {
    follow_up_automation_days: number;
  };
  [key: string]: any;
}

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  /**
   * Cập nhật nextFollowUp cho khách hàng dựa theo stage
   */
  async updateNextFollowUp(customerId: number) {
    try {
      // Lấy thông tin khách hàng kèm stage
      const customer = await strapi.entityService.findOne('api::customer.customer' as any, customerId, {
        populate: { stage: true }
      }) as CustomerWithStage;
      
      if (!customer || !customer.stage) {
        return;
      }
      
      // Lấy chu kỳ follow-up từ stage
      const followUpDays = customer.stage.follow_up_automation_days;
      
      // Nếu followUpDays = 0, không cần tạo nextFollowUp
      if (followUpDays === 0) {
        return;
      }
      
      // Tính ngày nextFollowUp
      const now = new Date();
      const nextFollowUp = new Date();
      nextFollowUp.setDate(now.getDate() + followUpDays);
      
      // Cập nhật khách hàng
      await strapi.entityService.update('api::customer.customer' as any, customerId, {
        data: {
          nextFollowUp,
          lastContacted: now
        }
      });
      
      return { success: true };
    } catch (err) {
      return { error: (err as Error).message };
    }
  },
  
  /**
   * Kiểm tra và thông báo các khách hàng cần follow-up hôm nay
   */
  async checkDueFollowUps() {
    try {
      // Lấy danh sách khách hàng cần follow-up hôm nay
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const dueCustomers = await strapi.entityService.findMany('api::customer.customer' as any, {
        filters: {
          nextFollowUp: {
            $gte: today,
            $lt: tomorrow
          }
        },
        populate: ['agent', 'stage']
      }) as CustomerWithStage[];
      
      // TODO: Gửi thông báo cho agent
      return { count: dueCustomers.length, customers: dueCustomers };
    } catch (err) {
      return { error: (err as Error).message };
    }
  }
});
EOF

# Tạo cron task cho follow-up tự động
mkdir -p src/api/customer/config
cat > src/api/customer/config/cron-tasks.ts << 'EOF'
import { Core } from '@strapi/strapi';

export default {
  /**
   * Every day at 9am check for customers that need follow up
   */
  '0 9 * * *': async ({ strapi }: { strapi: Core.Strapi }) => {
    try {
      const result = await strapi.service('api::customer.follow-up').checkDueFollowUps();
      console.log(`Found ${result.count} customers requiring follow-up today`);
      
      // TODO: Add integration with email/notification system
    } catch (error) {
      console.error('Error executing follow-up cron job:', error);
    }
  }
};
EOF

echo "==== Routes và services đã được tạo thành công! ===="
