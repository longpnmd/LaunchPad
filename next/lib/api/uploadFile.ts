// @ts-ignore
/* eslint-disable */
import request from "@/lib/utils/request";

/** Upload files POST /upload */
export async function postUpload(
  body: {
    /** The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
    path?: string;
    /** The ID of the entry which the file(s) will be linked to */
    refId?: string;
    /** The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
    ref?: string;
    /** The field of the entry which the file(s) will be precisely linked to. */
    field?: string;
  },
  files?: File[],
  options?: { [key: string]: any }
) {
  const formData = new FormData();

  if (files) {
    files.forEach((f) => formData.append("files", f || ""));
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === "object" && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ""));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.UploadFile[]>("/upload", {
    method: "POST",
    data: formData,
    requestType: "form",
    ...(options || {}),
  });
}

/** Upload file information POST /upload?id=${param0} */
export async function postUploadidid(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postUploadididParams,
  body: {
    fileInfo?: { name?: string; alternativeText?: string; caption?: string };
  },
  files?: File,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  const formData = new FormData();

  if (files) {
    formData.append("files", files);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === "object" && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ""));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.UploadFile[]>(`/upload?id=${param0}`, {
    method: "POST",
    params: {
      ...queryParams,
    },
    data: formData,
    requestType: "form",
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /upload/files */
export async function getUploadFiles(options?: { [key: string]: any }) {
  return request<API.UploadFile[]>("/upload/files", {
    method: "GET",
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /upload/files/${param0} */
export async function getUploadFilesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUploadFilesIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UploadFile>(`/upload/files/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /upload/files/${param0} */
export async function deleteUploadFilesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUploadFilesIdParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UploadFile>(`/upload/files/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}
