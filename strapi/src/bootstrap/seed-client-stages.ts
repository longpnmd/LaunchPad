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
