declare namespace API {
  type Article = {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    title?: string;
    description?: string;
    slug?: string;
    content?: any;
    categories?: {
      id?: number;
      documentId?: string;
      name?: string;
      product?: {
        id?: number;
        documentId?: string;
        name?: string;
        price?: number;
        description?: string;
        slug?: string;
        images?: {
          id?: number;
          documentId?: string;
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { id?: number; documentId?: string }[];
          folder?: { id?: number; documentId?: string };
          folderPath?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        perks?: SharedPerksComponent[];
        plans?: {
          id?: number;
          documentId?: string;
          name?: string;
          price?: number;
          sub_text?: string;
          featured?: boolean;
          CTA?: SharedButtonComponent;
          perks?: SharedPerksComponent[];
          additional_perks?: SharedPerksComponent[];
          product?: { id?: number; documentId?: string };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        categories?: { id?: number; documentId?: string }[];
        dynamic_zone?: (
          | DynamicZoneRelatedProductsComponent
          | DynamicZoneCtaComponent
        )[];
        featured?: boolean;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      articles?: {
        id?: number;
        documentId?: string;
        seo?: SharedSeoComponent;
        title?: string;
        description?: string;
        slug?: string;
        content?: any;
        categories?: { id?: number; documentId?: string }[];
        dynamic_zone?: (
          | DynamicZoneRelatedArticlesComponent
          | DynamicZoneCtaComponent
        )[];
        image?: {
          id?: number;
          documentId?: string;
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { id?: number; documentId?: string }[];
          folder?: { id?: number; documentId?: string };
          folderPath?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        };
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
    dynamic_zone?: (
      | DynamicZoneRelatedArticlesComponent
      | DynamicZoneCtaComponent
    )[];
    image?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: { id?: number; documentId?: string }[];
      folder?: { id?: number; documentId?: string };
      folderPath?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type ArticleListResponse = {
    data?: Article[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type ArticleRequest = {
    data: {
      seo?: SharedSeoComponent;
      title?: string;
      description?: string;
      slug?: string;
      content?: any;
      categories?: (number | string)[];
      dynamic_zone?: (
        | DynamicZoneRelatedArticlesComponent
        | DynamicZoneCtaComponent
      )[];
      image?: number | string;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type ArticleResponse = {
    data?: Article;
    meta?: Record<string, any>;
  };

  type articlesParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type BlogPage = {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    heading?: string;
    sub_heading?: string;
    dynamic_zone?: (
      | DynamicZoneTestimonialsComponent
      | DynamicZoneRelatedProductsComponent
      | DynamicZoneRelatedArticlesComponent
      | DynamicZonePricingComponent
      | DynamicZoneLaunchesComponent
      | DynamicZoneHowItWorksComponent
      | DynamicZoneHeroComponent
      | DynamicZoneFormNextToSectionComponent
      | DynamicZoneFeaturesComponent
      | DynamicZoneFaqComponent
      | DynamicZoneCtaComponent
      | DynamicZoneBrandsComponent
    )[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
      seo?: SharedSeoComponent;
      heading?: string;
      sub_heading?: string;
      dynamic_zone?: (
        | DynamicZoneTestimonialsComponent
        | DynamicZoneRelatedProductsComponent
        | DynamicZoneRelatedArticlesComponent
        | DynamicZonePricingComponent
        | DynamicZoneLaunchesComponent
        | DynamicZoneHowItWorksComponent
        | DynamicZoneHeroComponent
        | DynamicZoneFormNextToSectionComponent
        | DynamicZoneFeaturesComponent
        | DynamicZoneFaqComponent
        | DynamicZoneCtaComponent
        | DynamicZoneBrandsComponent
      )[];
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
  };

  type BlogPageListResponse = {
    data?: BlogPage[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type blogPageParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type BlogPageRequest = {
    data: {
      seo?: SharedSeoComponent;
      heading?: string;
      sub_heading?: string;
      dynamic_zone?: (
        | DynamicZoneTestimonialsComponent
        | DynamicZoneRelatedProductsComponent
        | DynamicZoneRelatedArticlesComponent
        | DynamicZonePricingComponent
        | DynamicZoneLaunchesComponent
        | DynamicZoneHowItWorksComponent
        | DynamicZoneHeroComponent
        | DynamicZoneFormNextToSectionComponent
        | DynamicZoneFeaturesComponent
        | DynamicZoneFaqComponent
        | DynamicZoneCtaComponent
        | DynamicZoneBrandsComponent
      )[];
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type BlogPageResponse = {
    data?: BlogPage;
    meta?: Record<string, any>;
  };

  type CardsGlobeCardComponent = {
    id?: number;
    title?: string;
    description?: string;
    span?: "one" | "two" | "three";
  };

  type CardsGraphCardComponent = {
    id?: number;
    title?: string;
    description?: string;
    top_items?: ItemsGraphCardTopItemsComponent[];
    highlighted_text?: string;
    span?: "one" | "two" | "three";
  };

  type CardsRayCardComponent = {
    id?: number;
    title?: string;
    description?: string;
    before_ray_items?: ItemsRayItemsComponent;
    after_ray_items?: ItemsRayItemsComponent;
    span?: "one" | "two" | "three";
  };

  type CardsSocialMediaCardComponent = {
    id?: number;
    Title?: string;
    Description?: string;
    logos?: { id?: number; documentId?: string }[];
    span?: "one" | "two" | "three";
  };

  type categoriesParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type Category = {
    id?: number;
    documentId?: string;
    name?: string;
    product?: {
      id?: number;
      documentId?: string;
      name?: string;
      price?: number;
      description?: string;
      slug?: string;
      images?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: { id?: number; documentId?: string }[];
        folder?: {
          id?: number;
          documentId?: string;
          name?: string;
          pathId?: number;
          parent?: { id?: number; documentId?: string };
          children?: { id?: number; documentId?: string }[];
          files?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: { id?: number; documentId?: string }[];
            folder?: { id?: number; documentId?: string };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
              firstname?: string;
              lastname?: string;
              username?: string;
              email?: string;
              resetPasswordToken?: string;
              registrationToken?: string;
              isActive?: boolean;
              roles?: {
                id?: number;
                documentId?: string;
                name?: string;
                code?: string;
                description?: string;
                users?: { id?: number; documentId?: string }[];
                permissions?: {
                  id?: number;
                  documentId?: string;
                  action?: string;
                  actionParameters?: any;
                  subject?: string;
                  properties?: any;
                  conditions?: any;
                  role?: { id?: number; documentId?: string };
                  createdAt?: string;
                  updatedAt?: string;
                  publishedAt?: string;
                  createdBy?: { id?: number; documentId?: string };
                  updatedBy?: { id?: number; documentId?: string };
                  locale?: string;
                  localizations?: { id?: number; documentId?: string }[];
                }[];
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              blocked?: boolean;
              preferedLanguage?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          path?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        };
        folderPath?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      perks?: SharedPerksComponent[];
      plans?: {
        id?: number;
        documentId?: string;
        name?: string;
        price?: number;
        sub_text?: string;
        featured?: boolean;
        CTA?: SharedButtonComponent;
        perks?: SharedPerksComponent[];
        additional_perks?: SharedPerksComponent[];
        product?: { id?: number; documentId?: string };
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      categories?: {
        id?: number;
        documentId?: string;
        name?: string;
        product?: { id?: number; documentId?: string };
        articles?: {
          id?: number;
          documentId?: string;
          seo?: SharedSeoComponent;
          title?: string;
          description?: string;
          slug?: string;
          content?: any;
          categories?: { id?: number; documentId?: string }[];
          dynamic_zone?: (
            | DynamicZoneRelatedArticlesComponent
            | DynamicZoneCtaComponent
          )[];
          image?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: { id?: number; documentId?: string }[];
            folder?: { id?: number; documentId?: string };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      dynamic_zone?: (
        | DynamicZoneRelatedProductsComponent
        | DynamicZoneCtaComponent
      )[];
      featured?: boolean;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    articles?: { id?: number; documentId?: string }[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type CategoryListResponse = {
    data?: Category[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type CategoryRequest = {
    data: {
      name?: string;
      product?: number | string;
      articles?: (number | string)[];
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type CategoryResponse = {
    data?: Category;
    meta?: Record<string, any>;
  };

  type ClientStage = {
    id?: number;
    documentId?: string;
    name: string;
    purpose?: string;
    focus_on?: string;
    follow_up_automation_days?: number;
    description?: string;
    isActiveStage?: boolean;
    isSOIStage?: boolean;
    customers?: {
      id?: number;
      documentId?: string;
      fullName?: string;
      email?: string;
      phone?: string;
      source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
      agent?: {
        id?: number;
        documentId?: string;
        username?: string;
        email?: string;
        provider?: string;
        resetPasswordToken?: string;
        confirmationToken?: string;
        confirmed?: boolean;
        blocked?: boolean;
        role?: {
          id?: number;
          documentId?: string;
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            id?: number;
            documentId?: string;
            action?: string;
            role?: { id?: number; documentId?: string };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
              firstname?: string;
              lastname?: string;
              username?: string;
              email?: string;
              resetPasswordToken?: string;
              registrationToken?: string;
              isActive?: boolean;
              roles?: {
                id?: number;
                documentId?: string;
                name?: string;
                code?: string;
                description?: string;
                users?: { id?: number; documentId?: string }[];
                permissions?: {
                  id?: number;
                  documentId?: string;
                  action?: string;
                  actionParameters?: any;
                  subject?: string;
                  properties?: any;
                  conditions?: any;
                  role?: { id?: number; documentId?: string };
                  createdAt?: string;
                  updatedAt?: string;
                  publishedAt?: string;
                  createdBy?: { id?: number; documentId?: string };
                  updatedBy?: { id?: number; documentId?: string };
                  locale?: string;
                  localizations?: { id?: number; documentId?: string }[];
                }[];
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              blocked?: boolean;
              preferedLanguage?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          users?: { id?: number; documentId?: string }[];
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        };
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      stage?: {
        id?: number;
        documentId?: string;
        name?: string;
        purpose?: string;
        focus_on?: string;
        follow_up_automation_days?: number;
        description?: string;
        isActiveStage?: boolean;
        isSOIStage?: boolean;
        customers?: { id?: number; documentId?: string }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      deals?: {
        id?: number;
        documentId?: string;
        title?: string;
        status?: { id?: number; documentId?: string };
        dealValue?: number;
        dealDate?: string;
        customer?: { id?: number; documentId?: string };
        property?: {
          id?: number;
          documentId?: string;
          title?: string;
          propertyType?:
            | "apartment"
            | "house"
            | "land"
            | "villa"
            | "commercial"
            | "other";
          location?: string;
          price?: number;
          area?: number;
          bedrooms?: number;
          bathrooms?: number;
          status?: "available" | "sold" | "pending" | "off-market";
          description?: string;
          images?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: { id?: number; documentId?: string }[];
            folder?: {
              id?: number;
              documentId?: string;
              name?: string;
              pathId?: number;
              parent?: { id?: number; documentId?: string };
              children?: { id?: number; documentId?: string }[];
              files?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: { id?: number; documentId?: string }[];
                folder?: { id?: number; documentId?: string };
                folderPath?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              path?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          listedBy?: { id?: number; documentId?: string };
          deals?: { id?: number; documentId?: string }[];
          notes?: {
            id?: number;
            documentId?: string;
            title?: string;
            content?: string;
            createdByUser?: { id?: number; documentId?: string };
            customer?: { id?: number; documentId?: string };
            deal?: { id?: number; documentId?: string };
            property?: { id?: number; documentId?: string };
            task?: {
              id?: number;
              documentId?: string;
              title?: string;
              description?: string;
              dueDate?: string;
              assignedTo?: { id?: number; documentId?: string };
              status?: "pending" | "in_progress" | "completed";
              relatedDeal?: { id?: number; documentId?: string };
              notes?: { id?: number; documentId?: string }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        };
        agent?: { id?: number; documentId?: string };
        notes?: { id?: number; documentId?: string }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      notes?: { id?: number; documentId?: string }[];
      lastContacted?: string;
      nextFollowUp?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type ClientStageListResponse = {
    data?: ClientStage[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type ClientStageRequest = {
    data: {
      name: string;
      purpose?: string;
      focus_on?: string;
      follow_up_automation_days?: number;
      description?: string;
      isActiveStage?: boolean;
      isSOIStage?: boolean;
      customers?: (number | string)[];
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type ClientStageResponse = {
    data?: ClientStage;
    meta?: Record<string, any>;
  };

  type clientStagesParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type Customer = {
    id?: number;
    documentId?: string;
    fullName: string;
    email?: string;
    phone?: string;
    source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
    agent?: {
      id?: number;
      documentId?: string;
      username?: string;
      email?: string;
      provider?: string;
      resetPasswordToken?: string;
      confirmationToken?: string;
      confirmed?: boolean;
      blocked?: boolean;
      role?: {
        id?: number;
        documentId?: string;
        name?: string;
        description?: string;
        type?: string;
        permissions?: {
          id?: number;
          documentId?: string;
          action?: string;
          role?: { id?: number; documentId?: string };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              id?: number;
              documentId?: string;
              name?: string;
              code?: string;
              description?: string;
              users?: { id?: number; documentId?: string }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: { id?: number; documentId?: string };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        users?: { id?: number; documentId?: string }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    stage?: {
      id?: number;
      documentId?: string;
      name?: string;
      purpose?: string;
      focus_on?: string;
      follow_up_automation_days?: number;
      description?: string;
      isActiveStage?: boolean;
      isSOIStage?: boolean;
      customers?: {
        id?: number;
        documentId?: string;
        fullName?: string;
        email?: string;
        phone?: string;
        source?:
          | "website"
          | "facebook"
          | "zalo"
          | "referral"
          | "event"
          | "other";
        agent?: { id?: number; documentId?: string };
        stage?: { id?: number; documentId?: string };
        deals?: {
          id?: number;
          documentId?: string;
          title?: string;
          status?: { id?: number; documentId?: string };
          dealValue?: number;
          dealDate?: string;
          customer?: { id?: number; documentId?: string };
          property?: {
            id?: number;
            documentId?: string;
            title?: string;
            propertyType?:
              | "apartment"
              | "house"
              | "land"
              | "villa"
              | "commercial"
              | "other";
            location?: string;
            price?: number;
            area?: number;
            bedrooms?: number;
            bathrooms?: number;
            status?: "available" | "sold" | "pending" | "off-market";
            description?: string;
            images?: {
              id?: number;
              documentId?: string;
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { id?: number; documentId?: string }[];
              folder?: {
                id?: number;
                documentId?: string;
                name?: string;
                pathId?: number;
                parent?: { id?: number; documentId?: string };
                children?: { id?: number; documentId?: string }[];
                files?: {
                  id?: number;
                  documentId?: string;
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: { id?: number; documentId?: string }[];
                  folder?: { id?: number; documentId?: string };
                  folderPath?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  publishedAt?: string;
                  createdBy?: { id?: number; documentId?: string };
                  updatedBy?: { id?: number; documentId?: string };
                  locale?: string;
                  localizations?: { id?: number; documentId?: string }[];
                }[];
                path?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              };
              folderPath?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            listedBy?: { id?: number; documentId?: string };
            deals?: { id?: number; documentId?: string }[];
            notes?: {
              id?: number;
              documentId?: string;
              title?: string;
              content?: string;
              createdByUser?: { id?: number; documentId?: string };
              customer?: { id?: number; documentId?: string };
              deal?: { id?: number; documentId?: string };
              property?: { id?: number; documentId?: string };
              task?: {
                id?: number;
                documentId?: string;
                title?: string;
                description?: string;
                dueDate?: string;
                assignedTo?: { id?: number; documentId?: string };
                status?: "pending" | "in_progress" | "completed";
                relatedDeal?: { id?: number; documentId?: string };
                notes?: { id?: number; documentId?: string }[];
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          agent?: { id?: number; documentId?: string };
          notes?: { id?: number; documentId?: string }[];
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        notes?: { id?: number; documentId?: string }[];
        lastContacted?: string;
        nextFollowUp?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    deals?: { id?: number; documentId?: string }[];
    notes?: { id?: number; documentId?: string }[];
    lastContacted?: string;
    nextFollowUp?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type CustomerListResponse = {
    data?: Customer[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type CustomerRequest = {
    data: {
      fullName: string;
      email?: string;
      phone?: string;
      source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
      agent?: number | string;
      stage?: number | string;
      deals?: (number | string)[];
      notes?: (number | string)[];
      lastContacted?: string;
      nextFollowUp?: string;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type CustomerResponse = {
    data?: Customer;
    meta?: Record<string, any>;
  };

  type customersParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type Deal = {
    id?: number;
    documentId?: string;
    title: string;
    status?: {
      id?: number;
      documentId?: string;
      name?: string;
      purpose?: string;
      focus_on?: string;
      follow_up_automation_days?: number;
      description?: string;
      isActiveStage?: boolean;
      isSOIStage?: boolean;
      customers?: {
        id?: number;
        documentId?: string;
        fullName?: string;
        email?: string;
        phone?: string;
        source?:
          | "website"
          | "facebook"
          | "zalo"
          | "referral"
          | "event"
          | "other";
        agent?: {
          id?: number;
          documentId?: string;
          username?: string;
          email?: string;
          provider?: string;
          resetPasswordToken?: string;
          confirmationToken?: string;
          confirmed?: boolean;
          blocked?: boolean;
          role?: {
            id?: number;
            documentId?: string;
            name?: string;
            description?: string;
            type?: string;
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              role?: { id?: number; documentId?: string };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  id?: number;
                  documentId?: string;
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: { id?: number; documentId?: string }[];
                  permissions?: {
                    id?: number;
                    documentId?: string;
                    action?: string;
                    actionParameters?: any;
                    subject?: string;
                    properties?: any;
                    conditions?: any;
                    role?: { id?: number; documentId?: string };
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { id?: number; documentId?: string };
                    updatedBy?: { id?: number; documentId?: string };
                    locale?: string;
                    localizations?: { id?: number; documentId?: string }[];
                  }[];
                  createdAt?: string;
                  updatedAt?: string;
                  publishedAt?: string;
                  createdBy?: { id?: number; documentId?: string };
                  updatedBy?: { id?: number; documentId?: string };
                  locale?: string;
                  localizations?: { id?: number; documentId?: string }[];
                }[];
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            users?: { id?: number; documentId?: string }[];
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        };
        stage?: { id?: number; documentId?: string };
        deals?: {
          id?: number;
          documentId?: string;
          title?: string;
          status?: { id?: number; documentId?: string };
          dealValue?: number;
          dealDate?: string;
          customer?: { id?: number; documentId?: string };
          property?: {
            id?: number;
            documentId?: string;
            title?: string;
            propertyType?:
              | "apartment"
              | "house"
              | "land"
              | "villa"
              | "commercial"
              | "other";
            location?: string;
            price?: number;
            area?: number;
            bedrooms?: number;
            bathrooms?: number;
            status?: "available" | "sold" | "pending" | "off-market";
            description?: string;
            images?: {
              id?: number;
              documentId?: string;
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { id?: number; documentId?: string }[];
              folder?: {
                id?: number;
                documentId?: string;
                name?: string;
                pathId?: number;
                parent?: { id?: number; documentId?: string };
                children?: { id?: number; documentId?: string }[];
                files?: {
                  id?: number;
                  documentId?: string;
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: { id?: number; documentId?: string }[];
                  folder?: { id?: number; documentId?: string };
                  folderPath?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  publishedAt?: string;
                  createdBy?: { id?: number; documentId?: string };
                  updatedBy?: { id?: number; documentId?: string };
                  locale?: string;
                  localizations?: { id?: number; documentId?: string }[];
                }[];
                path?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              };
              folderPath?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            listedBy?: { id?: number; documentId?: string };
            deals?: { id?: number; documentId?: string }[];
            notes?: {
              id?: number;
              documentId?: string;
              title?: string;
              content?: string;
              createdByUser?: { id?: number; documentId?: string };
              customer?: { id?: number; documentId?: string };
              deal?: { id?: number; documentId?: string };
              property?: { id?: number; documentId?: string };
              task?: {
                id?: number;
                documentId?: string;
                title?: string;
                description?: string;
                dueDate?: string;
                assignedTo?: { id?: number; documentId?: string };
                status?: "pending" | "in_progress" | "completed";
                relatedDeal?: { id?: number; documentId?: string };
                notes?: { id?: number; documentId?: string }[];
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          agent?: { id?: number; documentId?: string };
          notes?: { id?: number; documentId?: string }[];
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        notes?: { id?: number; documentId?: string }[];
        lastContacted?: string;
        nextFollowUp?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    dealValue?: number;
    dealDate?: string;
    customer?: { id?: number; documentId?: string };
    property?: { id?: number; documentId?: string };
    agent?: { id?: number; documentId?: string };
    notes?: { id?: number; documentId?: string }[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type DealListResponse = {
    data?: Deal[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type DealRequest = {
    data: {
      title: string;
      status?: number | string;
      dealValue?: number;
      dealDate?: string;
      customer?: number | string;
      property?: number | string;
      agent?: number | string;
      notes?: (number | string)[];
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type DealResponse = {
    data?: Deal;
    meta?: Record<string, any>;
  };

  type dealsParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type deleteUploadFilesIdParams = {
    id: string;
  };

  type deleteUsersIdParams = {
    /** user Id */
    id: string;
  };

  type deleteUsersPermissionsRolesRoleParams = {
    /** role Id */
    role: string;
  };

  type DynamicZoneBrandsComponent = {
    id?: number;
    __component?: "dynamic-zone.brands";
    heading?: string;
    sub_heading?: string;
    logos?: { id?: number; documentId?: string }[];
  };

  type DynamicZoneCtaComponent = {
    id?: number;
    __component?: "dynamic-zone.cta";
    heading?: string;
    sub_heading?: string;
    CTAs?: SharedButtonComponent[];
  };

  type DynamicZoneFaqComponent = {
    id?: number;
    __component?: "dynamic-zone.faq";
    heading?: string;
    sub_heading?: string;
    faqs?: { id?: number; documentId?: string }[];
  };

  type DynamicZoneFeaturesComponent = {
    id?: number;
    __component?: "dynamic-zone.features";
    heading?: string;
    sub_heading?: string;
    globe_card?: CardsGlobeCardComponent;
    ray_card?: CardsRayCardComponent;
    graph_card?: CardsGraphCardComponent;
    social_media_card?: CardsSocialMediaCardComponent;
  };

  type DynamicZoneFormNextToSectionComponent = {
    id?: number;
    __component?: "dynamic-zone.form-next-to-section";
    heading?: string;
    sub_heading?: string;
    form?: SharedFormComponent;
    section?: SharedSectionComponent;
    social_media_icon_links?: SharedSocialMediaIconLinksComponent[];
  };

  type DynamicZoneHeroComponent = {
    id?: number;
    __component?: "dynamic-zone.hero";
    heading?: string;
    sub_heading?: string;
    CTAs?: SharedButtonComponent[];
  };

  type DynamicZoneHowItWorksComponent = {
    id?: number;
    __component?: "dynamic-zone.how-it-works";
    heading?: string;
    sub_heading?: string;
    steps?: SharedStepsComponent[];
  };

  type DynamicZoneLaunchesComponent = {
    id?: number;
    __component?: "dynamic-zone.launches";
    heading?: string;
    sub_heading?: string;
    launches?: SharedLaunchesComponent[];
  };

  type DynamicZonePricingComponent = {
    id?: number;
    __component?: "dynamic-zone.pricing";
    heading?: string;
    sub_heading?: string;
    plans?: { id?: number; documentId?: string }[];
  };

  type DynamicZoneRelatedArticlesComponent = {
    id?: number;
    __component?: "dynamic-zone.related-articles";
    heading?: string;
    sub_heading?: string;
    articles?: { id?: number; documentId?: string }[];
  };

  type DynamicZoneRelatedProductsComponent = {
    id?: number;
    __component?: "dynamic-zone.related-products";
    heading?: string;
    sub_heading?: string;
    products?: { id?: number; documentId?: string }[];
  };

  type DynamicZoneTestimonialsComponent = {
    id?: number;
    __component?: "dynamic-zone.testimonials";
    heading?: string;
    sub_heading?: string;
    testimonials?: { id?: number; documentId?: string }[];
  };

  type Error = {
    data?: Record<string, any> | Record<string, any>[];
    error: {
      status?: number;
      name?: string;
      message?: string;
      details?: Record<string, any>;
    };
  };

  type Faq = {
    id?: number;
    documentId?: string;
    question?: string;
    answer?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
      firstname?: string;
      lastname?: string;
      username?: string;
      email?: string;
      resetPasswordToken?: string;
      registrationToken?: string;
      isActive?: boolean;
      roles?: {
        id?: number;
        documentId?: string;
        name?: string;
        code?: string;
        description?: string;
        users?: { id?: number; documentId?: string }[];
        permissions?: {
          id?: number;
          documentId?: string;
          action?: string;
          actionParameters?: any;
          subject?: string;
          properties?: any;
          conditions?: any;
          role?: { id?: number; documentId?: string };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      blocked?: boolean;
      preferedLanguage?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
      question?: string;
      answer?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
  };

  type FaqListResponse = {
    data?: Faq[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type FaqRequest = {
    data: {
      question?: string;
      answer?: string;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type FaqResponse = {
    data?: Faq;
    meta?: Record<string, any>;
  };

  type faqsParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type getAuthEmailConfirmationParams = {
    /** confirmation token received by email */
    confirmation?: string;
  };

  type getAuthProviderCallbackParams = {
    /** Provider name */
    provider: string;
  };

  type getConnectProviderParams = {
    /** Provider name */
    provider: string;
  };

  type getUploadFilesIdParams = {
    id: string;
  };

  type getUsersIdParams = {
    /** user Id */
    id: string;
  };

  type getUsersPermissionsRolesIdParams = {
    /** role Id */
    id: string;
  };

  type Global = {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    navbar?: GlobalNavbarComponent;
    footer?: GlobalFooterComponent;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
      seo?: SharedSeoComponent;
      navbar?: GlobalNavbarComponent;
      footer?: GlobalFooterComponent;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
  };

  type GlobalFooterComponent = {
    id?: number;
    logo?: { id?: number; documentId?: string };
    description?: string;
    copyright?: string;
    designed_developed_by?: string;
    built_with?: string;
    internal_links?: SharedLinkComponent[];
    policy_links?: SharedLinkComponent[];
    social_media_links?: SharedLinkComponent[];
  };

  type GlobalListResponse = {
    data?: Global[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type GlobalNavbarComponent = {
    id?: number;
    logo?: { id?: number; documentId?: string };
    left_navbar_items?: SharedLinkComponent[];
    right_navbar_items?: SharedLinkComponent[];
  };

  type globalParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type GlobalRequest = {
    data: {
      seo?: SharedSeoComponent;
      navbar?: GlobalNavbarComponent;
      footer?: GlobalFooterComponent;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type GlobalResponse = {
    data?: Global;
    meta?: Record<string, any>;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type idParams = {
    id: number;
  };

  type ItemsGraphCardTopItemsComponent = {
    id?: number;
    number?: string;
    text?: string;
  };

  type ItemsInputComponent = {
    id?: number;
    type?:
      | "text"
      | "email"
      | "password"
      | "submit"
      | "textarea"
      | "button"
      | "checkbox"
      | "color"
      | "date"
      | "datetime-local"
      | "file"
      | "hidden"
      | "image"
      | "month"
      | "number"
      | "radio"
      | "range"
      | "reset"
      | "search"
      | "tel"
      | "time"
      | "url"
      | "week";
    name?: string;
    placeholder?: string;
  };

  type ItemsRayItemsComponent = {
    id?: number;
    item_1?: string;
    item_2?: string;
    item_3?: string;
  };

  type Logo = {
    id?: number;
    documentId?: string;
    image: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: { id?: number; documentId?: string }[];
      folder?: {
        id?: number;
        documentId?: string;
        name?: string;
        pathId?: number;
        parent?: { id?: number; documentId?: string };
        children?: { id?: number; documentId?: string }[];
        files?: {
          id?: number;
          documentId?: string;
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { id?: number; documentId?: string }[];
          folder?: { id?: number; documentId?: string };
          folderPath?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              id?: number;
              documentId?: string;
              name?: string;
              code?: string;
              description?: string;
              users?: { id?: number; documentId?: string }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: { id?: number; documentId?: string };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        path?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      folderPath?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    company?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
      image?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: { id?: number; documentId?: string }[];
        folder?: { id?: number; documentId?: string };
        folderPath?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      company?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
  };

  type LogoListResponse = {
    data?: Logo[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type LogoRequest = {
    data: {
      image: number | string;
      company?: string;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type LogoResponse = {
    data?: Logo;
    meta?: Record<string, any>;
  };

  type logosParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type Note = {
    id?: number;
    documentId?: string;
    title?: string;
    content: string;
    createdByUser?: {
      id?: number;
      documentId?: string;
      username?: string;
      email?: string;
      provider?: string;
      resetPasswordToken?: string;
      confirmationToken?: string;
      confirmed?: boolean;
      blocked?: boolean;
      role?: {
        id?: number;
        documentId?: string;
        name?: string;
        description?: string;
        type?: string;
        permissions?: {
          id?: number;
          documentId?: string;
          action?: string;
          role?: { id?: number; documentId?: string };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              id?: number;
              documentId?: string;
              name?: string;
              code?: string;
              description?: string;
              users?: { id?: number; documentId?: string }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: { id?: number; documentId?: string };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        users?: { id?: number; documentId?: string }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    customer?: {
      id?: number;
      documentId?: string;
      fullName?: string;
      email?: string;
      phone?: string;
      source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
      agent?: { id?: number; documentId?: string };
      stage?: {
        id?: number;
        documentId?: string;
        name?: string;
        purpose?: string;
        focus_on?: string;
        follow_up_automation_days?: number;
        description?: string;
        isActiveStage?: boolean;
        isSOIStage?: boolean;
        customers?: { id?: number; documentId?: string }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      deals?: {
        id?: number;
        documentId?: string;
        title?: string;
        status?: { id?: number; documentId?: string };
        dealValue?: number;
        dealDate?: string;
        customer?: { id?: number; documentId?: string };
        property?: {
          id?: number;
          documentId?: string;
          title?: string;
          propertyType?:
            | "apartment"
            | "house"
            | "land"
            | "villa"
            | "commercial"
            | "other";
          location?: string;
          price?: number;
          area?: number;
          bedrooms?: number;
          bathrooms?: number;
          status?: "available" | "sold" | "pending" | "off-market";
          description?: string;
          images?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: { id?: number; documentId?: string }[];
            folder?: {
              id?: number;
              documentId?: string;
              name?: string;
              pathId?: number;
              parent?: { id?: number; documentId?: string };
              children?: { id?: number; documentId?: string }[];
              files?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: { id?: number; documentId?: string }[];
                folder?: { id?: number; documentId?: string };
                folderPath?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              path?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          listedBy?: { id?: number; documentId?: string };
          deals?: { id?: number; documentId?: string }[];
          notes?: {
            id?: number;
            documentId?: string;
            title?: string;
            content?: string;
            createdByUser?: { id?: number; documentId?: string };
            customer?: { id?: number; documentId?: string };
            deal?: { id?: number; documentId?: string };
            property?: { id?: number; documentId?: string };
            task?: {
              id?: number;
              documentId?: string;
              title?: string;
              description?: string;
              dueDate?: string;
              assignedTo?: { id?: number; documentId?: string };
              status?: "pending" | "in_progress" | "completed";
              relatedDeal?: { id?: number; documentId?: string };
              notes?: { id?: number; documentId?: string }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        };
        agent?: { id?: number; documentId?: string };
        notes?: { id?: number; documentId?: string }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      notes?: { id?: number; documentId?: string }[];
      lastContacted?: string;
      nextFollowUp?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    deal?: { id?: number; documentId?: string };
    property?: { id?: number; documentId?: string };
    task?: { id?: number; documentId?: string };
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type NoteListResponse = {
    data?: Note[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type NoteRequest = {
    data: {
      title?: string;
      content: string;
      createdByUser?: number | string;
      customer?: number | string;
      deal?: number | string;
      property?: number | string;
      task?: number | string;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type NoteResponse = {
    data?: Note;
    meta?: Record<string, any>;
  };

  type notesParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type Page = {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    slug: string;
    dynamic_zone?: (
      | DynamicZoneHeroComponent
      | DynamicZoneFeaturesComponent
      | DynamicZoneTestimonialsComponent
      | DynamicZoneHowItWorksComponent
      | DynamicZoneBrandsComponent
      | DynamicZonePricingComponent
      | DynamicZoneLaunchesComponent
      | DynamicZoneCtaComponent
      | DynamicZoneFormNextToSectionComponent
      | DynamicZoneFaqComponent
    )[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
      seo?: SharedSeoComponent;
      slug?: string;
      dynamic_zone?: (
        | DynamicZoneHeroComponent
        | DynamicZoneFeaturesComponent
        | DynamicZoneTestimonialsComponent
        | DynamicZoneHowItWorksComponent
        | DynamicZoneBrandsComponent
        | DynamicZonePricingComponent
        | DynamicZoneLaunchesComponent
        | DynamicZoneCtaComponent
        | DynamicZoneFormNextToSectionComponent
        | DynamicZoneFaqComponent
      )[];
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
  };

  type PageListResponse = {
    data?: Page[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type PageRequest = {
    data: {
      seo?: SharedSeoComponent;
      slug: string;
      dynamic_zone?: (
        | DynamicZoneHeroComponent
        | DynamicZoneFeaturesComponent
        | DynamicZoneTestimonialsComponent
        | DynamicZoneHowItWorksComponent
        | DynamicZoneBrandsComponent
        | DynamicZonePricingComponent
        | DynamicZoneLaunchesComponent
        | DynamicZoneCtaComponent
        | DynamicZoneFormNextToSectionComponent
        | DynamicZoneFaqComponent
      )[];
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type PageResponse = {
    data?: Page;
    meta?: Record<string, any>;
  };

  type pagesParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type Plan = {
    id?: number;
    documentId?: string;
    name?: string;
    price?: number;
    sub_text?: string;
    featured?: boolean;
    CTA?: SharedButtonComponent;
    perks?: SharedPerksComponent[];
    additional_perks?: SharedPerksComponent[];
    product?: {
      id?: number;
      documentId?: string;
      name?: string;
      price?: number;
      description?: string;
      slug?: string;
      images?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: { id?: number; documentId?: string }[];
        folder?: {
          id?: number;
          documentId?: string;
          name?: string;
          pathId?: number;
          parent?: { id?: number; documentId?: string };
          children?: { id?: number; documentId?: string }[];
          files?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: { id?: number; documentId?: string }[];
            folder?: { id?: number; documentId?: string };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
              firstname?: string;
              lastname?: string;
              username?: string;
              email?: string;
              resetPasswordToken?: string;
              registrationToken?: string;
              isActive?: boolean;
              roles?: {
                id?: number;
                documentId?: string;
                name?: string;
                code?: string;
                description?: string;
                users?: { id?: number; documentId?: string }[];
                permissions?: {
                  id?: number;
                  documentId?: string;
                  action?: string;
                  actionParameters?: any;
                  subject?: string;
                  properties?: any;
                  conditions?: any;
                  role?: { id?: number; documentId?: string };
                  createdAt?: string;
                  updatedAt?: string;
                  publishedAt?: string;
                  createdBy?: { id?: number; documentId?: string };
                  updatedBy?: { id?: number; documentId?: string };
                  locale?: string;
                  localizations?: { id?: number; documentId?: string }[];
                }[];
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              blocked?: boolean;
              preferedLanguage?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          path?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        };
        folderPath?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      perks?: SharedPerksComponent[];
      plans?: {
        id?: number;
        documentId?: string;
        name?: string;
        price?: number;
        sub_text?: string;
        featured?: boolean;
        CTA?: SharedButtonComponent;
        perks?: SharedPerksComponent[];
        additional_perks?: SharedPerksComponent[];
        product?: { id?: number; documentId?: string };
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      categories?: {
        id?: number;
        documentId?: string;
        name?: string;
        product?: { id?: number; documentId?: string };
        articles?: {
          id?: number;
          documentId?: string;
          seo?: SharedSeoComponent;
          title?: string;
          description?: string;
          slug?: string;
          content?: any;
          categories?: { id?: number; documentId?: string }[];
          dynamic_zone?: (
            | DynamicZoneRelatedArticlesComponent
            | DynamicZoneCtaComponent
          )[];
          image?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: { id?: number; documentId?: string }[];
            folder?: { id?: number; documentId?: string };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      dynamic_zone?: (
        | DynamicZoneRelatedProductsComponent
        | DynamicZoneCtaComponent
      )[];
      featured?: boolean;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type PlanListResponse = {
    data?: Plan[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type PlanRequest = {
    data: {
      name?: string;
      price?: number;
      sub_text?: string;
      featured?: boolean;
      CTA?: SharedButtonComponent;
      perks?: SharedPerksComponent[];
      additional_perks?: SharedPerksComponent[];
      product?: number | string;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type PlanResponse = {
    data?: Plan;
    meta?: Record<string, any>;
  };

  type plansParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type postUploadididParams = {
    /** File id */
    id: string;
  };

  type Product = {
    id?: number;
    documentId?: string;
    name?: string;
    price?: number;
    description?: string;
    slug?: string;
    images?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: { id?: number; documentId?: string }[];
      folder?: {
        id?: number;
        documentId?: string;
        name?: string;
        pathId?: number;
        parent?: { id?: number; documentId?: string };
        children?: { id?: number; documentId?: string }[];
        files?: {
          id?: number;
          documentId?: string;
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { id?: number; documentId?: string }[];
          folder?: { id?: number; documentId?: string };
          folderPath?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              id?: number;
              documentId?: string;
              name?: string;
              code?: string;
              description?: string;
              users?: { id?: number; documentId?: string }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: { id?: number; documentId?: string };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        path?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      folderPath?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
    perks?: SharedPerksComponent[];
    plans?: {
      id?: number;
      documentId?: string;
      name?: string;
      price?: number;
      sub_text?: string;
      featured?: boolean;
      CTA?: SharedButtonComponent;
      perks?: SharedPerksComponent[];
      additional_perks?: SharedPerksComponent[];
      product?: {
        id?: number;
        documentId?: string;
        name?: string;
        price?: number;
        description?: string;
        slug?: string;
        images?: {
          id?: number;
          documentId?: string;
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { id?: number; documentId?: string }[];
          folder?: { id?: number; documentId?: string };
          folderPath?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        perks?: SharedPerksComponent[];
        plans?: { id?: number; documentId?: string }[];
        categories?: {
          id?: number;
          documentId?: string;
          name?: string;
          product?: { id?: number; documentId?: string };
          articles?: {
            id?: number;
            documentId?: string;
            seo?: SharedSeoComponent;
            title?: string;
            description?: string;
            slug?: string;
            content?: any;
            categories?: { id?: number; documentId?: string }[];
            dynamic_zone?: (
              | DynamicZoneRelatedArticlesComponent
              | DynamicZoneCtaComponent
            )[];
            image?: {
              id?: number;
              documentId?: string;
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { id?: number; documentId?: string }[];
              folder?: { id?: number; documentId?: string };
              folderPath?: string;
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        dynamic_zone?: (
          | DynamicZoneRelatedProductsComponent
          | DynamicZoneCtaComponent
        )[];
        featured?: boolean;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
    categories?: { id?: number; documentId?: string }[];
    dynamic_zone?: (
      | DynamicZoneRelatedProductsComponent
      | DynamicZoneCtaComponent
    )[];
    featured?: boolean;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type ProductListResponse = {
    data?: Product[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type ProductPage = {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    heading?: string;
    sub_heading?: string;
    dynamic_zone?: (
      | DynamicZoneTestimonialsComponent
      | DynamicZoneRelatedProductsComponent
      | DynamicZoneRelatedArticlesComponent
      | DynamicZonePricingComponent
      | DynamicZoneLaunchesComponent
      | DynamicZoneHowItWorksComponent
      | DynamicZoneHeroComponent
      | DynamicZoneFormNextToSectionComponent
      | DynamicZoneFeaturesComponent
      | DynamicZoneFaqComponent
      | DynamicZoneCtaComponent
      | DynamicZoneBrandsComponent
    )[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
      seo?: SharedSeoComponent;
      heading?: string;
      sub_heading?: string;
      dynamic_zone?: (
        | DynamicZoneTestimonialsComponent
        | DynamicZoneRelatedProductsComponent
        | DynamicZoneRelatedArticlesComponent
        | DynamicZonePricingComponent
        | DynamicZoneLaunchesComponent
        | DynamicZoneHowItWorksComponent
        | DynamicZoneHeroComponent
        | DynamicZoneFormNextToSectionComponent
        | DynamicZoneFeaturesComponent
        | DynamicZoneFaqComponent
        | DynamicZoneCtaComponent
        | DynamicZoneBrandsComponent
      )[];
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
  };

  type ProductPageListResponse = {
    data?: ProductPage[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type productPageParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type ProductPageRequest = {
    data: {
      seo?: SharedSeoComponent;
      heading?: string;
      sub_heading?: string;
      dynamic_zone?: (
        | DynamicZoneTestimonialsComponent
        | DynamicZoneRelatedProductsComponent
        | DynamicZoneRelatedArticlesComponent
        | DynamicZonePricingComponent
        | DynamicZoneLaunchesComponent
        | DynamicZoneHowItWorksComponent
        | DynamicZoneHeroComponent
        | DynamicZoneFormNextToSectionComponent
        | DynamicZoneFeaturesComponent
        | DynamicZoneFaqComponent
        | DynamicZoneCtaComponent
        | DynamicZoneBrandsComponent
      )[];
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type ProductPageResponse = {
    data?: ProductPage;
    meta?: Record<string, any>;
  };

  type ProductRequest = {
    data: {
      name?: string;
      price?: number;
      description?: string;
      slug?: string;
      images?: (number | string)[];
      perks?: SharedPerksComponent[];
      plans?: (number | string)[];
      categories?: (number | string)[];
      dynamic_zone?: (
        | DynamicZoneRelatedProductsComponent
        | DynamicZoneCtaComponent
      )[];
      featured?: boolean;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type ProductResponse = {
    data?: Product;
    meta?: Record<string, any>;
  };

  type productsParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type propertiesParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type Property = {
    id?: number;
    documentId?: string;
    title: string;
    propertyType?:
      | "apartment"
      | "house"
      | "land"
      | "villa"
      | "commercial"
      | "other";
    location?: string;
    price?: number;
    area?: number;
    bedrooms?: number;
    bathrooms?: number;
    status?: "available" | "sold" | "pending" | "off-market";
    description?: string;
    images?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: { id?: number; documentId?: string }[];
      folder?: {
        id?: number;
        documentId?: string;
        name?: string;
        pathId?: number;
        parent?: { id?: number; documentId?: string };
        children?: { id?: number; documentId?: string }[];
        files?: {
          id?: number;
          documentId?: string;
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { id?: number; documentId?: string }[];
          folder?: { id?: number; documentId?: string };
          folderPath?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              id?: number;
              documentId?: string;
              name?: string;
              code?: string;
              description?: string;
              users?: { id?: number; documentId?: string }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: { id?: number; documentId?: string };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        path?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      folderPath?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
    listedBy?: {
      id?: number;
      documentId?: string;
      username?: string;
      email?: string;
      provider?: string;
      resetPasswordToken?: string;
      confirmationToken?: string;
      confirmed?: boolean;
      blocked?: boolean;
      role?: {
        id?: number;
        documentId?: string;
        name?: string;
        description?: string;
        type?: string;
        permissions?: {
          id?: number;
          documentId?: string;
          action?: string;
          role?: { id?: number; documentId?: string };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        users?: { id?: number; documentId?: string }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    deals?: {
      id?: number;
      documentId?: string;
      title?: string;
      status?: {
        id?: number;
        documentId?: string;
        name?: string;
        purpose?: string;
        focus_on?: string;
        follow_up_automation_days?: number;
        description?: string;
        isActiveStage?: boolean;
        isSOIStage?: boolean;
        customers?: {
          id?: number;
          documentId?: string;
          fullName?: string;
          email?: string;
          phone?: string;
          source?:
            | "website"
            | "facebook"
            | "zalo"
            | "referral"
            | "event"
            | "other";
          agent?: { id?: number; documentId?: string };
          stage?: { id?: number; documentId?: string };
          deals?: { id?: number; documentId?: string }[];
          notes?: {
            id?: number;
            documentId?: string;
            title?: string;
            content?: string;
            createdByUser?: { id?: number; documentId?: string };
            customer?: { id?: number; documentId?: string };
            deal?: { id?: number; documentId?: string };
            property?: {
              id?: number;
              documentId?: string;
              title?: string;
              propertyType?:
                | "apartment"
                | "house"
                | "land"
                | "villa"
                | "commercial"
                | "other";
              location?: string;
              price?: number;
              area?: number;
              bedrooms?: number;
              bathrooms?: number;
              status?: "available" | "sold" | "pending" | "off-market";
              description?: string;
              images?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: { id?: number; documentId?: string }[];
                folder?: { id?: number; documentId?: string };
                folderPath?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              listedBy?: { id?: number; documentId?: string };
              deals?: { id?: number; documentId?: string }[];
              notes?: { id?: number; documentId?: string }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            task?: {
              id?: number;
              documentId?: string;
              title?: string;
              description?: string;
              dueDate?: string;
              assignedTo?: { id?: number; documentId?: string };
              status?: "pending" | "in_progress" | "completed";
              relatedDeal?: { id?: number; documentId?: string };
              notes?: { id?: number; documentId?: string }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          lastContacted?: string;
          nextFollowUp?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      dealValue?: number;
      dealDate?: string;
      customer?: { id?: number; documentId?: string };
      property?: { id?: number; documentId?: string };
      agent?: { id?: number; documentId?: string };
      notes?: { id?: number; documentId?: string }[];
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
    notes?: { id?: number; documentId?: string }[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type PropertyListResponse = {
    data?: Property[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type PropertyRequest = {
    data: {
      title: string;
      propertyType?:
        | "apartment"
        | "house"
        | "land"
        | "villa"
        | "commercial"
        | "other";
      location?: string;
      price?: number;
      area?: number;
      bedrooms?: number;
      bathrooms?: number;
      status?: "available" | "sold" | "pending" | "off-market";
      description?: string;
      images?: (number | string)[];
      listedBy?: number | string;
      deals?: (number | string)[];
      notes?: (number | string)[];
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type PropertyResponse = {
    data?: Property;
    meta?: Record<string, any>;
  };

  type putUsersIdParams = {
    /** user Id */
    id: string;
  };

  type putUsersPermissionsRolesRoleParams = {
    /** role Id */
    role: string;
  };

  type Redirection = {
    id?: number;
    documentId?: string;
    source?: string;
    destination?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
      firstname?: string;
      lastname?: string;
      username?: string;
      email?: string;
      resetPasswordToken?: string;
      registrationToken?: string;
      isActive?: boolean;
      roles?: {
        id?: number;
        documentId?: string;
        name?: string;
        code?: string;
        description?: string;
        users?: { id?: number; documentId?: string }[];
        permissions?: {
          id?: number;
          documentId?: string;
          action?: string;
          actionParameters?: any;
          subject?: string;
          properties?: any;
          conditions?: any;
          role?: { id?: number; documentId?: string };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      }[];
      blocked?: boolean;
      preferedLanguage?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
      source?: string;
      destination?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
  };

  type RedirectionListResponse = {
    data?: Redirection[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type RedirectionRequest = {
    data: {
      source?: string;
      destination?: string;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type RedirectionResponse = {
    data?: Redirection;
    meta?: Record<string, any>;
  };

  type redirectionsParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type SharedButtonComponent = {
    id?: number;
    text?: string;
    URL?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    variant?: "simple" | "outline" | "primary" | "muted";
  };

  type SharedFormComponent = {
    id?: number;
    inputs?: ItemsInputComponent[];
  };

  type SharedLaunchesComponent = {
    id?: number;
    mission_number?: string;
    title?: string;
    description?: string;
  };

  type SharedLinkComponent = {
    id?: number;
    text?: string;
    URL?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  };

  type SharedPerksComponent = {
    id?: number;
    text?: string;
  };

  type SharedSectionComponent = {
    id?: number;
    heading?: string;
    sub_heading?: string;
    users?: SharedUserComponent[];
  };

  type SharedSeoComponent = {
    id?: number;
    metaTitle?: string;
    metaDescription?: string;
    metaImage?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: { id?: number; documentId?: string }[];
      folder?: { id?: number; documentId?: string };
      folderPath?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    keywords?: string;
    metaRobots?: string;
    structuredData?: any;
    metaViewport?: string;
    canonicalURL?: string;
  };

  type SharedSocialMediaIconLinksComponent = {
    id?: number;
    image?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: { id?: number; documentId?: string }[];
      folder?: { id?: number; documentId?: string };
      folderPath?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    link?: SharedLinkComponent[];
  };

  type SharedStepsComponent = {
    id?: number;
    title?: string;
    description?: string;
  };

  type SharedUserComponent = {
    id?: number;
    firstname?: string;
    lastname?: string;
    job?: string;
    image?: {
      id?: number;
      documentId?: string;
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: { id?: number; documentId?: string }[];
      folder?: { id?: number; documentId?: string };
      folderPath?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
  };

  type Task = {
    id?: number;
    documentId?: string;
    title: string;
    description?: string;
    dueDate?: string;
    assignedTo?: {
      id?: number;
      documentId?: string;
      username?: string;
      email?: string;
      provider?: string;
      resetPasswordToken?: string;
      confirmationToken?: string;
      confirmed?: boolean;
      blocked?: boolean;
      role?: {
        id?: number;
        documentId?: string;
        name?: string;
        description?: string;
        type?: string;
        permissions?: {
          id?: number;
          documentId?: string;
          action?: string;
          role?: { id?: number; documentId?: string };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              id?: number;
              documentId?: string;
              name?: string;
              code?: string;
              description?: string;
              users?: { id?: number; documentId?: string }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: { id?: number; documentId?: string };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        users?: { id?: number; documentId?: string }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    status?: "pending" | "in_progress" | "completed";
    relatedDeal?: {
      id?: number;
      documentId?: string;
      title?: string;
      status?: {
        id?: number;
        documentId?: string;
        name?: string;
        purpose?: string;
        focus_on?: string;
        follow_up_automation_days?: number;
        description?: string;
        isActiveStage?: boolean;
        isSOIStage?: boolean;
        customers?: {
          id?: number;
          documentId?: string;
          fullName?: string;
          email?: string;
          phone?: string;
          source?:
            | "website"
            | "facebook"
            | "zalo"
            | "referral"
            | "event"
            | "other";
          agent?: { id?: number; documentId?: string };
          stage?: { id?: number; documentId?: string };
          deals?: { id?: number; documentId?: string }[];
          notes?: {
            id?: number;
            documentId?: string;
            title?: string;
            content?: string;
            createdByUser?: { id?: number; documentId?: string };
            customer?: { id?: number; documentId?: string };
            deal?: { id?: number; documentId?: string };
            property?: {
              id?: number;
              documentId?: string;
              title?: string;
              propertyType?:
                | "apartment"
                | "house"
                | "land"
                | "villa"
                | "commercial"
                | "other";
              location?: string;
              price?: number;
              area?: number;
              bedrooms?: number;
              bathrooms?: number;
              status?: "available" | "sold" | "pending" | "off-market";
              description?: string;
              images?: {
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: { id?: number; documentId?: string }[];
                folder?: {
                  id?: number;
                  documentId?: string;
                  name?: string;
                  pathId?: number;
                  parent?: { id?: number; documentId?: string };
                  children?: { id?: number; documentId?: string }[];
                  files?: {
                    id?: number;
                    documentId?: string;
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: { id?: number; documentId?: string }[];
                    folder?: { id?: number; documentId?: string };
                    folderPath?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { id?: number; documentId?: string };
                    updatedBy?: { id?: number; documentId?: string };
                    locale?: string;
                    localizations?: { id?: number; documentId?: string }[];
                  }[];
                  path?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  publishedAt?: string;
                  createdBy?: { id?: number; documentId?: string };
                  updatedBy?: { id?: number; documentId?: string };
                  locale?: string;
                  localizations?: { id?: number; documentId?: string }[];
                };
                folderPath?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { id?: number; documentId?: string };
                updatedBy?: { id?: number; documentId?: string };
                locale?: string;
                localizations?: { id?: number; documentId?: string }[];
              }[];
              listedBy?: { id?: number; documentId?: string };
              deals?: { id?: number; documentId?: string }[];
              notes?: { id?: number; documentId?: string }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            task?: {
              id?: number;
              documentId?: string;
              title?: string;
              description?: string;
              dueDate?: string;
              assignedTo?: { id?: number; documentId?: string };
              status?: "pending" | "in_progress" | "completed";
              relatedDeal?: { id?: number; documentId?: string };
              notes?: { id?: number; documentId?: string }[];
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: { id?: number; documentId?: string };
              updatedBy?: { id?: number; documentId?: string };
              locale?: string;
              localizations?: { id?: number; documentId?: string }[];
            };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: { id?: number; documentId?: string };
            updatedBy?: { id?: number; documentId?: string };
            locale?: string;
            localizations?: { id?: number; documentId?: string }[];
          }[];
          lastContacted?: string;
          nextFollowUp?: string;
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: { id?: number; documentId?: string };
          updatedBy?: { id?: number; documentId?: string };
          locale?: string;
          localizations?: { id?: number; documentId?: string }[];
        }[];
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: { id?: number; documentId?: string };
        updatedBy?: { id?: number; documentId?: string };
        locale?: string;
        localizations?: { id?: number; documentId?: string }[];
      };
      dealValue?: number;
      dealDate?: string;
      customer?: { id?: number; documentId?: string };
      property?: { id?: number; documentId?: string };
      agent?: { id?: number; documentId?: string };
      notes?: { id?: number; documentId?: string }[];
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    };
    notes?: { id?: number; documentId?: string }[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: { id?: number; documentId?: string }[];
  };

  type TaskListResponse = {
    data?: Task[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type TaskRequest = {
    data: {
      title: string;
      description?: string;
      dueDate?: string;
      assignedTo?: number | string;
      status?: "pending" | "in_progress" | "completed";
      relatedDeal?: number | string;
      notes?: (number | string)[];
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type TaskResponse = {
    data?: Task;
    meta?: Record<string, any>;
  };

  type tasksParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type Testimonial = {
    id?: number;
    documentId?: string;
    text?: string;
    user?: SharedUserComponent;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: { id?: number; documentId?: string };
    updatedBy?: { id?: number; documentId?: string };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
      text?: string;
      user?: SharedUserComponent;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: { id?: number; documentId?: string };
      updatedBy?: { id?: number; documentId?: string };
      locale?: string;
      localizations?: { id?: number; documentId?: string }[];
    }[];
  };

  type TestimonialListResponse = {
    data?: Testimonial[];
    meta?: {
      pagination?: {
        page?: number;
        pageSize?: number;
        pageCount?: number;
        total?: number;
      };
    };
  };

  type TestimonialRequest = {
    data: {
      text?: string;
      user?: SharedUserComponent;
      locale?: string;
      localizations?: (number | string)[];
    };
  };

  type TestimonialResponse = {
    data?: Testimonial;
    meta?: Record<string, any>;
  };

  type testimonialsParams = {
    /** Sort by attributes ascending (asc) or descending (desc) */
    sort?: string;
    /** Return page/pageSize (default: true) */
    "pagination[withCount]"?: boolean;
    /** Page number (default: 0) */
    "pagination[page]"?: number;
    /** Page size (default: 25) */
    "pagination[pageSize]"?: number;
    /** Offset value (default: 0) */
    "pagination[start]"?: number;
    /** Number of entities to return (default: 25) */
    "pagination[limit]"?: number;
    /** Fields to return (ex: title,author) */
    fields?: string;
    /** Relations to return */
    populate?: string;
    /** Filters to apply */
    filters?: Record<string, any>;
    /** Locale to apply */
    locale?: string;
  };

  type UploadFile = {
    id?: number;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: number;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: Record<string, any>;
    createdAt?: string;
    updatedAt?: string;
  };

  type UsersPermissionsPermissionsTree = true;

  type UsersPermissionsRole = {
    id?: number;
    name?: string;
    description?: string;
    type?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  type UsersPermissionsUser = {
    id?: number;
    username?: string;
    email?: string;
    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    createdAt?: string;
    updatedAt?: string;
  };

  type UsersPermissionsUserRegistration = {
    jwt?: string;
    user?: UsersPermissionsUser;
  };
}
