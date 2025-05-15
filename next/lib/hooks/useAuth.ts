import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../api";
type User = (API.UsersPermissionsUser | null) & {
  role?: API.UsersPermissionsRole;
};
export const useAuth = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Lấy thông tin user hiện tại
  const fetchCurrentUser = async () => {
    setIsLoading(true);
    try {
      const response = await api.usersPermissionsUsersRoles.getUsersMe() as {
        jwt?: string;
        user?: User;
      };
      setUser(response as User);
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
      const { user, jwt = "" } = (await api.usersPermissionsAuth.postAuthLocal({
        identifier,
        password,
      })) as {
        jwt?: string;
        user?: User;
      };
      setUser(user);
      localStorage.setItem("jwt", jwt);
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
