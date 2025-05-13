import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersPermissionsRole, UsersPermissionsUser } from "../services";
import { authApi, userApi } from "../api-helper";

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
      const { data } = await userApi.usersMeGet();
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
      const { data } = await authApi.authLocalPost({
        authLocalPostRequest : { identifier, password },
      })
      if(!data || !data.jwt) {
        throw new Error("Đăng nhập thất bại");
      }
      setUser(data.user);
      localStorage.setItem("jwt", data.jwt);
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
    localStorage.removeItem("jwt");
    router.push("/auth/login");
  };

  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      fetchCurrentUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  return { user, isLoading, error, login, logout, fetchCurrentUser };
};
