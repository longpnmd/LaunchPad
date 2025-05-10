import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api, AUTH_TOKEN_KEY, authenticateApi, clearAuthentication, getLocalStorageToken } from "@/lib/services";
import {
  UsersPermissionsRole,
  UsersPermissionsUser,
} from "@/lib/services/api-service";
export const useAuth = () => {
  const [user, setUser] = useState<
    (UsersPermissionsUser | null) & { role?: UsersPermissionsRole }
  >();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Lấy thông tin user hiện tại
  const fetchCurrentUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.users.getUsers();
      setUser(data);
      setError(null);
    } catch (err) {
      setUser(undefined);
      setError("Không thể lấy thông tin người dùng");
    } finally {
      setIsLoading(false);
    }
  };

  // Đăng nhập
  const login = async (identifier: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await api.auth.localCreate({
        identifier,
        password,
      });
      if(!data || !data.jwt) {
        throw new Error("Đăng nhập thất bại");
      }
      setUser(data.user);
      authenticateApi(data.jwt);
      router.push("/admin/dashboard");
      return true;
    } catch (err: any) {
      setError(err.message || "Đăng nhập thất bại");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Đăng xuất
  const logout = () => {
    setUser(undefined);
    clearAuthentication();
    router.push("/auth/login");
  };

  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    const token = getLocalStorageToken();
    if (token) {
      fetchCurrentUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  return { user, isLoading, error, login, logout, fetchCurrentUser };
};
