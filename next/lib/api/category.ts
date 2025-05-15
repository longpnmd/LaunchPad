// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** 此处后端没有提供注释 GET /categories */
export async function getCategories(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoriesParams,
  options?: { [key: string]: any }
) {
  return request<API.CategoryListResponse>("/categories", {
    method: "GET",
    params: {
      ...params,
      filters: undefined,
      ...params["filters"],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /categories */
export async function postCategories(
  body: API.CategoryRequest,
  options?: { [key: string]: any }
) {
  return request<API.CategoryResponse>("/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /categories/${param0} */
export async function getCategoriesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CategoryResponse>(`/categories/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /categories/${param0} */
export async function putCategoriesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  body: API.CategoryRequest,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CategoryResponse>(`/categories/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /categories/${param0} */
export async function deleteCategoriesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<number>(`/categories/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}
