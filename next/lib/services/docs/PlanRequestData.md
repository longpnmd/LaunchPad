# PlanRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**price** | **number** |  | [optional] [default to undefined]
**sub_text** | **string** |  | [optional] [default to undefined]
**featured** | **boolean** |  | [optional] [default to undefined]
**CTA** | [**SharedButtonComponent**](SharedButtonComponent.md) |  | [optional] [default to undefined]
**perks** | [**Array&lt;SharedPerksComponent&gt;**](SharedPerksComponent.md) |  | [optional] [default to undefined]
**additional_perks** | [**Array&lt;SharedPerksComponent&gt;**](SharedPerksComponent.md) |  | [optional] [default to undefined]
**product** | [**ArticleRequestDataCategoriesInner**](ArticleRequestDataCategoriesInner.md) |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**localizations** | [**Array&lt;ArticleRequestDataCategoriesInner&gt;**](ArticleRequestDataCategoriesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PlanRequestData } from './api';

const instance: PlanRequestData = {
    name,
    price,
    sub_text,
    featured,
    CTA,
    perks,
    additional_perks,
    product,
    locale,
    localizations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
