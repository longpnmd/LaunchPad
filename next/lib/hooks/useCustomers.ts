import { api } from "@/lib/services";
import { CustomerRequest } from "@/lib/services/api-service";
import { useState, useEffect, useCallback } from "react";

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;
  stage: {
    id: number;
    name: string;
    color?: string;
  };
  assignedTo?: {
    id: number;
    username: string;
  };
  createdAt: string;
  updatedAt: string;
};

export const useCustomers = (
  filters = {},
  pagination = { page: 1, pageSize: 10 }
) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(pagination.page);
  const [pageSize, setPageSize] = useState(pagination.pageSize);

  // Fetch danh sách khách hàng
  const fetchCustomers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.customers.getCustomers({
        ...filters,
        populate: JSON.stringify(["stage", "assignedTo"]),
        sort: "updatedAt:desc",
        "pagination[page]": currentPage,
        "pagination[pageSize]": pageSize,
      });
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to fetch customers");
      }
      const { data = [], meta } = response.data;
      if(data && meta) {
        setCustomers(
          data.map((customer: any) =>customer)
        );
        setTotalCount(meta.pagination?.total ?? 0);
      }
    } catch (err) {
      console.error("Error fetching customers:", err);
      setError(
        err instanceof Error ? err : new Error("Failed to fetch customers")
      );
    } finally {
      setIsLoading(false);
    }
  }, [filters, currentPage, pageSize]);

  // Lấy chi tiết khách hàng
  const getCustomer = async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.customers.getCustomersId(id);
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to fetch customer");
      }
      const { data } = response.data;
      return data;
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to fetch customer")
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Tạo khách hàng mới
  const createCustomer = async (
    customerData: Partial<CustomerRequest["data"]>
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.customers.postCustomers({
        data: { ...customerData, fullName: customerData.fullName ?? "" },
      });
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to create customer");
      }
      const { data } = response.data;
      return data;
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to create customer")
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Cập nhật thông tin khách hàng
  const updateCustomer = async (
    id: number,
    customerData: Partial<CustomerRequest["data"]>
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.customers.putCustomersId(id, {
        data: { ...customerData, fullName: customerData.fullName ?? "" },
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to update customer");
      }

      const { data } = response.data;
      return data;
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to update customer")
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Xóa khách hàng
  const deleteCustomer = async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.customers.deleteCustomersId(id);
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to delete customer");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to delete customer")
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Thay đổi giai đoạn khách hàng
  const updateCustomerStage = async (id: number, stageId: number) => {
    return updateCustomer(id, {
      stage: stageId,
    });
  };

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return {
    customers,
    totalCount,
    isLoading,
    error,
    refetch: fetchCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    updateCustomerStage,
    setPage: setCurrentPage,
    setPageSize,
  };
};
