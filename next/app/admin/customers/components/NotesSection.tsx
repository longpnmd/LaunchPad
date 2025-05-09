import React, { useState, useEffect } from 'react';
import { List, Avatar, Card, Typography, Empty, Spin, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import NotesForm from '@/components/common/NotesForm';

const { Text, Paragraph } = Typography;

interface Note {
  id: string;
  content: string;
  createdAt: string;
  author: {
    id: string;
    username: string;
    avatar?: string;
  };
}

interface NotesSectionProps {
  customerId: string;
}

const NotesSection: React.FC<NotesSectionProps> = ({ customerId }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/notes?filters[customer]=${customerId}&sort=createdAt:desc`);
      const data = await res.json();
      setNotes(data.data?.map((item: any) => ({
        id: item.id,
        content: item.attributes.content,
        createdAt: item.attributes.createdAt,
        author: item.attributes.author?.data?.attributes || { username: 'Unknown' },
      })) || []);
    } catch (error) {
      message.error('Không thể tải ghi chú. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (customerId) {
      fetchNotes();
    }
  }, [customerId]);

  const handleNoteAdded = () => {
    fetchNotes();
  };

  return (
    <Card title="Ghi chú" bordered={false}>
      <NotesForm entityId={customerId} entityType="customer" onSuccess={handleNoteAdded} />
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <Spin />
        </div>
      ) : notes.length > 0 ? (
        <List
          itemLayout="vertical"
          dataSource={notes}
          rowKey="id"
          renderItem={(note) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar 
                    src={note.author?.avatar} 
                    icon={!note.author?.avatar && <UserOutlined />} 
                  />
                }
                title={note.author?.username}
                description={dayjs(note.createdAt).format('DD/MM/YYYY HH:mm')}
              />
              <Paragraph>{note.content}</Paragraph>
            </List.Item>
          )}
        />
      ) : (
        <Empty description="Chưa có ghi chú nào" />
      )}
    </Card>
  );
};

export default NotesSection;
