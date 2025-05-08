'use client';

import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, PhoneOutlined } from '@ant-design/icons';

interface StatsData {
  newLeads: number;
  totalSales: number;
  revenue: number;
  followUps: number;
}

interface OverviewStatCardsProps {
  stats?: StatsData;
}

const mockStats: StatsData = {
  newLeads: 124,
  totalSales: 85,
  revenue: 268500000,
  followUps: 42
};

const OverviewStatCards: React.FC<OverviewStatCardsProps> = ({ stats = mockStats }) => {
  return (
    <Row gutter={16}>
      <Col xs={24} sm={12} md={6}>
        <Card className="shadow-sm">
          <Statistic
            title="Khách hàng tiềm năng mới"
            value={stats.newLeads}
            valueStyle={{ color: '#1890ff' }}
            prefix={<UserOutlined />}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="shadow-sm">
          <Statistic
            title="Tổng đơn hàng"
            value={stats.totalSales}
            valueStyle={{ color: '#52c41a' }}
            prefix={<ShoppingCartOutlined />}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="shadow-sm">
          <Statistic
            title="Doanh thu (VND)"
            value={stats.revenue}
            valueStyle={{ color: '#faad14' }}
            prefix={<DollarOutlined />}
            formatter={(value) => `${value.toLocaleString('vi-VN')}`}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="shadow-sm">
          <Statistic
            title="Cuộc gọi theo dõi"
            value={stats.followUps}
            valueStyle={{ color: '#eb2f96' }}
            prefix={<PhoneOutlined />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default OverviewStatCards;
