// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** Default Callback from provider auth 返回值: Error GET /auth/${param0}/callback */
export async function getAuthProviderCallback(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAuthProviderCallbackParams,
  options?: { [key: string]: any }
) {
  const { provider: param0, ...queryParams } = params;
  return request<API.Error>(`/auth/${param0}/callback`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update user's own password 返回值: Error POST /auth/change-password */
export async function postAuthChangePassword(
  body: {
    password: string;
    currentPassword: string;
    passwordConfirmation: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Error>("/auth/change-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** Confirm user email 返回值: Error GET /auth/email-confirmation */
export async function getAuthEmailConfirmation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAuthEmailConfirmationParams,
  options?: { [key: string]: any }
) {
  return request<API.Error>("/auth/email-confirmation", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Send rest password email 返回值: Error POST /auth/forgot-password */
export async function postAuthForgotPassword(
  body: {
    email?: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Error>("/auth/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** Local login Returns a jwt token and user info 返回值: Error POST /auth/local */
export async function postAuthLocal(
  body: {
    identifier?: string;
    password?: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Error>("/auth/local", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** Register a user Returns a jwt token and user info 返回值: Error POST /auth/local/register */
export async function postAuthLocalRegister(
  body: {
    username?: string;
    email?: string;
    password?: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Error>("/auth/local/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** Rest user password 返回值: Error POST /auth/reset-password */
export async function postAuthResetPassword(
  body: {
    password?: string;
    passwordConfirmation?: string;
    code?: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Error>("/auth/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** Send confirmation email 返回值: Error POST /auth/send-email-confirmation */
export async function postAuthSendEmailConfirmation(
  body: {
    email?: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Error>("/auth/send-email-confirmation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** Login with a provider Redirects to provider login before being redirect to /auth/{provider}/callback 返回值: Error GET /connect/${param0} */
export async function getConnectProvider(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getConnectProviderParams,
  options?: { [key: string]: any }
) {
  const { provider: param0, ...queryParams } = params;
  return request<API.Error>(`/connect/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}
