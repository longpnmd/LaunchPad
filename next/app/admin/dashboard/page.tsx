'use client';

import React from 'react';
import { Row, Col, Spin } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import OverviewStatCards from '@/components/crm/dashboard/OverviewStatCards';
import RecentActivityFeed from '@/components/crm/dashboard/RecentActivityFeed';
import UpcomingTasksList from '@/components/crm/dashboard/UpcomingTasksList';
import PerformanceChart from '@/components/crm/dashboard/PerformanceChart';
import LeadConversionFunnel from '@/components/crm/dashboard/LeadConversionFunnel';
import { useDashboardStats } from '@/lib/hooks/useDashboardStats';

export default function DashboardPage() {
  const { data, isLoading, error } = useDashboardStats();

  if (isLoading) {
    return (
      <PageContainer title="Dashboard">
        <div className="flex justify-center items-center h-64">
          <Spin size="large" tip="Đang tải dữ liệu..." />
        </div>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer title="Dashboard">
        <div className="text-red-500">
          Error: {error instanceof Error ? error.message : 'Something went wrong'}
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="Dashboard"
      subTitle="Tổng quan về hoạt động kinh doanh"
    >
      <OverviewStatCards stats={data?.stats as any} />
      
      <Row gutter={16} className="mt-6">
        <Col xs={24} lg={16}>
          <PerformanceChart performanceData={data?.performance as any} />
        </Col>
        <Col xs={24} lg={8}>
          <LeadConversionFunnel funnelData={data?.leadConversion as any} />
        </Col>
      </Row>
      
      <Row gutter={16} className="mt-6">
        <Col xs={24} lg={12}>
          <RecentActivityFeed activities={data?.activities as any} />
        </Col>
        <Col xs={24} lg={12}>
          <UpcomingTasksList tasks={data?.upcomingTasks as any} />
        </Col>
      </Row>
    </PageContainer>
  );
}
