// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** 此处后端没有提供注释 GET /pages */
export async function getPages(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pagesParams,
  options?: { [key: string]: any }
) {
  return request<API.PageListResponse>("/pages", {
    method: "GET",
    params: {
      ...params,
      filters: undefined,
      ...params["filters"],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /pages */
export async function postPages(
  body: API.PageRequest,
  options?: { [key: string]: any }
) {
  return request<API.PageResponse>("/pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /pages/${param0} */
export async function getPagesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PageResponse>(`/pages/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /pages/${param0} */
export async function putPagesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  body: API.PageRequest,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PageResponse>(`/pages/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /pages/${param0} */
export async function deletePagesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<number>(`/pages/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}
