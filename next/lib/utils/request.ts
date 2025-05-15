import qs from "qs";
import { extend } from "umi-request";

const request = extend({
  // Default options for all requests
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "same-origin", // Include cookies in requests
  parseResponse: true, // Parse response as JSON
  paramsSerializer(params) {
    // Custom serialization for query parameters
    // qs.stringify is a popular library for this
    
    return qs.stringify(params, {
      indices: true, // Don't include array indices in params
      allowDots: false, // Not Allow dot notation for nested objects
      encode: true, // Don't encode keys
      arrayFormat: "indices", // Use indices for array format
      encodeValuesOnly: true, // Only encode values, not keys
      // addQueryPrefix: false, // Add '?' at the beginning
    });
  },
  prefix: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}/api`,
});

// Add a request interceptor
request.interceptors.request.use((url, options) => {
  // You can modify the URL or options here
  // set default headers or add authentication tokens
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("jwt");
  }
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return { url, options };
});

// Add a response interceptor
// request.interceptors.response.use(
//   async (response) => {
//     // Handle successful responses
//     const data = await response.clone().json();
//     return data;
//   },
//   {
//     global: true,
//     defaultInstance: true,
//     core: true,
//   }
// );

export default request;
