// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** 此处后端没有提供注释 GET /tasks */
export async function getTasks(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tasksParams,
  options?: { [key: string]: any }
) {
  return request<API.TaskListResponse>("/tasks", {
    method: "GET",
    params: {
      ...params,
      filters: undefined,
      ...params["filters"],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /tasks */
export async function postTasks(
  body: API.TaskRequest,
  options?: { [key: string]: any }
) {
  return request<API.TaskResponse>("/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /tasks/${param0} */
export async function getTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TaskResponse>(`/tasks/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /tasks/${param0} */
export async function putTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  body: API.TaskRequest,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TaskResponse>(`/tasks/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /tasks/${param0} */
export async function deleteTasksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<number>(`/tasks/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}
