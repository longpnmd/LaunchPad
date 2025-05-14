// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** 此处后端没有提供注释 GET /product-page */
export async function getProductPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.productPageParams,
  options?: { [key: string]: any }
) {
  return request<API.ProductPageResponse>("/product-page", {
    method: "GET",
    params: {
      ...params,
      filters: undefined,
      ...params["filters"],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /product-page */
export async function putProductPage(
  body: API.ProductPageRequest,
  options?: { [key: string]: any }
) {
  return request<API.ProductPageResponse>("/product-page", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /product-page */
export async function deleteProductPage(options?: { [key: string]: any }) {
  return request<number>("/product-page", {
    method: "DELETE",
    ...(options || {}),
  });
}
