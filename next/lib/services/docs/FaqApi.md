# FaqApi

All URIs are relative to *http://localhost:1337/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteFaqsId**](#deletefaqsid) | **DELETE** /faqs/{id} | |
|[**getFaqs**](#getfaqs) | **GET** /faqs | |
|[**getFaqsId**](#getfaqsid) | **GET** /faqs/{id} | |
|[**postFaqs**](#postfaqs) | **POST** /faqs | |
|[**putFaqsId**](#putfaqsid) | **PUT** /faqs/{id} | |

# **deleteFaqsId**
> number deleteFaqsId()


### Example

```typescript
import {
    FaqApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FaqApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.deleteFaqsId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFaqs**
> FaqListResponse getFaqs()


### Example

```typescript
import {
    FaqApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FaqApi(configuration);

let sort: string; //Sort by attributes ascending (asc) or descending (desc) (optional) (default to undefined)
let paginationWithCount: boolean; //Return page/pageSize (default: true) (optional) (default to undefined)
let paginationPage: number; //Page number (default: 0) (optional) (default to undefined)
let paginationPageSize: number; //Page size (default: 25) (optional) (default to undefined)
let paginationStart: number; //Offset value (default: 0) (optional) (default to undefined)
let paginationLimit: number; //Number of entities to return (default: 25) (optional) (default to undefined)
let fields: string; //Fields to return (ex: title,author) (optional) (default to undefined)
let populate: string; //Relations to return (optional) (default to undefined)
let filters: { [key: string]: any; }; //Filters to apply (optional) (default to undefined)
let locale: string; //Locale to apply (optional) (default to undefined)

const { status, data } = await apiInstance.getFaqs(
    sort,
    paginationWithCount,
    paginationPage,
    paginationPageSize,
    paginationStart,
    paginationLimit,
    fields,
    populate,
    filters,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sort** | [**string**] | Sort by attributes ascending (asc) or descending (desc) | (optional) defaults to undefined|
| **paginationWithCount** | [**boolean**] | Return page/pageSize (default: true) | (optional) defaults to undefined|
| **paginationPage** | [**number**] | Page number (default: 0) | (optional) defaults to undefined|
| **paginationPageSize** | [**number**] | Page size (default: 25) | (optional) defaults to undefined|
| **paginationStart** | [**number**] | Offset value (default: 0) | (optional) defaults to undefined|
| **paginationLimit** | [**number**] | Number of entities to return (default: 25) | (optional) defaults to undefined|
| **fields** | [**string**] | Fields to return (ex: title,author) | (optional) defaults to undefined|
| **populate** | [**string**] | Relations to return | (optional) defaults to undefined|
| **filters** | **{ [key: string]: any; }** | Filters to apply | (optional) defaults to undefined|
| **locale** | [**string**] | Locale to apply | (optional) defaults to undefined|


### Return type

**FaqListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFaqsId**
> FaqResponse getFaqsId()


### Example

```typescript
import {
    FaqApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FaqApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getFaqsId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**FaqResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFaqs**
> FaqResponse postFaqs(faqRequest)


### Example

```typescript
import {
    FaqApi,
    Configuration,
    FaqRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FaqApi(configuration);

let faqRequest: FaqRequest; //

const { status, data } = await apiInstance.postFaqs(
    faqRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **faqRequest** | **FaqRequest**|  | |


### Return type

**FaqResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFaqsId**
> FaqResponse putFaqsId(faqRequest)


### Example

```typescript
import {
    FaqApi,
    Configuration,
    FaqRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FaqApi(configuration);

let id: number; // (default to undefined)
let faqRequest: FaqRequest; //

const { status, data } = await apiInstance.putFaqsId(
    id,
    faqRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **faqRequest** | **FaqRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**FaqResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

