import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api, authenticateApi, clearAuthentication } from "@/lib/services";
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
      localStorage.removeItem("jwt");
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
      localStorage.setItem("jwt", data.jwt );
      authenticateApi(data.jwt);
      router.push("/dashboard");
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
    localStorage.removeItem("jwt");
    setUser(undefined);
    clearAuthentication();
    router.push("/login");
  };

  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
    if (token) {
      fetchCurrentUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  return { user, isLoading, error, login, logout, fetchCurrentUser };
};
