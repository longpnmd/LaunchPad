import React from 'react';
import { Tag } from 'antd';

// Định nghĩa các trạng thái và màu sắc tương ứng
const stageColors: Record<string, string> = {
  'Lead': '#5cdbd3',
  'Warm': '#ffc53d', 
  'Hot': '#ff7a45',
  'Active': '#73d13d',
  'Pending': '#36cfc9',
  'Firm': '#40a9ff',
  'Super Connectors & Friends': '#9254de',
  'SOI A': '#597ef7',
  'SOI B': '#85a5ff',
  'Support': '#b37feb',
  'Archive': '#bfbfbf',
  'Dead': '#d9d9d9',
};

interface StageTagProps {
  stage: string;
  className?: string;
}

const StageTag: React.FC<StageTagProps> = ({ stage, className }) => {
  return (
    <Tag color={stageColors[stage] || 'default'} className={className}>
      {stage}
    </Tag>
  );
};

export default StageTag;
