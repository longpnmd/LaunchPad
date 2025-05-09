import { useState, useEffect } from 'react';

type DashboardStats = {
  stats: {
    customers: number;
    properties: number;
    deals: {
      count: number;
      value: number;
    };
    tasks: {
      total: number;
      completed: number;
    };
  };
  activities: Array<{
    id: number;
    type: string;
    description: string;
    createdAt: string;
    user: {
      id: number;
      username: string;
      avatar?: string;
    };
    entity?: {
      type: string;
      id: number;
      name: string;
    };
  }>;
  upcomingTasks: Array<{
    id: number;
    title: string;
    description?: string;
    dueDate: string;
    status: string;
    priority: string;
    assignedTo: {
      id: number;
      username: string;
    };
  }>;
  performance: Array<{
    month: string;
    deals: number;
    revenue: number;
  }>;
  leadConversion: Array<{
    stage: string;
    count: number;
  }>;
};

export const useDashboardStats = () => {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      // try {
      //   setIsLoading(true);
      //   const client = getClient();
        
      //   const queryParams = new URLSearchParams({
      //     populate: JSON.stringify(['activities.user', 'upcomingTasks.assignedTo', 'performance', 'leadConversion']),
      //   }).toString();

      //   const response = await client.fetch(`dashboard/stats?${queryParams}`);
      //   if (!response.ok) {
      //     throw new Error('Failed to fetch dashboard data');
      //   }
        
      //   const { data } = await response.json();
      //   setData(data);
      //   setError(null);
      // } catch (err) {
      //   console.error('Failed to fetch dashboard data:', err);
      //   setError(err instanceof Error ? err : new Error('Failed to fetch dashboard data'));
      // } finally {
      //   setIsLoading(false);
      // }
      // mockup data
      const mockData: DashboardStats = {
        stats: {
          customers: 120,
          properties: 50,
          deals: {
            count: 30,
            value: 5000000,
          },
          tasks: {
            total: 100,
            completed: 80,
          },
        },
        activities: [
          {
            id: 1,
            type: 'deal',
            description: 'Deal closed for property ID 123',
            createdAt: '2023-10-01T12:00:00Z',
            user: {
              id: 1,
              username: 'John Doe',
              avatar: 'https://example.com/avatar.jpg',
            },
            entity: {
              type: 'property',
              id: 123,
              name: 'Luxury Apartment',
            },
          },
        ],
        upcomingTasks: [
          {
            id: 1,
            title: 'Follow up with client',
            description: 'Call the client to discuss the proposal.',
            dueDate: '2023-10-05T12:00:00Z',
            status: 'pending',
            priority: 'high',
            assignedTo: {
              id: 2,
              username: 'Jane Smith',
            },
          },
        ],
        performance: [
          {
            month: '2023-09',
            deals: 5,
            revenue: 1000000,
          },
        ],
        leadConversion: [
          {
            stage: 'Contacted',
            count: 20,
          },
        ],
      }
      setData(mockData);
      setError(null);
      setIsLoading(false);
    };

    fetchDashboardData();
  }, []);

  return { data, isLoading, error };
};
