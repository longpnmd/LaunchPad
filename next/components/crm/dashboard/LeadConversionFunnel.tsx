import React from 'react';
import { Card, Space, Typography, Tooltip } from 'antd';
import { Funnel, FunnelChart, LabelList, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

const { Text } = Typography;

interface FunnelItem {
  name: string;
  value: number;
  fill: string;
}

interface LeadConversionFunnelProps {
  funnelData?: FunnelItem[];
}

const mockFunnelData: FunnelItem[] = [
  { name: 'Tiếp cận', value: 520, fill: '#8884d8' },
  { name: 'Quan tâm', value: 310, fill: '#83a6ed' },
  { name: 'Đánh giá', value: 234, fill: '#8dd1e1' },
  { name: 'Thương lượng', value: 150, fill: '#82ca9d' },
  { name: 'Chốt đơn', value: 85, fill: '#a4de6c' },
];

const LeadConversionFunnel: React.FC<LeadConversionFunnelProps> = ({ funnelData = mockFunnelData }) => {
  // Calculate conversion rates between stages
  const getConversionRates = () => {
    return funnelData.slice(0, -1).map((item, index) => {
      const currentValue = item.value;
      const nextValue = funnelData[index + 1].value;
      const rate = Math.round((nextValue / currentValue) * 100);
      
      return {
        from: item.name,
        to: funnelData[index + 1].name,
        rate: rate,
        color: item.fill
      };
    });
  };
  
  const conversionRates = getConversionRates();
  
  return (
    <Card title="Chuyển đổi khách hàng tiềm năng" className="h-full flex flex-col">
      <div className="flex-grow" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Funnel
              data={funnelData}
              dataKey="value"
              nameKey="name"
              isAnimationActive
            >
              <LabelList 
                position="right"
                fill="#000"
                stroke="none"
                dataKey="name"
                formatter={(name: string) => `${name}`}
              />
              <LabelList
                position="right"
                fill="#666"
                offset={40}
                stroke="none"
                dataKey="value"
                formatter={(value: number) => `${value}`}
              />
              <RechartsTooltip />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4">
        <Text strong>Tỷ lệ chuyển đổi:</Text>
        <Space direction="vertical" size="small" className="w-full mt-2">
          {conversionRates.map((rate, index) => (
            <Tooltip key={index} title={`${rate.from} → ${rate.to}: ${rate.rate}%`}>
              <div className="flex items-center w-full">
                <div className="text-xs w-32 truncate">{rate.from} → {rate.to}:</div>
                <div className="flex-grow bg-gray-100 h-4 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-500" 
                    style={{ 
                      width: `${rate.rate}%`,
                      backgroundColor: rate.color,
                    }}
                  />
                </div>
                <div className="ml-2 text-xs font-medium">{rate.rate}%</div>
              </div>
            </Tooltip>
          ))}
        </Space>
      </div>
    </Card>
  );
};

export default LeadConversionFunnel;
