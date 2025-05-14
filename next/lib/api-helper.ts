// import qs from "qs";
// import {
//   Configuration,
//   CustomerApi,
//   DealApi,
//   GlobalApi,
//   PageApi,
//   ProductApi,
//   ProductPageApi,
//   TaskApi,
//   UsersPermissionsUsersRolesApi,
// } from "./services";
// import {
//   ArticleApi,
//   BlogPageApi,
//   UsersPermissionsAuthApi,
//   // Import other APIs as needed
// } from "./services";
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}/api`,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   paramsSerializer: {
//     indexes: false, // Don't include array indices in params
//     dots: false, // Not Allow dot notation for nested objects
//   },
// });
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Handle both URL search params and config.params
//     let allParams: Record<string, any> = {};

//     // Parse existing URL search params
//     if (config.url) {
//       const url = new URL(config.url, config.baseURL || "http://localhost");
//       const urlParams = Object.fromEntries(url.searchParams);
//       allParams = qs.parse(
//         url.searchParams?.toString(),
//         {
//           ignoreQueryPrefix: true,
//           allowDots: true,
//           decodeDotInKeys: false,
//           parseArrays: true,
//         }
//       );
//     }

//     // If we have params, especially filters, format them properly
//     const includeParams = ["filters", "populate"];
//     if (Object.keys(allParams).map((key) => includeParams.includes(key))) {
//       // Format specifically for Strapi
//       const formattedQuery = qs.stringify(allParams, {
//         indices: true, // Don't include array indices in params
//         allowDots: false, // Not Allow dot notation for nested objects
//         encode: false,
//         arrayFormat: "indices",
//         encodeValuesOnly: false, // Only encode values, not keys
//         addQueryPrefix: false, // Add '?' at the beginning
//       });
//       // Update URL with properly formatted query string
//       const baseUrl = config.url?.split("?")[0] || config.url || "";
//       // config.url = `${baseUrl}?${formattedQuery}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// const getAccessToken = () => {
//   if (typeof window === "undefined") {
//     return "";
//   }
//   return localStorage.getItem("jwt") || "";
// };

// const config = new Configuration({
//   basePath: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}/api`,
//   accessToken: getAccessToken,
// });

// // Initialize API instances
// export const authApi = new UsersPermissionsAuthApi(
//   config,
//   undefined,
//   axiosInstance
// );
// export const userApi = new UsersPermissionsUsersRolesApi(
//   config,
//   undefined,
//   axiosInstance
// );
// export const globalApi = new GlobalApi(config, undefined, axiosInstance);
// export const articleApi = new ArticleApi(config, undefined, axiosInstance);
// export const blogPageApi = new BlogPageApi(config, undefined, axiosInstance);
// export const customerApi = new CustomerApi(config, undefined, axiosInstance);
// export const dealApi = new DealApi(config, undefined, axiosInstance);
// export const taskApi = new TaskApi(config, undefined, axiosInstance);
// export const pageApi = new PageApi(config, undefined, axiosInstance);
// export const productApi = new ProductApi(config, undefined, axiosInstance);
// export const productPageApi = new ProductPageApi(
//   config,
//   undefined,
//   axiosInstance
// );
// // Export other APIs as needed
