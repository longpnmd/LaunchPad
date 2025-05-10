import { Core } from '@strapi/strapi';
import seedClientStages from './seed-client-stages';
import setupAgentRole from './setup-agent-role';

export default async (strapi: Core.Strapi) => {
  console.log('Bắt đầu tạo dữ liệu mẫu...');

  try {
    // Check environment variable to determine if data should be deleted
    const shouldDeleteExistingData = process.env.SEED_DELETE_EXISTING_DATA?.toLowerCase() === 'true';
    
    if (shouldDeleteExistingData) {
      // Xóa dữ liệu hiện có trước khi seed mới
      console.log('Đang xóa dữ liệu cũ...');
      
      // Xóa theo thứ tự để tránh lỗi ràng buộc khóa ngoại
      // 1. Xóa Notes trước vì nó có reference đến nhiều entity khác
      await strapi.db.query('api::note.note').deleteMany({
        where: {}
      });
      console.log('- Đã xóa tất cả Notes');
      
      // 2. Xóa Tasks 
      await strapi.db.query('api::task.task').deleteMany({
        where: {}
      });
      console.log('- Đã xóa tất cả Tasks');
      
      // 3. Xóa Deals
      await strapi.db.query('api::deal.deal').deleteMany({
        where: {}
      });
      console.log('- Đã xóa tất cả Deals');
      
      // 4. Xóa Customers
      await strapi.db.query('api::customer.customer').deleteMany({
        where: {}
      });
      console.log('- Đã xóa tất cả Customers');
      
      // 5. Xóa Properties
      await strapi.db.query('api::property.property').deleteMany({
        where: {}
      });
      console.log('- Đã xóa tất cả Properties');
      
      // 6. Xóa Client Stages
      await strapi.db.query('api::client-stage.client-stage').deleteMany({
        where: {}
      });
      console.log('- Đã xóa tất cả Client Stages');
      // 7. Xoá Users
      await strapi.db.query('plugin::users-permissions.user').deleteMany({
        where: {
          role: {
            type: 'agent'
          }
        }
      });
      // 8. Xoá Role Agent
      await strapi.db.query('plugin::users-permissions.role').deleteMany({
        where: {
          type: 'agent'
        }
      });
      console.log('- Đã xóa tất cả Users và Role Agent');
      
    } else {
      console.log('Không xóa dữ liệu cũ, thoát khỏi quá trình seed.');
      return;
    }
    
    // Giữ lại các Agent (users) - không xóa users để tránh mất tài khoản admin

    // Tạo vai trò Agent nếu chưa có
    const agentRole = await setupAgentRole(strapi);

    // Seed Client Stages từ module chuyên biệt
    await seedClientStages(strapi);
    
    // Lấy tất cả client stages đã được tạo để sử dụng cho các entity khác
    const clientStageEntities = await strapi.entityService.findMany('api::client-stage.client-stage', {
      fields: ['id', 'name']
    });
    
    // Tạo map để dễ truy xuất stage theo tên
    const createdStages = {};
    clientStageEntities.forEach(stage => {
      createdStages[stage.name] = stage.id;
    });
    
    // Tạo Agent Users
    const agents = [
      { username: 'nguyenvanlinh', email: 'nguyenvanlinh@realty.vn', password: 'Password123', firstname: 'Nguyễn Văn', lastname: 'Linh', provider : 'local' },
      { username: 'phamthihoa', email: 'phamthihoa@realty.vn', password: 'Password123', firstname: 'Phạm Thị', lastname: 'Hoa' , provider : 'local' },
      { username: 'tranthihang', email: 'tranthihang@realty.vn', password: 'Password123', firstname: 'Trần Thị', lastname: 'Hằng' , provider : 'local' },
      { username: 'levanminh', email: 'levanminh@realty.vn', password: 'Password123', firstname: 'Lê Văn', lastname: 'Minh' , provider : 'local' },
      { username: 'hoanganhtu', email: 'hoanganhtu@realty.vn', password: 'Password123', firstname: 'Hoàng Anh', lastname: 'Tú', provider : 'local' },
      { username: 'duongthilan', email: 'duongthilan@realty.vn', password: 'Password123', firstname: 'Dương Thị', lastname: 'Lan' , provider : 'local' },
      { username: 'vohuynhnam', email: 'vohuynhnam@realty.vn', password: 'Password123', firstname: 'Võ Huỳnh', lastname: 'Nam' , provider : 'local' },
      { username: 'dothibichngoc', email: 'dothibichngoc@realty.vn', password: 'Password123', firstname: 'Đỗ Thị Bích', lastname: 'Ngọc', provider : 'local'  },
      { username: 'ngothihongngoc', email: 'ngothihongngoc@realty.vn', password: 'Password123', firstname: 'Ngô Thị Hồng', lastname: 'Ngọc' , provider : 'local' },
      { username: 'buithikimchi', email: 'buithikimchi@realty.vn', password: 'Password123', firstname: 'Bùi Thị Kim', lastname: 'Chi', provider : 'local'  }
    ];

    const createdAgents = {};
    for (const agent of agents) {
      const createdAgent = await strapi.plugins['users-permissions'].services.user.add({
        ...agent,
        role: agentRole.id,
        confirmed: true
      });
      createdAgents[agent.username] = createdAgent.id;
    }
    console.log('Đã tạo 10 agents');

    // Tạo Properties
    const properties = [
      { title: 'Căn hộ S202.001', address: 'Tầng 10, Tòa S2, Vinhomes Ocean Park, Gia Lâm, Hà Nội', price: 2500000 },
      { title: 'Căn hộ S202.002', address: 'Tầng 15, Tòa S2, Vinhomes Ocean Park, Gia Lâm, Hà Nội', price: 2700000 },
      { title: 'Căn hộ S202.003', address: 'Tầng 8, Tòa S2, Vinhomes Smart City, Nam Từ Liêm, Hà Nội', price: 2300000 },
      { title: 'Nhà phố S202.004', address: 'Khu đô thị Ciputra, Tây Hồ, Hà Nội', price: 15000000 },
      { title: 'Biệt thự S202.005', address: 'Khu đô thị Ecopark, Văn Giang, Hưng Yên', price: 22000000 },
      { title: 'Căn hộ S202.006', address: 'Tầng 20, Tòa Landmark 81, Vinhomes Central Park, Quận Bình Thạnh, TP. HCM', price: 8500000 },
      { title: 'Căn hộ S202.007', address: 'Tầng 12, Tòa Park 1, Vinhomes Central Park, Quận Bình Thạnh, TP. HCM', price: 4800000 },
      { title: 'Nhà phố S202.008', address: 'Đường Nguyễn Văn Linh, Quận 7, TP. HCM', price: 12000000 },
      { title: 'Đất nền S202.009', address: 'Khu đô thị Waterpoint, Long An', price: 3200000 },
      { title: 'Biệt thự S202.010', address: 'Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng', price: 9500000 }
    ];

    const createdProperties = {};
    for (const property of properties) {
      const randomAgentKey = Object.keys(createdAgents)[Math.floor(Math.random() * Object.keys(createdAgents).length)];
      const createdProperty = await strapi.entityService.create('api::property.property', {
        data: {
          ...property,
          listedBy: createdAgents[randomAgentKey]
        }
      });
      createdProperties[property.title] = createdProperty.id;
    }
    console.log('Đã tạo 10 bất động sản');

    // Tạo Customers
    const customerNames = [
      'Nguyễn Thị Hương', 'Trần Văn Nam', 'Lê Thị Lan', 'Phạm Văn Đức', 'Vũ Thị Hà',
      'Đặng Văn Long', 'Bùi Thị Mai', 'Hoàng Văn Thái', 'Ngô Thị Thảo', 'Đỗ Văn Thắng',
      'Mai Thị Hồng', 'Lý Văn Tùng', 'Trương Thị Hoa', 'Đinh Văn Hải', 'Võ Thị Ngọc',
      'Dương Văn Phong', 'Hồ Thị Lan Anh', 'Trịnh Văn Cường', 'Chu Thị Minh', 'Lương Văn Dũng',
      'Phan Thị Hạnh', 'Tạ Văn Tâm', 'Thái Thị Huyền', 'Phùng Văn Tuấn', 'Lương Thị Ngọc Anh',
      'Cao Văn Đạt', 'Lê Thị Tuyết Mai', 'Nguyễn Văn Cường', 'Trần Thị Mỹ Linh', 'Vũ Văn Duy'
    ];

    const customers = [];
    for (let i = 0; i < 30; i++) {
      const stageName = Object.keys(createdStages)[Math.floor(Math.random() * Object.keys(createdStages).length)];
      const randomAgentKey = Object.keys(createdAgents)[Math.floor(Math.random() * Object.keys(createdAgents).length)];
      
      const customer = {
        fullName: customerNames[i],
        email: customerNames[i].replace(/\s/g, '').toLowerCase() + '@gmail.com',
        phone: '09' + Math.floor(10000000 + Math.random() * 90000000),
        agent: createdAgents[randomAgentKey],
        stage: createdStages[stageName]
      };
      
      const createdCustomer = await strapi.entityService.create('api::customer.customer', {
        data: customer
      });
      
      customers.push(createdCustomer);
    }
    console.log('Đã tạo 30 khách hàng');

    // Tạo Deals
    const deals = [];
    for (let i = 0; i < 15; i++) {
      const randomProperty = properties[Math.floor(Math.random() * properties.length)];
      const randomCustomer = customers[Math.floor(Math.random() * customers.length)];
      const randomStageKey = ['Lead', 'Warm', 'Hot', 'Active', 'Pending', 'Firm'][Math.floor(Math.random() * 6)];
      
      const deal = {
        title: `Giao dịch ${randomProperty.title} - ${randomCustomer.fullName}`,
        description: `Giao dịch mua bán ${randomProperty.title} tại ${randomProperty.address}`,
        status: createdStages[randomStageKey],
        agent: randomCustomer.agent,
        customer: randomCustomer.id,
        property: createdProperties[randomProperty.title],
        dealValue: randomProperty.price,
        dealDate: new Date().toISOString(),
      };
      
      const createdDeal = await strapi.entityService.create('api::deal.deal', {
        data: deal
      });
      
      deals.push(createdDeal);
    }
    console.log('Đã tạo 15 giao dịch');

    // Tạo Notes
    const notesTemplates = [
      "Khách hàng quan tâm đến vị trí và tiện ích xung quanh.",
      "Khách đặt câu hỏi về chính sách thanh toán và khả năng vay ngân hàng.",
      "Khách muốn đến xem trực tiếp vào cuối tuần này.",
      "Khách đang cân nhắc giữa dự án này và một dự án khác gần đó.",
      "Khách hàng muốn biết thêm về quy hoạch khu vực trong 5 năm tới.",
      "Đã gửi thông tin chi tiết về căn hộ qua email cho khách.",
      "Khách hàng đã đồng ý đặt cọc, cần chuẩn bị hợp đồng.",
      "Khách hàng muốn thương lượng giảm giá thêm 3%.",
      "Khách quan tâm đến chất lượng xây dựng và vật liệu hoàn thiện.",
      "Khách hỏi về tình trạng pháp lý của căn hộ."
    ];
    
    const noteTitles = [
      "Ghi chú cuộc gọi đầu tiên",
      "Ghi chú về yêu cầu tài chính",
      "Lịch hẹn xem nhà",
      "So sánh dự án",
      "Câu hỏi về quy hoạch",
      "Thông tin chi tiết đã gửi",
      "Thảo luận đặt cọc",
      "Đàm phán giá",
      "Đánh giá chất lượng",
      "Thông tin pháp lý"
    ];

    for (let i = 0; i < 100; i++) {
      const templateIndex = Math.floor(Math.random() * notesTemplates.length);
      const randomTemplate = notesTemplates[templateIndex];
      const randomTitle = noteTitles[templateIndex % noteTitles.length]; // Match title with template
      const randomCustomer = customers[Math.floor(Math.random() * customers.length)];
      const randomDeal = deals.length > 0 ? deals[Math.floor(Math.random() * deals.length)] : null;
      const randomPropertyKey = Object.keys(createdProperties)[Math.floor(Math.random() * Object.keys(createdProperties).length)];
      
      // Ensure we link to at least one entity and generate a meaningful title
      const isCustomerNote = Math.random() > 0.5;
      const isDealNote = randomDeal && Math.random() > 0.5;
      const isPropertyNote = Math.random() > 0.7;
      
      // Create the note with appropriate title and linkages
      const note = {
        title: `${randomTitle} - ${i+1}`,
        content: `${randomTemplate} ${i % 3 === 0 ? 'Cần theo dõi sát sao.' : ''}${i % 5 === 0 ? ' Khách hàng có mức tài chính tốt.' : ''}`,
        author: randomCustomer.agent,
        customer: isCustomerNote ? randomCustomer.id : null,
        deal: isDealNote ? randomDeal.id : null,
        property: isPropertyNote ? createdProperties[randomPropertyKey] : null
      };
      
      await strapi.entityService.create('api::note.note', {
        data: note
      });
    }
    console.log('Đã tạo 100 ghi chú với tiêu đề và liên kết phù hợp');

    // Tạo Tasks
    const taskTemplates = [
      "Gọi điện theo dõi khách hàng",
      "Gửi thông tin chi tiết về căn hộ",
      "Đưa khách đi xem nhà",
      "Tư vấn về khoản vay ngân hàng",
      "Chuẩn bị hợp đồng đặt cọc",
      "Gặp khách ký hợp đồng mua bán",
      "Liên hệ ngân hàng về khoản vay của khách",
      "Tổ chức bàn giao nhà cho khách",
      "Xác nhận lịch công chứng",
      "Tìm kiếm thêm nhà đầu tư tiềm năng"
    ];

    for (let i = 0; i < 30; i++) {
      const randomTemplate = taskTemplates[Math.floor(Math.random() * taskTemplates.length)];
      const randomAgent = agents[Math.floor(Math.random() * agents.length)];
      const randomDeal = deals.length > 0 ? deals[Math.floor(Math.random() * deals.length)] : null;
      
      // Tạo ngày đến hạn ngẫu nhiên (từ hôm nay đến 30 ngày sau)
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + Math.floor(Math.random() * 30));
      
      const task = {
        title: `${randomTemplate} - ${i + 1}`,
        description: `Chi tiết: ${randomTemplate} cho ${randomDeal ? randomDeal.title : 'khách hàng mới'}`,
        dueDate: dueDate.toISOString(),
        assigned_to: createdAgents[randomAgent.username],
        deal: randomDeal ? randomDeal.id : null,
        status: ['pending', 'completed', 'in_progress'][Math.floor(Math.random() * 3)] as 'pending' | 'completed' | 'in_progress'
      };
      
      await strapi.entityService.create('api::task.task', {
        data: task
      });
    }
    console.log('Đã tạo 30 công việc');

    console.log('Tạo dữ liệu mẫu hoàn tất!');
  } catch (error) {
    console.error('Lỗi khi tạo dữ liệu mẫu:', error);
  }
};
