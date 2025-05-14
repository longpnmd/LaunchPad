// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** 此处后端没有提供注释 GET /blog-page */
export async function getBlogPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.blogPageParams,
  options?: { [key: string]: any }
) {
  return request<API.BlogPageResponse>("/blog-page", {
    method: "GET",
    params: {
      ...params,
      filters: undefined,
      ...params["filters"],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /blog-page */
export async function putBlogPage(
  body: API.BlogPageRequest,
  options?: { [key: string]: any }
) {
  return request<API.BlogPageResponse>("/blog-page", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /blog-page */
export async function deleteBlogPage(options?: { [key: string]: any }) {
  return request<number>("/blog-page", {
    method: "DELETE",
    ...(options || {}),
  });
}
