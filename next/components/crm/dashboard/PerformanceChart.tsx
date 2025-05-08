import React from 'react';
import { Card, Radio, Row, Col, Space } from 'antd';
import { Area } from '@ant-design/plots';

interface PerformanceData {
  date: string;
  value: number;
  category: 'leads' | 'sales' | 'revenue';
}

interface PerformanceChartProps {
  performanceData?: PerformanceData[];
}

const mockPerformanceData: PerformanceData[] = [
  // Leads data
  { date: '2023-01', category: 'leads', value: 45 },
  { date: '2023-02', category: 'leads', value: 52 },
  { date: '2023-03', category: 'leads', value: 61 },
  { date: '2023-04', category: 'leads', value: 55 },
  { date: '2023-05', category: 'leads', value: 63 },
  { date: '2023-06', category: 'leads', value: 71 },
  { date: '2023-07', category: 'leads', value: 80 },
  { date: '2023-08', category: 'leads', value: 78 },
  { date: '2023-09', category: 'leads', value: 85 },
  { date: '2023-10', category: 'leads', value: 92 },
  { date: '2023-11', category: 'leads', value: 98 },
  { date: '2023-12', category: 'leads', value: 110 },
  
  // Sales data
  { date: '2023-01', category: 'sales', value: 28 },
  { date: '2023-02', category: 'sales', value: 33 },
  { date: '2023-03', category: 'sales', value: 35 },
  { date: '2023-04', category: 'sales', value: 32 },
  { date: '2023-05', category: 'sales', value: 39 },
  { date: '2023-06', category: 'sales', value: 42 },
  { date: '2023-07', category: 'sales', value: 47 },
  { date: '2023-08', category: 'sales', value: 48 },
  { date: '2023-09', category: 'sales', value: 52 },
  { date: '2023-10', category: 'sales', value: 57 },
  { date: '2023-11', category: 'sales', value: 62 },
  { date: '2023-12', category: 'sales', value: 68 },
  
  // Revenue data (in millions VND)
  { date: '2023-01', category: 'revenue', value: 85 },
  { date: '2023-02', category: 'revenue', value: 94 },
  { date: '2023-03', category: 'revenue', value: 105 },
  { date: '2023-04', category: 'revenue', value: 98 },
  { date: '2023-05', category: 'revenue', value: 112 },
  { date: '2023-06', category: 'revenue', value: 125 },
  { date: '2023-07', category: 'revenue', value: 132 },
  { date: '2023-08', category: 'revenue', value: 138 },
  { date: '2023-09', category: 'revenue', value: 150 },
  { date: '2023-10', category: 'revenue', value: 163 },
  { date: '2023-11', category: 'revenue', value: 175 },
  { date: '2023-12', category: 'revenue', value: 192 },
];

const PerformanceChart: React.FC<PerformanceChartProps> = ({ performanceData = mockPerformanceData }) => {
  const [timeRange, setTimeRange] = React.useState<string>('year');
  const [dataType, setDataType] = React.useState<string>('leads');

  const filteredData = performanceData.filter(item => item.category === dataType);
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleString('vi-VN', { month: 'short' });
    return month;
  };

  const config = {
    data: filteredData,
    xField: 'date',
    yField: 'value',
    xAxis: {
      label: {
        formatter: (text: string) => formatDate(text),
      },
    },
    smooth: true,
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    },
    line: {
      color: '#1890ff',
    },
    tooltip: {
      formatter: (datum: any) => {
        return { 
          name: dataType === 'leads' ? 'Khách hàng tiềm năng' : 
                 dataType === 'sales' ? 'Đơn hàng' : 'Doanh thu (triệu VND)', 
          value: datum.value 
        };
      },
    },
  };

  const titleMap: Record<string, string> = {
    'leads': 'Khách hàng tiềm năng',
    'sales': 'Đơn hàng',
    'revenue': 'Doanh thu (triệu VND)'
  };

  return (
    <Card title="Hiệu suất kinh doanh" className="h-full">
      <Row justify="space-between" className="mb-4">
        <Col>
          <Radio.Group value={dataType} onChange={(e) => setDataType(e.target.value)}>
            <Radio.Button value="leads">Khách hàng tiềm năng</Radio.Button>
            <Radio.Button value="sales">Đơn hàng</Radio.Button>
            <Radio.Button value="revenue">Doanh thu</Radio.Button>
          </Radio.Group>
        </Col>
        <Col>
          <Radio.Group value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            <Radio.Button value="month">Tháng</Radio.Button>
            <Radio.Button value="quarter">Quý</Radio.Button>
            <Radio.Button value="year">Năm</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      <div style={{ height: 320 }}>
        <Area {...config} />
      </div>
    </Card>
  );
};

export default PerformanceChart;
