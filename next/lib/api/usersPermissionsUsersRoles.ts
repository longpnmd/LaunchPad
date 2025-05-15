// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** Get list of users 返回值: Error GET /users */
export async function getUsers(options?: { [key: string]: any }) {
  return request<API.Error>("/users", {
    method: "GET",
    ...(options || {}),
  });
}

/** Create a user 返回值: Error POST /users */
export async function postUsers(
  body: {
    email: string;
    username: string;
    password: string;
  },
  options?: { [key: string]: any }
) {
  return request<API.Error>("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** Get default generated permissions 返回值: Error GET /users-permissions/permissions */
export async function getUsersPermissionsPermissions(options?: {
  [key: string]: any;
}) {
  return request<API.Error>("/users-permissions/permissions", {
    method: "GET",
    ...(options || {}),
  });
}

/** List roles 返回值: Error GET /users-permissions/roles */
export async function getUsersPermissionsRoles(options?: {
  [key: string]: any;
}) {
  return request<API.Error>("/users-permissions/roles", {
    method: "GET",
    ...(options || {}),
  });
}

/** Create a role 返回值: Error POST /users-permissions/roles */
export async function postUsersPermissionsRoles(
  body: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: API.UsersPermissionsPermissionsTree;
  },
  options?: { [key: string]: any }
) {
  return request<API.Error>("/users-permissions/roles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** Get a role 返回值: Error GET /users-permissions/roles/${param0} */
export async function getUsersPermissionsRolesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersPermissionsRolesIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Error>(`/users-permissions/roles/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update a role 返回值: Error PUT /users-permissions/roles/${param0} */
export async function putUsersPermissionsRolesRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putUsersPermissionsRolesRoleParams,
  body: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: API.UsersPermissionsPermissionsTree;
  },
  options?: { [key: string]: any }
) {
  const { role: param0, ...queryParams } = params;
  return request<API.Error>(`/users-permissions/roles/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete a role 返回值: Error DELETE /users-permissions/roles/${param0} */
export async function deleteUsersPermissionsRolesRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsersPermissionsRolesRoleParams,
  options?: { [key: string]: any }
) {
  const { role: param0, ...queryParams } = params;
  return request<API.Error>(`/users-permissions/roles/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Get a user 返回值: Error GET /users/${param0} */
export async function getUsersId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Error>(`/users/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update a user 返回值: Error PUT /users/${param0} */
export async function putUsersId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putUsersIdParams,
  body: {
    email: string;
    username: string;
    password: string;
  },
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Error>(`/users/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete a user 返回值: Error DELETE /users/${param0} */
export async function deleteUsersId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsersIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Error>(`/users/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Get user count 返回值: Error GET /users/count */
export async function getUsersCount(options?: { [key: string]: any }) {
  return request<API.Error>("/users/count", {
    method: "GET",
    ...(options || {}),
  });
}

/** Get authenticated user info 返回值: Error GET /users/me */
export async function getUsersMe(options?: { [key: string]: any }) {
  return request<API.Error>("/users/me", {
    method: "GET",
    ...(options || {}),
  });
}
