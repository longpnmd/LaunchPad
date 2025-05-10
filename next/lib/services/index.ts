import { HttpClient, Api } from "./api-service";

// Token storage key
export const AUTH_TOKEN_KEY = 'auth_token';

// Function to safely access localStorage (avoids SSR issues)
export const getLocalStorageToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }
  return null;
};

// Khởi tạo API client
export const api = new Api({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337"}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  securityWorker: (token: any) => {
    // Đây là nơi định nghĩa cách áp dụng token vào requests
    // loại trừ các request không cần token
    const excludedPaths = [
      "/auth/login",
      "/auth/local",
      "/auth/local/register",
      "/auth/forgot-password",
      "/auth/reset-password",
      "/auth/email-confirmation",
      "/auth/verify-email",
      "/auth/refresh-token",
    ];
    // Kiểm tra xem đường dẫn có nằm trong danh sách loại trừ không
    // Nếu có thì không cần thêm token vào headers
    if (typeof window !== 'undefined') {
      console.log("window.location.pathname", window.location.pathname);
      const isExcluded = excludedPaths.some((path) =>
        window.location.pathname.includes(path)
      );
      if (isExcluded) {
        return {};
      }
    }
    
    if (token) {
      return {
        headers: { Authorization: `Bearer ${token}` }
      };
    }
    return {};
  }
});

// Initialize with token from localStorage if available
const storedToken = getLocalStorageToken();
if (storedToken) {
  api.setSecurityData(storedToken);
}

// Thêm các hàm xác thực
export const authenticateApi = (token: string) => {
  // Store token in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
  api.setSecurityData(token);
};

export const clearAuthentication = () => {
  // Remove token from localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
  api.setSecurityData(null);
};
