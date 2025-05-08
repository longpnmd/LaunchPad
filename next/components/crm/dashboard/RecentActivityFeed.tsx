import React from 'react';
import { Card, List, Avatar, Typography, Tag } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, CommentOutlined, ShoppingOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface Activity {
  id: string;
  type: 'call' | 'email' | 'meeting' | 'note' | 'sale';
  title: string;
  description: string;
  timestamp: string;
  user: {
    name: string;
    avatar?: string;
  };
}

interface RecentActivityFeedProps {
  activities?: Activity[];
}

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'call',
    title: 'Cuộc gọi với Nguyễn Văn A',
    description: 'Khách hàng quan tâm đến gói Premium',
    timestamp: '2023-11-10T10:30:00',
    user: {
      name: 'Trần Thị B',
      avatar: 'https://i.pravatar.cc/150?img=1'
    }
  },
  {
    id: '2',
    type: 'email',
    title: 'Gửi báo giá cho Công ty XYZ',
    description: 'Đã gửi báo giá cho gói dịch vụ 6 tháng',
    timestamp: '2023-11-10T09:15:00',
    user: {
      name: 'Lê Văn C',
      avatar: 'https://i.pravatar.cc/150?img=2'
    }
  },
  {
    id: '3',
    type: 'meeting',
    title: 'Họp với Ban Giám đốc ABC',
    description: 'Thảo luận về hợp đồng hợp tác chiến lược',
    timestamp: '2023-11-09T15:00:00',
    user: {
      name: 'Phạm Thị D',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  },
  {
    id: '4',
    type: 'sale',
    title: 'Đơn hàng mới từ Công ty MNP',
    description: 'Gói dịch vụ Pro trị giá 50.000.000 VND',
    timestamp: '2023-11-09T11:45:00',
    user: {
      name: 'Hoàng Văn E',
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  },
  {
    id: '5',
    type: 'note',
    title: 'Ghi chú về khách hàng Tập đoàn RST',
    description: 'Cần liên hệ lại vào tuần sau để xác nhận đơn hàng',
    timestamp: '2023-11-08T16:20:00',
    user: {
      name: 'Nguyễn Thị F',
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  }
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'call':
      return <PhoneOutlined style={{ color: '#1890ff' }} />;
    case 'email':
      return <MailOutlined style={{ color: '#52c41a' }} />;
    case 'meeting':
      return <UserOutlined style={{ color: '#faad14' }} />;
    case 'note':
      return <CommentOutlined style={{ color: '#722ed1' }} />;
    case 'sale':
      return <ShoppingOutlined style={{ color: '#f5222d' }} />;
    default:
      return <UserOutlined />;
  }
};

const getActivityTagColor = (type: Activity['type']) => {
  switch (type) {
    case 'call': return 'blue';
    case 'email': return 'green';
    case 'meeting': return 'orange';
    case 'note': return 'purple';
    case 'sale': return 'red';
    default: return 'default';
  }
};

const RecentActivityFeed: React.FC<RecentActivityFeedProps> = ({ activities = mockActivities }) => {
  return (
    <Card title="Hoạt động gần đây" className="h-full">
      <List
        itemLayout="horizontal"
        dataSource={activities}
        renderItem={(activity) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar icon={getActivityIcon(activity.type)} />
              }
              title={
                <div className="flex justify-between">
                  <span>{activity.title}</span>
                  <Tag color={getActivityTagColor(activity.type)}>
                    {activity.type === 'call' ? 'Cuộc gọi' :
                     activity.type === 'email' ? 'Email' :
                     activity.type === 'meeting' ? 'Cuộc họp' :
                     activity.type === 'note' ? 'Ghi chú' : 'Bán hàng'}
                  </Tag>
                </div>
              }
              description={
                <div>
                  <Text type="secondary">{activity.description}</Text>
                  <div className="mt-1 flex justify-between items-center">
                    <div className="flex items-center">
                      <Avatar size="small" src={activity.user.avatar} />
                      <Text className="ml-2" type="secondary">{activity.user.name}</Text>
                    </div>
                    <Text type="secondary">
                      {new Date(activity.timestamp).toLocaleString('vi-VN')}
                    </Text>
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RecentActivityFeed;
