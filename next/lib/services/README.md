## strapiRest@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install strapiRest@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost:1337/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ArticleApi* | [**deleteArticlesId**](docs/ArticleApi.md#deletearticlesid) | **DELETE** /articles/{id} | 
*ArticleApi* | [**getArticles**](docs/ArticleApi.md#getarticles) | **GET** /articles | 
*ArticleApi* | [**getArticlesId**](docs/ArticleApi.md#getarticlesid) | **GET** /articles/{id} | 
*ArticleApi* | [**postArticles**](docs/ArticleApi.md#postarticles) | **POST** /articles | 
*ArticleApi* | [**putArticlesId**](docs/ArticleApi.md#putarticlesid) | **PUT** /articles/{id} | 
*BlogPageApi* | [**deleteBlogPage**](docs/BlogPageApi.md#deleteblogpage) | **DELETE** /blog-page | 
*BlogPageApi* | [**getBlogPage**](docs/BlogPageApi.md#getblogpage) | **GET** /blog-page | 
*BlogPageApi* | [**putBlogPage**](docs/BlogPageApi.md#putblogpage) | **PUT** /blog-page | 
*CategoryApi* | [**deleteCategoriesId**](docs/CategoryApi.md#deletecategoriesid) | **DELETE** /categories/{id} | 
*CategoryApi* | [**getCategories**](docs/CategoryApi.md#getcategories) | **GET** /categories | 
*CategoryApi* | [**getCategoriesId**](docs/CategoryApi.md#getcategoriesid) | **GET** /categories/{id} | 
*CategoryApi* | [**postCategories**](docs/CategoryApi.md#postcategories) | **POST** /categories | 
*CategoryApi* | [**putCategoriesId**](docs/CategoryApi.md#putcategoriesid) | **PUT** /categories/{id} | 
*ClientStageApi* | [**deleteClientStagesId**](docs/ClientStageApi.md#deleteclientstagesid) | **DELETE** /client-stages/{id} | 
*ClientStageApi* | [**getClientStages**](docs/ClientStageApi.md#getclientstages) | **GET** /client-stages | 
*ClientStageApi* | [**getClientStagesId**](docs/ClientStageApi.md#getclientstagesid) | **GET** /client-stages/{id} | 
*ClientStageApi* | [**postClientStages**](docs/ClientStageApi.md#postclientstages) | **POST** /client-stages | 
*ClientStageApi* | [**putClientStagesId**](docs/ClientStageApi.md#putclientstagesid) | **PUT** /client-stages/{id} | 
*CustomerApi* | [**deleteCustomersId**](docs/CustomerApi.md#deletecustomersid) | **DELETE** /customers/{id} | 
*CustomerApi* | [**getCustomers**](docs/CustomerApi.md#getcustomers) | **GET** /customers | 
*CustomerApi* | [**getCustomersId**](docs/CustomerApi.md#getcustomersid) | **GET** /customers/{id} | 
*CustomerApi* | [**postCustomers**](docs/CustomerApi.md#postcustomers) | **POST** /customers | 
*CustomerApi* | [**putCustomersId**](docs/CustomerApi.md#putcustomersid) | **PUT** /customers/{id} | 
*DealApi* | [**deleteDealsId**](docs/DealApi.md#deletedealsid) | **DELETE** /deals/{id} | 
*DealApi* | [**getDeals**](docs/DealApi.md#getdeals) | **GET** /deals | 
*DealApi* | [**getDealsId**](docs/DealApi.md#getdealsid) | **GET** /deals/{id} | 
*DealApi* | [**postDeals**](docs/DealApi.md#postdeals) | **POST** /deals | 
*DealApi* | [**putDealsId**](docs/DealApi.md#putdealsid) | **PUT** /deals/{id} | 
*FaqApi* | [**deleteFaqsId**](docs/FaqApi.md#deletefaqsid) | **DELETE** /faqs/{id} | 
*FaqApi* | [**getFaqs**](docs/FaqApi.md#getfaqs) | **GET** /faqs | 
*FaqApi* | [**getFaqsId**](docs/FaqApi.md#getfaqsid) | **GET** /faqs/{id} | 
*FaqApi* | [**postFaqs**](docs/FaqApi.md#postfaqs) | **POST** /faqs | 
*FaqApi* | [**putFaqsId**](docs/FaqApi.md#putfaqsid) | **PUT** /faqs/{id} | 
*GlobalApi* | [**deleteGlobal**](docs/GlobalApi.md#deleteglobal) | **DELETE** /global | 
*GlobalApi* | [**getGlobal**](docs/GlobalApi.md#getglobal) | **GET** /global | 
*GlobalApi* | [**putGlobal**](docs/GlobalApi.md#putglobal) | **PUT** /global | 
*LogoApi* | [**deleteLogosId**](docs/LogoApi.md#deletelogosid) | **DELETE** /logos/{id} | 
*LogoApi* | [**getLogos**](docs/LogoApi.md#getlogos) | **GET** /logos | 
*LogoApi* | [**getLogosId**](docs/LogoApi.md#getlogosid) | **GET** /logos/{id} | 
*LogoApi* | [**postLogos**](docs/LogoApi.md#postlogos) | **POST** /logos | 
*LogoApi* | [**putLogosId**](docs/LogoApi.md#putlogosid) | **PUT** /logos/{id} | 
*NoteApi* | [**deleteNotesId**](docs/NoteApi.md#deletenotesid) | **DELETE** /notes/{id} | 
*NoteApi* | [**getNotes**](docs/NoteApi.md#getnotes) | **GET** /notes | 
*NoteApi* | [**getNotesId**](docs/NoteApi.md#getnotesid) | **GET** /notes/{id} | 
*NoteApi* | [**postNotes**](docs/NoteApi.md#postnotes) | **POST** /notes | 
*NoteApi* | [**putNotesId**](docs/NoteApi.md#putnotesid) | **PUT** /notes/{id} | 
*PageApi* | [**deletePagesId**](docs/PageApi.md#deletepagesid) | **DELETE** /pages/{id} | 
*PageApi* | [**getPages**](docs/PageApi.md#getpages) | **GET** /pages | 
*PageApi* | [**getPagesId**](docs/PageApi.md#getpagesid) | **GET** /pages/{id} | 
*PageApi* | [**postPages**](docs/PageApi.md#postpages) | **POST** /pages | 
*PageApi* | [**putPagesId**](docs/PageApi.md#putpagesid) | **PUT** /pages/{id} | 
*PlanApi* | [**deletePlansId**](docs/PlanApi.md#deleteplansid) | **DELETE** /plans/{id} | 
*PlanApi* | [**getPlans**](docs/PlanApi.md#getplans) | **GET** /plans | 
*PlanApi* | [**getPlansId**](docs/PlanApi.md#getplansid) | **GET** /plans/{id} | 
*PlanApi* | [**postPlans**](docs/PlanApi.md#postplans) | **POST** /plans | 
*PlanApi* | [**putPlansId**](docs/PlanApi.md#putplansid) | **PUT** /plans/{id} | 
*ProductApi* | [**deleteProductsId**](docs/ProductApi.md#deleteproductsid) | **DELETE** /products/{id} | 
*ProductApi* | [**getProducts**](docs/ProductApi.md#getproducts) | **GET** /products | 
*ProductApi* | [**getProductsId**](docs/ProductApi.md#getproductsid) | **GET** /products/{id} | 
*ProductApi* | [**postProducts**](docs/ProductApi.md#postproducts) | **POST** /products | 
*ProductApi* | [**putProductsId**](docs/ProductApi.md#putproductsid) | **PUT** /products/{id} | 
*ProductPageApi* | [**deleteProductPage**](docs/ProductPageApi.md#deleteproductpage) | **DELETE** /product-page | 
*ProductPageApi* | [**getProductPage**](docs/ProductPageApi.md#getproductpage) | **GET** /product-page | 
*ProductPageApi* | [**putProductPage**](docs/ProductPageApi.md#putproductpage) | **PUT** /product-page | 
*PropertyApi* | [**deletePropertiesId**](docs/PropertyApi.md#deletepropertiesid) | **DELETE** /properties/{id} | 
*PropertyApi* | [**getProperties**](docs/PropertyApi.md#getproperties) | **GET** /properties | 
*PropertyApi* | [**getPropertiesId**](docs/PropertyApi.md#getpropertiesid) | **GET** /properties/{id} | 
*PropertyApi* | [**postProperties**](docs/PropertyApi.md#postproperties) | **POST** /properties | 
*PropertyApi* | [**putPropertiesId**](docs/PropertyApi.md#putpropertiesid) | **PUT** /properties/{id} | 
*RedirectionApi* | [**deleteRedirectionsId**](docs/RedirectionApi.md#deleteredirectionsid) | **DELETE** /redirections/{id} | 
*RedirectionApi* | [**getRedirections**](docs/RedirectionApi.md#getredirections) | **GET** /redirections | 
*RedirectionApi* | [**getRedirectionsId**](docs/RedirectionApi.md#getredirectionsid) | **GET** /redirections/{id} | 
*RedirectionApi* | [**postRedirections**](docs/RedirectionApi.md#postredirections) | **POST** /redirections | 
*RedirectionApi* | [**putRedirectionsId**](docs/RedirectionApi.md#putredirectionsid) | **PUT** /redirections/{id} | 
*TaskApi* | [**deleteTasksId**](docs/TaskApi.md#deletetasksid) | **DELETE** /tasks/{id} | 
*TaskApi* | [**getTasks**](docs/TaskApi.md#gettasks) | **GET** /tasks | 
*TaskApi* | [**getTasksId**](docs/TaskApi.md#gettasksid) | **GET** /tasks/{id} | 
*TaskApi* | [**postTasks**](docs/TaskApi.md#posttasks) | **POST** /tasks | 
*TaskApi* | [**putTasksId**](docs/TaskApi.md#puttasksid) | **PUT** /tasks/{id} | 
*TestimonialApi* | [**deleteTestimonialsId**](docs/TestimonialApi.md#deletetestimonialsid) | **DELETE** /testimonials/{id} | 
*TestimonialApi* | [**getTestimonials**](docs/TestimonialApi.md#gettestimonials) | **GET** /testimonials | 
*TestimonialApi* | [**getTestimonialsId**](docs/TestimonialApi.md#gettestimonialsid) | **GET** /testimonials/{id} | 
*TestimonialApi* | [**postTestimonials**](docs/TestimonialApi.md#posttestimonials) | **POST** /testimonials | 
*TestimonialApi* | [**putTestimonialsId**](docs/TestimonialApi.md#puttestimonialsid) | **PUT** /testimonials/{id} | 
*UploadFileApi* | [**uploadFilesGet**](docs/UploadFileApi.md#uploadfilesget) | **GET** /upload/files | 
*UploadFileApi* | [**uploadFilesIdDelete**](docs/UploadFileApi.md#uploadfilesiddelete) | **DELETE** /upload/files/{id} | 
*UploadFileApi* | [**uploadFilesIdGet**](docs/UploadFileApi.md#uploadfilesidget) | **GET** /upload/files/{id} | 
*UploadFileApi* | [**uploadPost**](docs/UploadFileApi.md#uploadpost) | **POST** /upload | 
*UploadFileApi* | [**uploadididPost**](docs/UploadFileApi.md#uploadididpost) | **POST** /upload?id&#x3D;{id} | 
*UsersPermissionsAuthApi* | [**authChangePasswordPost**](docs/UsersPermissionsAuthApi.md#authchangepasswordpost) | **POST** /auth/change-password | Update user\&#39;s own password
*UsersPermissionsAuthApi* | [**authEmailConfirmationGet**](docs/UsersPermissionsAuthApi.md#authemailconfirmationget) | **GET** /auth/email-confirmation | Confirm user email
*UsersPermissionsAuthApi* | [**authForgotPasswordPost**](docs/UsersPermissionsAuthApi.md#authforgotpasswordpost) | **POST** /auth/forgot-password | Send rest password email
*UsersPermissionsAuthApi* | [**authLocalPost**](docs/UsersPermissionsAuthApi.md#authlocalpost) | **POST** /auth/local | Local login
*UsersPermissionsAuthApi* | [**authLocalRegisterPost**](docs/UsersPermissionsAuthApi.md#authlocalregisterpost) | **POST** /auth/local/register | Register a user
*UsersPermissionsAuthApi* | [**authProviderCallbackGet**](docs/UsersPermissionsAuthApi.md#authprovidercallbackget) | **GET** /auth/{provider}/callback | Default Callback from provider auth
*UsersPermissionsAuthApi* | [**authResetPasswordPost**](docs/UsersPermissionsAuthApi.md#authresetpasswordpost) | **POST** /auth/reset-password | Rest user password
*UsersPermissionsAuthApi* | [**authSendEmailConfirmationPost**](docs/UsersPermissionsAuthApi.md#authsendemailconfirmationpost) | **POST** /auth/send-email-confirmation | Send confirmation email
*UsersPermissionsAuthApi* | [**connectProviderGet**](docs/UsersPermissionsAuthApi.md#connectproviderget) | **GET** /connect/{provider} | Login with a provider
*UsersPermissionsUsersRolesApi* | [**usersCountGet**](docs/UsersPermissionsUsersRolesApi.md#userscountget) | **GET** /users/count | Get user count
*UsersPermissionsUsersRolesApi* | [**usersGet**](docs/UsersPermissionsUsersRolesApi.md#usersget) | **GET** /users | Get list of users
*UsersPermissionsUsersRolesApi* | [**usersIdDelete**](docs/UsersPermissionsUsersRolesApi.md#usersiddelete) | **DELETE** /users/{id} | Delete a user
*UsersPermissionsUsersRolesApi* | [**usersIdGet**](docs/UsersPermissionsUsersRolesApi.md#usersidget) | **GET** /users/{id} | Get a user
*UsersPermissionsUsersRolesApi* | [**usersIdPut**](docs/UsersPermissionsUsersRolesApi.md#usersidput) | **PUT** /users/{id} | Update a user
*UsersPermissionsUsersRolesApi* | [**usersMeGet**](docs/UsersPermissionsUsersRolesApi.md#usersmeget) | **GET** /users/me | Get authenticated user info
*UsersPermissionsUsersRolesApi* | [**usersPermissionsPermissionsGet**](docs/UsersPermissionsUsersRolesApi.md#userspermissionspermissionsget) | **GET** /users-permissions/permissions | Get default generated permissions
*UsersPermissionsUsersRolesApi* | [**usersPermissionsRolesGet**](docs/UsersPermissionsUsersRolesApi.md#userspermissionsrolesget) | **GET** /users-permissions/roles | List roles
*UsersPermissionsUsersRolesApi* | [**usersPermissionsRolesIdGet**](docs/UsersPermissionsUsersRolesApi.md#userspermissionsrolesidget) | **GET** /users-permissions/roles/{id} | Get a role
*UsersPermissionsUsersRolesApi* | [**usersPermissionsRolesPost**](docs/UsersPermissionsUsersRolesApi.md#userspermissionsrolespost) | **POST** /users-permissions/roles | Create a role
*UsersPermissionsUsersRolesApi* | [**usersPermissionsRolesRoleDelete**](docs/UsersPermissionsUsersRolesApi.md#userspermissionsrolesroledelete) | **DELETE** /users-permissions/roles/{role} | Delete a role
*UsersPermissionsUsersRolesApi* | [**usersPermissionsRolesRolePut**](docs/UsersPermissionsUsersRolesApi.md#userspermissionsrolesroleput) | **PUT** /users-permissions/roles/{role} | Update a role
*UsersPermissionsUsersRolesApi* | [**usersPost**](docs/UsersPermissionsUsersRolesApi.md#userspost) | **POST** /users | Create a user


### Documentation For Models

 - [Article](docs/Article.md)
 - [ArticleCategoriesInner](docs/ArticleCategoriesInner.md)
 - [ArticleCategoriesInnerArticlesInner](docs/ArticleCategoriesInnerArticlesInner.md)
 - [ArticleCategoriesInnerProduct](docs/ArticleCategoriesInnerProduct.md)
 - [ArticleCategoriesInnerProductDynamicZoneInner](docs/ArticleCategoriesInnerProductDynamicZoneInner.md)
 - [ArticleCategoriesInnerProductImagesInner](docs/ArticleCategoriesInnerProductImagesInner.md)
 - [ArticleCategoriesInnerProductImagesInnerRelatedInner](docs/ArticleCategoriesInnerProductImagesInnerRelatedInner.md)
 - [ArticleCategoriesInnerProductPlansInner](docs/ArticleCategoriesInnerProductPlansInner.md)
 - [ArticleListResponse](docs/ArticleListResponse.md)
 - [ArticleListResponseMeta](docs/ArticleListResponseMeta.md)
 - [ArticleListResponseMetaPagination](docs/ArticleListResponseMetaPagination.md)
 - [ArticleRequest](docs/ArticleRequest.md)
 - [ArticleRequestData](docs/ArticleRequestData.md)
 - [ArticleRequestDataCategoriesInner](docs/ArticleRequestDataCategoriesInner.md)
 - [ArticleRequestDataDynamicZoneInner](docs/ArticleRequestDataDynamicZoneInner.md)
 - [ArticleResponse](docs/ArticleResponse.md)
 - [AuthChangePasswordPostRequest](docs/AuthChangePasswordPostRequest.md)
 - [AuthForgotPasswordPost200Response](docs/AuthForgotPasswordPost200Response.md)
 - [AuthForgotPasswordPostRequest](docs/AuthForgotPasswordPostRequest.md)
 - [AuthLocalPostRequest](docs/AuthLocalPostRequest.md)
 - [AuthLocalRegisterPostRequest](docs/AuthLocalRegisterPostRequest.md)
 - [AuthResetPasswordPostRequest](docs/AuthResetPasswordPostRequest.md)
 - [AuthSendEmailConfirmationPost200Response](docs/AuthSendEmailConfirmationPost200Response.md)
 - [BlogPage](docs/BlogPage.md)
 - [BlogPageListResponse](docs/BlogPageListResponse.md)
 - [BlogPageLocalizationsInner](docs/BlogPageLocalizationsInner.md)
 - [BlogPageRequest](docs/BlogPageRequest.md)
 - [BlogPageRequestData](docs/BlogPageRequestData.md)
 - [BlogPageRequestDataDynamicZoneInner](docs/BlogPageRequestDataDynamicZoneInner.md)
 - [BlogPageResponse](docs/BlogPageResponse.md)
 - [CardsGlobeCardComponent](docs/CardsGlobeCardComponent.md)
 - [CardsGraphCardComponent](docs/CardsGraphCardComponent.md)
 - [CardsRayCardComponent](docs/CardsRayCardComponent.md)
 - [CardsSocialMediaCardComponent](docs/CardsSocialMediaCardComponent.md)
 - [Category](docs/Category.md)
 - [CategoryListResponse](docs/CategoryListResponse.md)
 - [CategoryProduct](docs/CategoryProduct.md)
 - [CategoryProductCategoriesInner](docs/CategoryProductCategoriesInner.md)
 - [CategoryProductImagesInner](docs/CategoryProductImagesInner.md)
 - [CategoryProductImagesInnerFolder](docs/CategoryProductImagesInnerFolder.md)
 - [CategoryProductImagesInnerFolderFilesInner](docs/CategoryProductImagesInnerFolderFilesInner.md)
 - [CategoryProductImagesInnerFolderFilesInnerCreatedBy](docs/CategoryProductImagesInnerFolderFilesInnerCreatedBy.md)
 - [CategoryProductImagesInnerFolderFilesInnerCreatedByRolesInner](docs/CategoryProductImagesInnerFolderFilesInnerCreatedByRolesInner.md)
 - [CategoryProductImagesInnerFolderFilesInnerCreatedByRolesInnerPermissionsInner](docs/CategoryProductImagesInnerFolderFilesInnerCreatedByRolesInnerPermissionsInner.md)
 - [CategoryRequest](docs/CategoryRequest.md)
 - [CategoryRequestData](docs/CategoryRequestData.md)
 - [CategoryResponse](docs/CategoryResponse.md)
 - [ClientStage](docs/ClientStage.md)
 - [ClientStageCustomersInner](docs/ClientStageCustomersInner.md)
 - [ClientStageCustomersInnerAgent](docs/ClientStageCustomersInnerAgent.md)
 - [ClientStageCustomersInnerAgentRole](docs/ClientStageCustomersInnerAgentRole.md)
 - [ClientStageCustomersInnerAgentRolePermissionsInner](docs/ClientStageCustomersInnerAgentRolePermissionsInner.md)
 - [ClientStageCustomersInnerDealsInner](docs/ClientStageCustomersInnerDealsInner.md)
 - [ClientStageCustomersInnerDealsInnerProperty](docs/ClientStageCustomersInnerDealsInnerProperty.md)
 - [ClientStageCustomersInnerDealsInnerPropertyImagesInner](docs/ClientStageCustomersInnerDealsInnerPropertyImagesInner.md)
 - [ClientStageCustomersInnerDealsInnerPropertyImagesInnerFolder](docs/ClientStageCustomersInnerDealsInnerPropertyImagesInnerFolder.md)
 - [ClientStageCustomersInnerDealsInnerPropertyNotesInner](docs/ClientStageCustomersInnerDealsInnerPropertyNotesInner.md)
 - [ClientStageCustomersInnerDealsInnerPropertyNotesInnerTask](docs/ClientStageCustomersInnerDealsInnerPropertyNotesInnerTask.md)
 - [ClientStageCustomersInnerStage](docs/ClientStageCustomersInnerStage.md)
 - [ClientStageListResponse](docs/ClientStageListResponse.md)
 - [ClientStageRequest](docs/ClientStageRequest.md)
 - [ClientStageRequestData](docs/ClientStageRequestData.md)
 - [ClientStageResponse](docs/ClientStageResponse.md)
 - [Customer](docs/Customer.md)
 - [CustomerListResponse](docs/CustomerListResponse.md)
 - [CustomerRequest](docs/CustomerRequest.md)
 - [CustomerRequestData](docs/CustomerRequestData.md)
 - [CustomerResponse](docs/CustomerResponse.md)
 - [CustomerStage](docs/CustomerStage.md)
 - [CustomerStageCustomersInner](docs/CustomerStageCustomersInner.md)
 - [Deal](docs/Deal.md)
 - [DealListResponse](docs/DealListResponse.md)
 - [DealRequest](docs/DealRequest.md)
 - [DealRequestData](docs/DealRequestData.md)
 - [DealResponse](docs/DealResponse.md)
 - [DealStatus](docs/DealStatus.md)
 - [DealStatusCustomersInner](docs/DealStatusCustomersInner.md)
 - [DynamicZoneBrandsComponent](docs/DynamicZoneBrandsComponent.md)
 - [DynamicZoneCtaComponent](docs/DynamicZoneCtaComponent.md)
 - [DynamicZoneFaqComponent](docs/DynamicZoneFaqComponent.md)
 - [DynamicZoneFeaturesComponent](docs/DynamicZoneFeaturesComponent.md)
 - [DynamicZoneFormNextToSectionComponent](docs/DynamicZoneFormNextToSectionComponent.md)
 - [DynamicZoneHeroComponent](docs/DynamicZoneHeroComponent.md)
 - [DynamicZoneHowItWorksComponent](docs/DynamicZoneHowItWorksComponent.md)
 - [DynamicZoneLaunchesComponent](docs/DynamicZoneLaunchesComponent.md)
 - [DynamicZonePricingComponent](docs/DynamicZonePricingComponent.md)
 - [DynamicZoneRelatedArticlesComponent](docs/DynamicZoneRelatedArticlesComponent.md)
 - [DynamicZoneRelatedProductsComponent](docs/DynamicZoneRelatedProductsComponent.md)
 - [DynamicZoneTestimonialsComponent](docs/DynamicZoneTestimonialsComponent.md)
 - [ErrorData](docs/ErrorData.md)
 - [ErrorError](docs/ErrorError.md)
 - [Faq](docs/Faq.md)
 - [FaqListResponse](docs/FaqListResponse.md)
 - [FaqLocalizationsInner](docs/FaqLocalizationsInner.md)
 - [FaqRequest](docs/FaqRequest.md)
 - [FaqRequestData](docs/FaqRequestData.md)
 - [FaqResponse](docs/FaqResponse.md)
 - [Global](docs/Global.md)
 - [GlobalFooterComponent](docs/GlobalFooterComponent.md)
 - [GlobalListResponse](docs/GlobalListResponse.md)
 - [GlobalLocalizationsInner](docs/GlobalLocalizationsInner.md)
 - [GlobalNavbarComponent](docs/GlobalNavbarComponent.md)
 - [GlobalRequest](docs/GlobalRequest.md)
 - [GlobalRequestData](docs/GlobalRequestData.md)
 - [GlobalResponse](docs/GlobalResponse.md)
 - [ItemsGraphCardTopItemsComponent](docs/ItemsGraphCardTopItemsComponent.md)
 - [ItemsInputComponent](docs/ItemsInputComponent.md)
 - [ItemsRayItemsComponent](docs/ItemsRayItemsComponent.md)
 - [Logo](docs/Logo.md)
 - [LogoListResponse](docs/LogoListResponse.md)
 - [LogoLocalizationsInner](docs/LogoLocalizationsInner.md)
 - [LogoRequest](docs/LogoRequest.md)
 - [LogoRequestData](docs/LogoRequestData.md)
 - [LogoResponse](docs/LogoResponse.md)
 - [ModelError](docs/ModelError.md)
 - [Note](docs/Note.md)
 - [NoteCustomer](docs/NoteCustomer.md)
 - [NoteListResponse](docs/NoteListResponse.md)
 - [NoteRequest](docs/NoteRequest.md)
 - [NoteRequestData](docs/NoteRequestData.md)
 - [NoteResponse](docs/NoteResponse.md)
 - [Page](docs/Page.md)
 - [PageListResponse](docs/PageListResponse.md)
 - [PageLocalizationsInner](docs/PageLocalizationsInner.md)
 - [PageRequest](docs/PageRequest.md)
 - [PageRequestData](docs/PageRequestData.md)
 - [PageRequestDataDynamicZoneInner](docs/PageRequestDataDynamicZoneInner.md)
 - [PageResponse](docs/PageResponse.md)
 - [Plan](docs/Plan.md)
 - [PlanListResponse](docs/PlanListResponse.md)
 - [PlanRequest](docs/PlanRequest.md)
 - [PlanRequestData](docs/PlanRequestData.md)
 - [PlanResponse](docs/PlanResponse.md)
 - [Product](docs/Product.md)
 - [ProductListResponse](docs/ProductListResponse.md)
 - [ProductPage](docs/ProductPage.md)
 - [ProductPageListResponse](docs/ProductPageListResponse.md)
 - [ProductPageRequest](docs/ProductPageRequest.md)
 - [ProductPageResponse](docs/ProductPageResponse.md)
 - [ProductPlansInner](docs/ProductPlansInner.md)
 - [ProductPlansInnerProduct](docs/ProductPlansInnerProduct.md)
 - [ProductRequest](docs/ProductRequest.md)
 - [ProductRequestData](docs/ProductRequestData.md)
 - [ProductResponse](docs/ProductResponse.md)
 - [Property](docs/Property.md)
 - [PropertyDealsInner](docs/PropertyDealsInner.md)
 - [PropertyDealsInnerStatus](docs/PropertyDealsInnerStatus.md)
 - [PropertyDealsInnerStatusCustomersInner](docs/PropertyDealsInnerStatusCustomersInner.md)
 - [PropertyDealsInnerStatusCustomersInnerNotesInner](docs/PropertyDealsInnerStatusCustomersInnerNotesInner.md)
 - [PropertyDealsInnerStatusCustomersInnerNotesInnerProperty](docs/PropertyDealsInnerStatusCustomersInnerNotesInnerProperty.md)
 - [PropertyListResponse](docs/PropertyListResponse.md)
 - [PropertyListedBy](docs/PropertyListedBy.md)
 - [PropertyListedByRole](docs/PropertyListedByRole.md)
 - [PropertyListedByRolePermissionsInner](docs/PropertyListedByRolePermissionsInner.md)
 - [PropertyRequest](docs/PropertyRequest.md)
 - [PropertyRequestData](docs/PropertyRequestData.md)
 - [PropertyResponse](docs/PropertyResponse.md)
 - [Redirection](docs/Redirection.md)
 - [RedirectionListResponse](docs/RedirectionListResponse.md)
 - [RedirectionLocalizationsInner](docs/RedirectionLocalizationsInner.md)
 - [RedirectionRequest](docs/RedirectionRequest.md)
 - [RedirectionRequestData](docs/RedirectionRequestData.md)
 - [RedirectionResponse](docs/RedirectionResponse.md)
 - [SharedButtonComponent](docs/SharedButtonComponent.md)
 - [SharedFormComponent](docs/SharedFormComponent.md)
 - [SharedLaunchesComponent](docs/SharedLaunchesComponent.md)
 - [SharedLinkComponent](docs/SharedLinkComponent.md)
 - [SharedPerksComponent](docs/SharedPerksComponent.md)
 - [SharedSectionComponent](docs/SharedSectionComponent.md)
 - [SharedSeoComponent](docs/SharedSeoComponent.md)
 - [SharedSocialMediaIconLinksComponent](docs/SharedSocialMediaIconLinksComponent.md)
 - [SharedStepsComponent](docs/SharedStepsComponent.md)
 - [SharedUserComponent](docs/SharedUserComponent.md)
 - [Task](docs/Task.md)
 - [TaskListResponse](docs/TaskListResponse.md)
 - [TaskRelatedDeal](docs/TaskRelatedDeal.md)
 - [TaskRelatedDealStatus](docs/TaskRelatedDealStatus.md)
 - [TaskRelatedDealStatusCustomersInner](docs/TaskRelatedDealStatusCustomersInner.md)
 - [TaskRelatedDealStatusCustomersInnerNotesInner](docs/TaskRelatedDealStatusCustomersInnerNotesInner.md)
 - [TaskRelatedDealStatusCustomersInnerNotesInnerProperty](docs/TaskRelatedDealStatusCustomersInnerNotesInnerProperty.md)
 - [TaskRequest](docs/TaskRequest.md)
 - [TaskRequestData](docs/TaskRequestData.md)
 - [TaskResponse](docs/TaskResponse.md)
 - [Testimonial](docs/Testimonial.md)
 - [TestimonialListResponse](docs/TestimonialListResponse.md)
 - [TestimonialLocalizationsInner](docs/TestimonialLocalizationsInner.md)
 - [TestimonialRequest](docs/TestimonialRequest.md)
 - [TestimonialRequestData](docs/TestimonialRequestData.md)
 - [TestimonialResponse](docs/TestimonialResponse.md)
 - [UploadFile](docs/UploadFile.md)
 - [UploadIdIdPostRequestFileInfo](docs/UploadIdIdPostRequestFileInfo.md)
 - [UsersPermissionsPermissionsGet200Response](docs/UsersPermissionsPermissionsGet200Response.md)
 - [UsersPermissionsPermissionsTreeValue](docs/UsersPermissionsPermissionsTreeValue.md)
 - [UsersPermissionsPermissionsTreeValueControllersValueValue](docs/UsersPermissionsPermissionsTreeValueControllersValueValue.md)
 - [UsersPermissionsRole](docs/UsersPermissionsRole.md)
 - [UsersPermissionsRolesGet200Response](docs/UsersPermissionsRolesGet200Response.md)
 - [UsersPermissionsRolesGet200ResponseRolesInner](docs/UsersPermissionsRolesGet200ResponseRolesInner.md)
 - [UsersPermissionsRolesIdGet200Response](docs/UsersPermissionsRolesIdGet200Response.md)
 - [UsersPermissionsRolesPostRequest](docs/UsersPermissionsRolesPostRequest.md)
 - [UsersPermissionsUser](docs/UsersPermissionsUser.md)
 - [UsersPermissionsUserRegistration](docs/UsersPermissionsUserRegistration.md)
 - [UsersPost201Response](docs/UsersPost201Response.md)
 - [UsersPostRequest](docs/UsersPostRequest.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
### bearerAuth

- **Type**: Bearer authentication (JWT)

