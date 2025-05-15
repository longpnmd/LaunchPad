// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** 此处后端没有提供注释 GET /faqs */
export async function getFaqs(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.faqsParams,
  options?: { [key: string]: any }
) {
  return request<API.FaqListResponse>("/faqs", {
    method: "GET",
    params: {
      ...params,
      filters: undefined,
      ...params["filters"],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /faqs */
export async function postFaqs(
  body: API.FaqRequest,
  options?: { [key: string]: any }
) {
  return request<API.FaqResponse>("/faqs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /faqs/${param0} */
export async function getFaqsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FaqResponse>(`/faqs/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /faqs/${param0} */
export async function putFaqsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  body: API.FaqRequest,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FaqResponse>(`/faqs/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /faqs/${param0} */
export async function deleteFaqsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<number>(`/faqs/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}
