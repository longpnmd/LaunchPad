#!/bin/bash

# Script tạo schema cho CRM bất động sản trên Strapi
# Đường dẫn: /Users/longpn/Workspaces/LaunchPad/strapi/setup-schemas.sh

echo "===== Tạo schema cho CRM Bất động sản ====="

# Tạo thư mục cho các content types
echo "Tạo thư mục cho các content types..."
mkdir -p src/api/client-stage/content-types/client-stage
mkdir -p src/api/customer/content-types/customer 
mkdir -p src/api/deal/content-types/deal
mkdir -p src/api/property/content-types/property
mkdir -p src/api/note/content-types/note
mkdir -p src/api/task/content-types/task

# Tạo schema cho Client Stage
echo "Tạo schema cho Client Stage..."
cat > src/api/client-stage/content-types/client-stage/schema.json << 'EOF'
{
  "kind": "collectionType",
  "collectionName": "client_stages",
  "info": {
    "singularName": "client-stage", 
    "pluralName": "client-stages", 
    "displayName": "Client Stage",
    "description": "Define stages in customer lifecycle"
  },
  "options": {
    "draftAndPublish": false
  },
  "attributes": {
    "name": {
      "type": "string",
      "required": true,
      "unique": true
    },
    "purpose": {
      "type": "string"
    },
    "focus_on": {
      "type": "string"
    },
    "follow_up_automation_days": {
      "type": "integer",
      "default": 0
    },
    "description": {
      "type": "text"
    },
    "isActiveStage": {
      "type": "boolean",
      "default": false
    },
    "isSOIStage": {
      "type": "boolean",
      "default": false
    },
    "customers": {
      "type": "relation",
      "relation": "oneToMany",
      "target": "api::customer.customer",
      "mappedBy": "stage"
    }
  }
}
EOF

# Tạo schema cho Customer
echo "Tạo schema cho Customer..."
cat > src/api/customer/content-types/customer/schema.json << 'EOF'
{
  "kind": "collectionType",
  "collectionName": "customers",
  "info": {
    "singularName": "customer", 
    "pluralName": "customers", 
    "displayName": "Customer",
    "description": "Customer/Client information"
  },
  "options": {
    "draftAndPublish": false
  },
  "attributes": {
    "fullName": {
      "type": "string",
      "required": true
    },
    "email": {
      "type": "email"
    },
    "phone": {
      "type": "string"
    },
    "source": {
      "type": "enumeration",
      "enum": ["website", "facebook", "zalo", "referral", "event", "other"]
    },
    "agent": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "plugin::users-permissions.user"
    },
    "stage": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::client-stage.client-stage",
      "inversedBy": "customers"
    },
    "deals": {
      "type": "relation",
      "relation": "oneToMany",
      "target": "api::deal.deal",
      "mappedBy": "customer"
    },
    "notes": {
      "type": "relation",
      "relation": "oneToMany",
      "target": "api::note.note",
      "mappedBy": "customer"
    },
    "lastContacted": {
      "type": "datetime"
    },
    "nextFollowUp": {
      "type": "datetime"
    }
  }
}
EOF

# Tạo schema cho Deal
echo "Tạo schema cho Deal..."
cat > src/api/deal/content-types/deal/schema.json << 'EOF'
{
  "kind": "collectionType",
  "collectionName": "deals",
  "info": {
    "singularName": "deal", 
    "pluralName": "deals", 
    "displayName": "Deal",
    "description": "Real estate transactions"
  },
  "options": {
    "draftAndPublish": false
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "status": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::client-stage.client-stage"
    },
    "dealValue": {
      "type": "decimal"
    },
    "dealDate": {
      "type": "date"
    },
    "customer": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::customer.customer",
      "inversedBy": "deals"
    },
    "property": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::property.property", 
      "inversedBy": "deals"
    },
    "agent": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "plugin::users-permissions.user"
    },
    "notes": {
      "type": "relation",
      "relation": "oneToMany", 
      "target": "api::note.note",
      "mappedBy": "deal"
    }
  }
}
EOF

# Tạo schema cho Property
echo "Tạo schema cho Property..."
cat > src/api/property/content-types/property/schema.json << 'EOF'
{
  "kind": "collectionType",
  "collectionName": "properties",
  "info": {
    "singularName": "property", 
    "pluralName": "properties", 
    "displayName": "Property",
    "description": "Real estate property information"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "propertyType": {
      "type": "enumeration",
      "enum": ["apartment", "house", "land", "villa", "commercial", "other"]
    },
    "location": {
      "type": "string"
    },
    "price": {
      "type": "decimal"
    },
    "area": {
      "type": "decimal",
      "min": 0
    },
    "bedrooms": {
      "type": "integer",
      "min": 0
    },
    "bathrooms": {
      "type": "integer",
      "min": 0
    },
    "status": {
      "type": "enumeration",
      "enum": ["available", "sold", "pending", "off-market"]
    },
    "description": {
      "type": "richtext"
    },
    "images": {
      "type": "media",
      "multiple": true,
      "allowedTypes": ["images"]
    },
    "listedBy": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "plugin::users-permissions.user"
    },
    "deals": {
      "type": "relation",
      "relation": "oneToMany",
      "target": "api::deal.deal",
      "mappedBy": "property"
    },
    "notes": {
      "type": "relation",
      "relation": "oneToMany",
      "target": "api::note.note",
      "mappedBy": "property"
    }
  }
}
EOF

# Tạo schema cho Task
echo "Tạo schema cho Task..."
cat > src/api/task/content-types/task/schema.json << 'EOF'
{
  "kind": "collectionType",
  "collectionName": "tasks",
  "info": {
    "singularName": "task", 
    "pluralName": "tasks", 
    "displayName": "Task",
    "description": "Work items and reminders"
  },
  "options": {
    "draftAndPublish": false
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "description": {
      "type": "richtext"
    },
    "dueDate": {
      "type": "datetime"
    },
    "assignedTo": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "plugin::users-permissions.user"
    },
    "status": {
      "type": "enumeration",
      "enum": ["pending", "in_progress", "completed"],
      "default": "pending"
    },
    "relatedDeal": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::deal.deal"
    },
    "notes": {
      "type": "relation",
      "relation": "oneToMany",
      "target": "api::note.note",
      "mappedBy": "task"
    }
  }
}
EOF

# Tạo schema cho Note
echo "Tạo schema cho Note..."
cat > src/api/note/content-types/note/schema.json << 'EOF'
{
  "kind": "collectionType",
  "collectionName": "notes",
  "info": {
    "singularName": "note", 
    "pluralName": "notes", 
    "displayName": "Note",
    "description": "Polymorphic notes for all entities"
  },
  "options": {
    "draftAndPublish": false
  },
  "attributes": {
    "title": {
      "type": "string"
    },
    "content": {
      "type": "richtext",
      "required": true
    },
    "createdByUser": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "plugin::users-permissions.user"
    },
    "customer": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::customer.customer",
      "inversedBy": "notes"
    },
    "deal": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::deal.deal",
      "inversedBy": "notes"
    },
    "property": {
      "type": "relation",
      "relation": "manyToOne", 
      "target": "api::property.property",
      "inversedBy": "notes"
    },
    "task": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::task.task",
      "inversedBy": "notes"
    }
  }
}
EOF

echo "==== Schema đã được tạo thành công! ===="
