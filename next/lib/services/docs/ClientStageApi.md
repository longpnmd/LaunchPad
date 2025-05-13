# ClientStageApi

All URIs are relative to *http://localhost:1337/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteClientStagesId**](#deleteclientstagesid) | **DELETE** /client-stages/{id} | |
|[**getClientStages**](#getclientstages) | **GET** /client-stages | |
|[**getClientStagesId**](#getclientstagesid) | **GET** /client-stages/{id} | |
|[**postClientStages**](#postclientstages) | **POST** /client-stages | |
|[**putClientStagesId**](#putclientstagesid) | **PUT** /client-stages/{id} | |

# **deleteClientStagesId**
> number deleteClientStagesId()


### Example

```typescript
import {
    ClientStageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientStageApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.deleteClientStagesId(
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

# **getClientStages**
> ClientStageListResponse getClientStages()


### Example

```typescript
import {
    ClientStageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientStageApi(configuration);

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

const { status, data } = await apiInstance.getClientStages(
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

**ClientStageListResponse**

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

# **getClientStagesId**
> ClientStageResponse getClientStagesId()


### Example

```typescript
import {
    ClientStageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientStageApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getClientStagesId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ClientStageResponse**

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

# **postClientStages**
> ClientStageResponse postClientStages(clientStageRequest)


### Example

```typescript
import {
    ClientStageApi,
    Configuration,
    ClientStageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientStageApi(configuration);

let clientStageRequest: ClientStageRequest; //

const { status, data } = await apiInstance.postClientStages(
    clientStageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientStageRequest** | **ClientStageRequest**|  | |


### Return type

**ClientStageResponse**

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

# **putClientStagesId**
> ClientStageResponse putClientStagesId(clientStageRequest)


### Example

```typescript
import {
    ClientStageApi,
    Configuration,
    ClientStageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientStageApi(configuration);

let id: number; // (default to undefined)
let clientStageRequest: ClientStageRequest; //

const { status, data } = await apiInstance.putClientStagesId(
    id,
    clientStageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientStageRequest** | **ClientStageRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ClientStageResponse**

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

