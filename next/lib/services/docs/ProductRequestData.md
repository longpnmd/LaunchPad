# ProductRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**price** | **number** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**images** | [**Array&lt;ArticleRequestDataCategoriesInner&gt;**](ArticleRequestDataCategoriesInner.md) |  | [optional] [default to undefined]
**perks** | [**Array&lt;SharedPerksComponent&gt;**](SharedPerksComponent.md) |  | [optional] [default to undefined]
**plans** | [**Array&lt;ArticleRequestDataCategoriesInner&gt;**](ArticleRequestDataCategoriesInner.md) |  | [optional] [default to undefined]
**categories** | [**Array&lt;ArticleRequestDataCategoriesInner&gt;**](ArticleRequestDataCategoriesInner.md) |  | [optional] [default to undefined]
**dynamic_zone** | [**Array&lt;ArticleCategoriesInnerProductDynamicZoneInner&gt;**](ArticleCategoriesInnerProductDynamicZoneInner.md) |  | [optional] [default to undefined]
**featured** | **boolean** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**localizations** | [**Array&lt;ArticleRequestDataCategoriesInner&gt;**](ArticleRequestDataCategoriesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProductRequestData } from './api';

const instance: ProductRequestData = {
    name,
    price,
    description,
    slug,
    images,
    perks,
    plans,
    categories,
    dynamic_zone,
    featured,
    locale,
    localizations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
