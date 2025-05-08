import { HttpClient, Api } from "./api-service";

// Khởi tạo API client
export const api = new Api({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337"}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  securityWorker: (token) => {
    // Đây là nơi định nghĩa cách áp dụng token vào requests
    if (token) {
      return {
        headers: { Authorization: `Bearer ${token}` }
      };
    }
    return {};
  }
});

// Thêm các hàm xác thực
export const authenticateApi = (token: string) => {
  api.setSecurityData(token);
};

export const clearAuthentication = () => {
  api.setSecurityData(null);
};
