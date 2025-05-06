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
      await strapi.entityService.update('api::customer.customer', customerId, {
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
      
      const dueCustomers = await strapi.entityService.findMany('api::customer.customer', {
        filters: {
          nextFollowUp: {
            $gte: today,
            $lt: tomorrow
          }
        },
        populate: ['agent', 'stage']
      });
      
      // TODO: Gửi thông báo cho agent
      return { count: dueCustomers.length, customers: dueCustomers };
    } catch (err) {
      return { error: err.message };
    }
  }
});
