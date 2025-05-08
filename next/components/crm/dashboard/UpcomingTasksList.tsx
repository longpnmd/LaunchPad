import React from 'react';
import { Card, List, Typography, Tag, Button, Avatar, Badge, Space } from 'antd';
import { CheckOutlined, CalendarOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface Task {
  id: string;
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'completed' | 'overdue';
  assignee: {
    name: string;
    avatar?: string;
  };
}

interface UpcomingTasksListProps {
  tasks?: Task[];
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Gọi điện cho khách hàng Công ty ABC',
    dueDate: '2023-11-11T10:00:00',
    priority: 'high',
    status: 'pending',
    assignee: {
      name: 'Nguyễn Văn A',
      avatar: 'https://i.pravatar.cc/150?img=10'
    }
  },
  {
    id: '2',
    title: 'Gửi báo giá dự án XYZ',
    dueDate: '2023-11-11T14:30:00',
    priority: 'medium',
    status: 'pending',
    assignee: {
      name: 'Trần Thị B',
      avatar: 'https://i.pravatar.cc/150?img=11'
    }
  },
  {
    id: '3',
    title: 'Họp nội bộ về chiến lược Q4',
    dueDate: '2023-11-12T09:00:00',
    priority: 'high',
    status: 'pending',
    assignee: {
      name: 'Lê Văn C',
      avatar: 'https://i.pravatar.cc/150?img=12'
    }
  },
  {
    id: '4',
    title: 'Cập nhật báo cáo bán hàng tháng 10',
    dueDate: '2023-11-10T17:00:00',
    priority: 'medium',
    status: 'overdue',
    assignee: {
      name: 'Phạm Thị D',
      avatar: 'https://i.pravatar.cc/150?img=13'
    }
  },
  {
    id: '5',
    title: 'Theo dõi đơn hàng khách VIP',
    dueDate: '2023-11-13T11:00:00',
    priority: 'low',
    status: 'pending',
    assignee: {
      name: 'Hoàng Văn E',
      avatar: 'https://i.pravatar.cc/150?img=14'
    }
  }
];

const getPriorityColor = (priority: Task['priority']) => {
  switch (priority) {
    case 'high': return 'red';
    case 'medium': return 'orange';
    case 'low': return 'blue';
    default: return 'default';
  }
};

const getStatusBadge = (status: Task['status']) => {
  switch (status) {
    case 'completed': return { status: 'success' as const, text: 'Hoàn thành' };
    case 'overdue': return { status: 'error' as const, text: 'Quá hạn' };
    case 'pending': return { status: 'processing' as const, text: 'Đang chờ' };
    default: return { status: 'default' as const, text: 'Không xác định' };
  }
};

const formatDueDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString('vi-VN', {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const UpcomingTasksList: React.FC<UpcomingTasksListProps> = ({ tasks = mockTasks }) => {
  return (
    <Card 
      title="Công việc sắp tới" 
      className="h-full"
      extra={<Button type="primary" size="small">Xem tất cả</Button>}
    >
      <List
        dataSource={tasks}
        renderItem={(task) => {
          const statusInfo = getStatusBadge(task.status);
          return (
            <List.Item
              actions={[
                <Button
                  icon={<CheckOutlined />}
                  type="text"
                  size="small"
                  key="complete"
                  title="Đánh dấu hoàn thành"
                />
              ]}
            >
              <List.Item.Meta
                title={
                  <div>
                    <Badge status={statusInfo.status} text={task.title} />
                  </div>
                }
                description={
                  <Space direction="vertical" size={2}>
                    <div className="flex items-center gap-2">
                      <CalendarOutlined />
                      <Text type="secondary">{formatDueDate(task.dueDate)}</Text>
                      <Tag color={getPriorityColor(task.priority)}>
                        {task.priority === 'high' ? 'Cao' : 
                         task.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                      </Tag>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar size="small" src={task?.assignee?.avatar} icon={!task?.assignee?.avatar && <UserOutlined />} />
                      <Text type="secondary">{task?.assignee?.name}</Text>
                    </div>
                  </Space>
                }
              />
            </List.Item>
          );
        }}
      />
    </Card>
  );
};

export default UpcomingTasksList;
