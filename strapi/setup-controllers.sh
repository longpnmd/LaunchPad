#!/bin/bash

# Script tạo controllers cho CRM bất động sản trên Strapi
# Đường dẫn: /Users/longpn/Workspaces/LaunchPad/strapi/setup-controllers.sh

echo "===== Tạo controllers cho CRM Bất động sản ====="

# Tạo thư mục cho tất cả các controllers
echo "Tạo thư mục cho các controllers..."
mkdir -p src/api/customer/controllers
mkdir -p src/api/deal/controllers
mkdir -p src/api/task/controllers
mkdir -p src/api/note/controllers
mkdir -p src/api/property/controllers
mkdir -p src/api/client-stage/controllers

# Tạo TypeScript controller cho Customer
echo "Tạo TypeScript controller cho Customer..."
cat > src/api/customer/controllers/customer.ts << 'EOF'
/**
 * customer controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::customer.customer' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        agent: user.id, // Chỉ lấy Customer của chính agent này
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const customer: any = await strapi.entityService.findOne('api::customer.customer' as any, id, {
        fields: ['id'],
        populate: { agent: true },
      });
      
      if (!customer || customer.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't access this customer`);
      }
    }
    
    return await super.findOne(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "agent" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        agent: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Customer của họ
    if (user && user.role && user.role.name === 'Agent') {
      const customer: any = await strapi.entityService.findOne('api::customer.customer' as any, ctx.params.id, {
        fields: ['id'],
        populate: { agent: true },
      });

      if (!customer || customer.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't update this customer`);
      }

      // Ép luôn agent = chính họ (phòng trường hợp cố tình đổi)
      ctx.request.body.data = {
        ...ctx.request.body.data,
        agent: user.id
      };
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Customer của họ
    if (user && user.role && user.role.name === 'Agent') {
      const customer: any = await strapi.entityService.findOne('api::customer.customer' as any, ctx.params.id, {
        fields: ['id'],
        populate: { agent: true },
      });

      if (!customer || customer.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this customer`);
      }
    }

    return await super.delete(ctx);
  }
}));
EOF

# Tạo TypeScript controller cho Deal
echo "Tạo TypeScript controller cho Deal..."
cat > src/api/deal/controllers/deal.ts << 'EOF'
/**
 * deal controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::deal.deal' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        agent: user.id, // Chỉ lấy Deal của chính agent này
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const deal: any = await strapi.entityService.findOne('api::deal.deal' as any, id, {
        fields: ['id'],
        populate: { agent: true },
      });
      
      if (!deal || deal.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't access this deal`);
      }
    }
    
    return await super.findOne(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "agent" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        agent: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Deal của họ
    if (user && user.role && user.role.name === 'Agent') {
      const deal: any = await strapi.entityService.findOne('api::deal.deal' as any, ctx.params.id, {
        fields: ['id'],
        populate: { agent: true },
      });

      if (!deal || deal.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't update this deal`);
      }

      // Ép luôn agent = chính họ (phòng trường hợp cố tình đổi)
      ctx.request.body.data = {
        ...ctx.request.body.data,
        agent: user.id
      };
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Deal của họ
    if (user && user.role && user.role.name === 'Agent') {
      const deal: any = await strapi.entityService.findOne('api::deal.deal' as any, ctx.params.id, {
        fields: ['id'],
        populate: { agent: true },
      });

      if (!deal || deal.agent?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this deal`);
      }
    }

    return await super.delete(ctx);
  }
}));
EOF

# Tạo TypeScript controller cho Task
echo "Tạo TypeScript controller cho Task..."
cat > src/api/task/controllers/task.ts << 'EOF'
/**
 * task controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::task.task' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        assignedTo: user.id, // Chỉ lấy Task được assign cho Agent
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const task: any = await strapi.entityService.findOne('api::task.task' as any, id, {
        fields: ['id'],
        populate: { assignedTo: true },
      });
      
      if (!task || task.assignedTo?.id !== user.id) {
        return ctx.unauthorized(`You can't access this task`);
      }
    }
    
    return await super.findOne(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "assignedTo" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        assignedTo: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Task của họ
    if (user && user.role && user.role.name === 'Agent') {
      const task: any = await strapi.entityService.findOne('api::task.task' as any, ctx.params.id, {
        fields: ['id'],
        populate: { assignedTo: true },
      });

      if (!task || task.assignedTo?.id !== user.id) {
        return ctx.unauthorized(`You can't update this task`);
      }

      // Ép luôn assignedTo = chính họ (phòng trường hợp cố tình đổi)
      ctx.request.body.data = {
        ...ctx.request.body.data,
        assignedTo: user.id
      };
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Task của họ
    if (user && user.role && user.role.name === 'Agent') {
      const task: any = await strapi.entityService.findOne('api::task.task' as any, ctx.params.id, {
        fields: ['id'],
        populate: { assignedTo: true },
      });

      if (!task || task.assignedTo?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this task`);
      }
    }

    return await super.delete(ctx);
  }
}));
EOF

# Tạo TypeScript controller cho Note
echo "Tạo TypeScript controller cho Note..."
cat > src/api/note/controllers/note.ts << 'EOF'
/**
 * note controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::note.note' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        createdByUser: user.id, // Chỉ lấy Note của chính agent này
      };
    }

    return await super.find(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "createdByUser" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        createdByUser: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Note của họ
    if (user && user.role && user.role.name === 'Agent') {
      const note: any = await strapi.entityService.findOne('api::note.note' as any, ctx.params.id, {
        fields: ['id'],
        populate: { createdByUser: true },
      });

      if (!note || note.createdByUser?.id !== user.id) {
        return ctx.unauthorized(`You can't update this note`);
      }
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Note của họ
    if (user && user.role && user.role.name === 'Agent') {
      const note: any = await strapi.entityService.findOne('api::note.note' as any, ctx.params.id, {
        fields: ['id'],
        populate: { createdByUser: true },
      });

      if (!note || note.createdByUser?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this note`);
      }
    }

    return await super.delete(ctx);
  }
}));
EOF

# Tạo TypeScript controller cho Property
echo "Tạo TypeScript controller cho Property..."
cat > src/api/property/controllers/property.ts << 'EOF'
/**
 * property controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::property.property' as any, ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;

    // Nếu user là agent (không phải admin)
    if (user && user.role && user.role.name === 'Agent') {
      ctx.query.filters = {
        ...(typeof ctx.query.filters === 'object' && ctx.query.filters !== null ? ctx.query.filters : {}),
        listedBy: user.id, // Chỉ lấy Property của chính agent này
      };
    }

    return await super.find(ctx);
  },

  async findOne(ctx) {
    const user = ctx.state.user;
    
    if (user && user.role && user.role.name === 'Agent') {
      const { id } = ctx.params;
      const property: any = await strapi.entityService.findOne('api::property.property' as any, id, {
        fields: ['id'],
        populate: { listedBy: true },
      });
      
      if (!property || property.listedBy?.id !== user.id) {
        return ctx.unauthorized(`You can't access this property`);
      }
    }
    
    return await super.findOne(ctx);
  },

  async create(ctx) {
    const user = ctx.state.user;
    
    // Nếu là Agent thì ép field "listedBy" = chính họ
    if (user && user.role && user.role.name === 'Agent') {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        listedBy: user.id
      };
    }

    return await super.create(ctx);
  },

  async update(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent update Property của họ
    if (user && user.role && user.role.name === 'Agent') {
      const property: any = await strapi.entityService.findOne('api::property.property' as any, ctx.params.id, {
        fields: ['id'],
        populate: { listedBy: true },
      });

      if (!property || property.listedBy?.id !== user.id) {
        return ctx.unauthorized(`You can't update this property`);
      }

      // Ép luôn listedBy = chính họ (phòng trường hợp cố tình đổi)
      ctx.request.body.data = {
        ...ctx.request.body.data,
        listedBy: user.id
      };
    }

    return await super.update(ctx);
  },
  
  async delete(ctx) {
    const user = ctx.state.user;

    // Check quyền: Chỉ cho Agent xóa Property của họ
    if (user && user.role && user.role.name === 'Agent') {
      const property: any = await strapi.entityService.findOne('api::property.property' as any, ctx.params.id, {
        fields: ['id'],
        populate: { listedBy: true },
      });

      if (!property || property.listedBy?.id !== user.id) {
        return ctx.unauthorized(`You can't delete this property`);
      }
    }

    return await super.delete(ctx);
  }
}));
EOF

# Tạo TypeScript controller cho ClientStage
echo "Tạo TypeScript controller cho ClientStage..."
cat > src/api/client-stage/controllers/client-stage.ts << 'EOF'
/**
 * client-stage controller
 */

import { factories } from '@strapi/strapi';

// ClientStage chỉ là read-only đối với Agent, nên không cần custom gì nhiều
export default factories.createCoreController('api::client-stage.client-stage' as any);
EOF

echo "==== Controllers đã được tạo thành công! ===="
