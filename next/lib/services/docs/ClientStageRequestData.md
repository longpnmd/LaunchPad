# ClientStageRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**purpose** | **string** |  | [optional] [default to undefined]
**focus_on** | **string** |  | [optional] [default to undefined]
**follow_up_automation_days** | **number** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**isActiveStage** | **boolean** |  | [optional] [default to undefined]
**isSOIStage** | **boolean** |  | [optional] [default to undefined]
**customers** | [**Array&lt;ArticleRequestDataCategoriesInner&gt;**](ArticleRequestDataCategoriesInner.md) |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**localizations** | [**Array&lt;ArticleRequestDataCategoriesInner&gt;**](ArticleRequestDataCategoriesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ClientStageRequestData } from './api';

const instance: ClientStageRequestData = {
    name,
    purpose,
    focus_on,
    follow_up_automation_days,
    description,
    isActiveStage,
    isSOIStage,
    customers,
    locale,
    localizations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
