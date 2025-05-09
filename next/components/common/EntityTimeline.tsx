import React from 'react';
import { Timeline, Card, Typography, Spin } from 'antd';
import { ClockCircleOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Text } = Typography;

interface TimelineEvent {
  id: string;
  type: 'note' | 'status_change' | 'task' | 'system';
  title: string;
  content: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
  };
}

interface EntityTimelineProps {
  entityId: string;
  entityType: 'customer' | 'property' | 'deal' | 'task';
  loading?: boolean;
  events?: TimelineEvent[];
}

const getIconForEventType = (type: string) => {
  switch (type) {
    case 'note':
      return <EditOutlined />;
    case 'status_change':
      return <CheckCircleOutlined />;
    case 'task':
      return <ClockCircleOutlined />;
    default:
      return <ClockCircleOutlined />;
  }
};

const EntityTimeline: React.FC<EntityTimelineProps> = ({ 
  entityId, 
  entityType, 
  loading = false,
  events = []
}) => {
  return (
    <Card title="Dòng thời gian" size="small" bordered={false}>
      {loading ? (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <Spin />
        </div>
      ) : events.length > 0 ? (
        <Timeline mode="left">
          {events.map((event) => (
            <Timeline.Item 
              key={event.id} 
              dot={getIconForEventType(event.type)}
            >
              <div>
                <Text strong>{event.title}</Text>
                <div>{event.content}</div>
                <div>
                  <Text type="secondary">
                    {event.user?.name} - {dayjs(event.createdAt).format('DD/MM/YYYY HH:mm')}
                  </Text>
                </div>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      ) : (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <Text type="secondary">Không có sự kiện nào</Text>
        </div>
      )}
    </Card>
  );
};

export default EntityTimeline;
