// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** 此处后端没有提供注释 GET /global */
export async function getGlobal(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.globalParams,
  options?: { [key: string]: any }
) {
  return request<API.GlobalResponse>("/global", {
    method: "GET",
    params: {
      ...params,
      filters: undefined,
      ...params["filters"],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /global */
export async function putGlobal(
  body: API.GlobalRequest,
  options?: { [key: string]: any }
) {
  return request<API.GlobalResponse>("/global", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /global */
export async function deleteGlobal(options?: { [key: string]: any }) {
  return request<number>("/global", {
    method: "DELETE",
    ...(options || {}),
  });
}
