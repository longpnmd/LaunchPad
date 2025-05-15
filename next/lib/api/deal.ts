// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** 此处后端没有提供注释 GET /deals */
export async function getDeals(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dealsParams,
  options?: { [key: string]: any }
) {
  return request<API.DealListResponse>("/deals", {
    method: "GET",
    params: {
      ...params,
      filters: undefined,
      ...params["filters"],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /deals */
export async function postDeals(
  body: API.DealRequest,
  options?: { [key: string]: any }
) {
  return request<API.DealResponse>("/deals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /deals/${param0} */
export async function getDealsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DealResponse>(`/deals/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /deals/${param0} */
export async function putDealsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  body: API.DealRequest,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DealResponse>(`/deals/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /deals/${param0} */
export async function deleteDealsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<number>(`/deals/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}
