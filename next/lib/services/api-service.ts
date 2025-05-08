/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  data?: object | object[] | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
}

export interface ArticleRequest {
  data: {
    seo?: SharedSeoComponent;
    title?: string;
    description?: string;
    slug?: string;
    content?: any;
    categories?: (number | string)[];
    dynamic_zone?: BaseNull &
      (
        | BaseNullComponentMapping<
            "dynamic-zone.related-articles",
            DynamicZoneRelatedArticlesComponent
          >
        | BaseNullComponentMapping<"dynamic-zone.cta", DynamicZoneCtaComponent>
      );
    /** @example "string or id" */
    image?: number | string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface ArticleListResponse {
  data?: Article[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Article {
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
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
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
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      categories?: {
        id?: number;
        documentId?: string;
      }[];
      dynamic_zone?: AbstractNull &
        (
          | AbstractNullComponentMapping<
              "dynamic-zone.related-products",
              DynamicZoneRelatedProductsComponent
            >
          | AbstractNullComponentMapping<
              "dynamic-zone.cta",
              DynamicZoneCtaComponent
            >
        );
      featured?: boolean;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    articles?: {
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
      }[];
      dynamic_zone?: DiscriminatorNull &
        (
          | DiscriminatorNullComponentMapping<
              "dynamic-zone.related-articles",
              DynamicZoneRelatedArticlesComponent
            >
          | DiscriminatorNullComponentMapping<
              "dynamic-zone.cta",
              DynamicZoneCtaComponent
            >
        );
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
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  dynamic_zone?: InternalNull &
    (
      | InternalNullComponentMapping<
          "dynamic-zone.related-articles",
          DynamicZoneRelatedArticlesComponent
        >
      | InternalNullComponentMapping<
          "dynamic-zone.cta",
          DynamicZoneCtaComponent
        >
    );
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
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface ArticleResponse {
  data?: Article;
  meta?: object;
}

export interface SharedSeoComponent {
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
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface DynamicZoneRelatedArticlesComponent {
  id?: number;
  __component?: "dynamic-zone.related-articles";
  heading?: string;
  sub_heading?: string;
  articles?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface SharedButtonComponent {
  id?: number;
  text?: string;
  URL?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  variant?: "simple" | "outline" | "primary" | "muted";
}

export interface DynamicZoneCtaComponent {
  id?: number;
  __component?: "dynamic-zone.cta";
  heading?: string;
  sub_heading?: string;
  CTAs?: SharedButtonComponent[];
}

export interface SharedPerksComponent {
  id?: number;
  text?: string;
}

export interface DynamicZoneRelatedProductsComponent {
  id?: number;
  __component?: "dynamic-zone.related-products";
  heading?: string;
  sub_heading?: string;
  products?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface BlogPageRequest {
  data: {
    seo?: SharedSeoComponent;
    heading?: string;
    sub_heading?: string;
    dynamic_zone?: PolymorphNull &
      (
        | PolymorphNullComponentMapping<
            "dynamic-zone.testimonials",
            DynamicZoneTestimonialsComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.related-products",
            DynamicZoneRelatedProductsComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.related-articles",
            DynamicZoneRelatedArticlesComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.pricing",
            DynamicZonePricingComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.launches",
            DynamicZoneLaunchesComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.how-it-works",
            DynamicZoneHowItWorksComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.hero",
            DynamicZoneHeroComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.form-next-to-section",
            DynamicZoneFormNextToSectionComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.features",
            DynamicZoneFeaturesComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.faq",
            DynamicZoneFaqComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.cta",
            DynamicZoneCtaComponent
          >
        | PolymorphNullComponentMapping<
            "dynamic-zone.brands",
            DynamicZoneBrandsComponent
          >
      );
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface BlogPageListResponse {
  data?: BlogPage[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface BlogPage {
  id?: number;
  documentId?: string;
  seo?: SharedSeoComponent;
  heading?: string;
  sub_heading?: string;
  dynamic_zone?: InternalNull1 &
    (
      | InternalNull1ComponentMapping<
          "dynamic-zone.testimonials",
          DynamicZoneTestimonialsComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.related-products",
          DynamicZoneRelatedProductsComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.related-articles",
          DynamicZoneRelatedArticlesComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.pricing",
          DynamicZonePricingComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.launches",
          DynamicZoneLaunchesComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.how-it-works",
          DynamicZoneHowItWorksComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.hero",
          DynamicZoneHeroComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.form-next-to-section",
          DynamicZoneFormNextToSectionComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.features",
          DynamicZoneFeaturesComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.faq",
          DynamicZoneFaqComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.cta",
          DynamicZoneCtaComponent
        >
      | InternalNull1ComponentMapping<
          "dynamic-zone.brands",
          DynamicZoneBrandsComponent
        >
    );
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    heading?: string;
    sub_heading?: string;
    dynamic_zone?: BaseNull1 &
      (
        | BaseNull1ComponentMapping<
            "dynamic-zone.testimonials",
            DynamicZoneTestimonialsComponent
          >
        | BaseNull1ComponentMapping<
            "dynamic-zone.related-products",
            DynamicZoneRelatedProductsComponent
          >
        | BaseNull1ComponentMapping<
            "dynamic-zone.related-articles",
            DynamicZoneRelatedArticlesComponent
          >
        | BaseNull1ComponentMapping<
            "dynamic-zone.pricing",
            DynamicZonePricingComponent
          >
        | BaseNull1ComponentMapping<
            "dynamic-zone.launches",
            DynamicZoneLaunchesComponent
          >
        | BaseNull1ComponentMapping<
            "dynamic-zone.how-it-works",
            DynamicZoneHowItWorksComponent
          >
        | BaseNull1ComponentMapping<
            "dynamic-zone.hero",
            DynamicZoneHeroComponent
          >
        | BaseNull1ComponentMapping<
            "dynamic-zone.form-next-to-section",
            DynamicZoneFormNextToSectionComponent
          >
        | BaseNull1ComponentMapping<
            "dynamic-zone.features",
            DynamicZoneFeaturesComponent
          >
        | BaseNull1ComponentMapping<"dynamic-zone.faq", DynamicZoneFaqComponent>
        | BaseNull1ComponentMapping<"dynamic-zone.cta", DynamicZoneCtaComponent>
        | BaseNull1ComponentMapping<
            "dynamic-zone.brands",
            DynamicZoneBrandsComponent
          >
      );
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface BlogPageResponse {
  data?: BlogPage;
  meta?: object;
}

export interface DynamicZoneTestimonialsComponent {
  id?: number;
  __component?: "dynamic-zone.testimonials";
  heading?: string;
  sub_heading?: string;
  testimonials?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface DynamicZonePricingComponent {
  id?: number;
  __component?: "dynamic-zone.pricing";
  heading?: string;
  sub_heading?: string;
  plans?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface SharedLaunchesComponent {
  id?: number;
  mission_number?: string;
  title?: string;
  description?: string;
}

export interface DynamicZoneLaunchesComponent {
  id?: number;
  __component?: "dynamic-zone.launches";
  heading?: string;
  sub_heading?: string;
  launches?: SharedLaunchesComponent[];
}

export interface SharedStepsComponent {
  id?: number;
  title?: string;
  description?: string;
}

export interface DynamicZoneHowItWorksComponent {
  id?: number;
  __component?: "dynamic-zone.how-it-works";
  heading?: string;
  sub_heading?: string;
  steps?: SharedStepsComponent[];
}

export interface DynamicZoneHeroComponent {
  id?: number;
  __component?: "dynamic-zone.hero";
  heading?: string;
  sub_heading?: string;
  CTAs?: SharedButtonComponent[];
}

export interface ItemsInputComponent {
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
}

export interface SharedFormComponent {
  id?: number;
  inputs?: ItemsInputComponent[];
}

export interface SharedUserComponent {
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
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
}

export interface SharedSectionComponent {
  id?: number;
  heading?: string;
  sub_heading?: string;
  users?: SharedUserComponent[];
}

export interface SharedLinkComponent {
  id?: number;
  text?: string;
  URL?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface SharedSocialMediaIconLinksComponent {
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
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  link?: SharedLinkComponent[];
}

export interface DynamicZoneFormNextToSectionComponent {
  id?: number;
  __component?: "dynamic-zone.form-next-to-section";
  heading?: string;
  sub_heading?: string;
  form?: SharedFormComponent;
  section?: SharedSectionComponent;
  social_media_icon_links?: SharedSocialMediaIconLinksComponent[];
}

export interface CardsGlobeCardComponent {
  id?: number;
  title?: string;
  description?: string;
  span?: "one" | "two" | "three";
}

export interface ItemsRayItemsComponent {
  id?: number;
  item_1?: string;
  item_2?: string;
  item_3?: string;
}

export interface CardsRayCardComponent {
  id?: number;
  title?: string;
  description?: string;
  before_ray_items?: ItemsRayItemsComponent;
  after_ray_items?: ItemsRayItemsComponent;
  span?: "one" | "two" | "three";
}

export interface ItemsGraphCardTopItemsComponent {
  id?: number;
  number?: string;
  text?: string;
}

export interface CardsGraphCardComponent {
  id?: number;
  title?: string;
  description?: string;
  top_items?: ItemsGraphCardTopItemsComponent[];
  highlighted_text?: string;
  span?: "one" | "two" | "three";
}

export interface CardsSocialMediaCardComponent {
  id?: number;
  Title?: string;
  Description?: string;
  logos?: {
    id?: number;
    documentId?: string;
  }[];
  span?: "one" | "two" | "three";
}

export interface DynamicZoneFeaturesComponent {
  id?: number;
  __component?: "dynamic-zone.features";
  heading?: string;
  sub_heading?: string;
  globe_card?: CardsGlobeCardComponent;
  ray_card?: CardsRayCardComponent;
  graph_card?: CardsGraphCardComponent;
  social_media_card?: CardsSocialMediaCardComponent;
}

export interface DynamicZoneFaqComponent {
  id?: number;
  __component?: "dynamic-zone.faq";
  heading?: string;
  sub_heading?: string;
  faqs?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface DynamicZoneBrandsComponent {
  id?: number;
  __component?: "dynamic-zone.brands";
  heading?: string;
  sub_heading?: string;
  logos?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface CategoryRequest {
  data: {
    name?: string;
    /** @example "string or id" */
    product?: number | string;
    articles?: (number | string)[];
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface CategoryListResponse {
  data?: Category[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Category {
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
      /** @format float */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        id?: number;
        documentId?: string;
      }[];
      folder?: {
        id?: number;
        documentId?: string;
        name?: string;
        pathId?: number;
        parent?: {
          id?: number;
          documentId?: string;
        };
        children?: {
          id?: number;
          documentId?: string;
        }[];
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
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            id?: number;
            documentId?: string;
          }[];
          folder?: {
            id?: number;
            documentId?: string;
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            /** @format email */
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
              users?: {
                id?: number;
                documentId?: string;
              }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: {
                  id?: number;
                  documentId?: string;
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              }[];
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        path?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      folderPath?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
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
      };
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    categories?: {
      id?: number;
      documentId?: string;
      name?: string;
      product?: {
        id?: number;
        documentId?: string;
      };
      articles?: {
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
        }[];
        dynamic_zone?: DiscriminatorNull1 &
          (
            | DiscriminatorNull1ComponentMapping<
                "dynamic-zone.related-articles",
                DynamicZoneRelatedArticlesComponent
              >
            | DiscriminatorNull1ComponentMapping<
                "dynamic-zone.cta",
                DynamicZoneCtaComponent
              >
          );
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
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            id?: number;
            documentId?: string;
          }[];
          folder?: {
            id?: number;
            documentId?: string;
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    dynamic_zone?: InternalNull2 &
      (
        | InternalNull2ComponentMapping<
            "dynamic-zone.related-products",
            DynamicZoneRelatedProductsComponent
          >
        | InternalNull2ComponentMapping<
            "dynamic-zone.cta",
            DynamicZoneCtaComponent
          >
      );
    featured?: boolean;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  articles?: {
    id?: number;
    documentId?: string;
  }[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface CategoryResponse {
  data?: Category;
  meta?: object;
}

export interface ClientStageRequest {
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
}

export interface ClientStageListResponse {
  data?: ClientStage[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ClientStage {
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
    /** @format email */
    email?: string;
    phone?: string;
    source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
    agent?: {
      id?: number;
      documentId?: string;
      username?: string;
      /** @format email */
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
          role?: {
            id?: number;
            documentId?: string;
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            /** @format email */
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
              users?: {
                id?: number;
                documentId?: string;
              }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: {
                  id?: number;
                  documentId?: string;
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              }[];
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        users?: {
          id?: number;
          documentId?: string;
        }[];
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
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
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    deals?: {
      id?: number;
      documentId?: string;
      title?: string;
      status?: {
        id?: number;
        documentId?: string;
      };
      /** @format float */
      dealValue?: number;
      /** @format date-time */
      dealDate?: string;
      customer?: {
        id?: number;
        documentId?: string;
      };
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
        /** @format float */
        price?: number;
        /** @format float */
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
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            id?: number;
            documentId?: string;
          }[];
          folder?: {
            id?: number;
            documentId?: string;
            name?: string;
            pathId?: number;
            parent?: {
              id?: number;
              documentId?: string;
            };
            children?: {
              id?: number;
              documentId?: string;
            }[];
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
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                id?: number;
                documentId?: string;
              }[];
              folder?: {
                id?: number;
                documentId?: string;
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            path?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        listedBy?: {
          id?: number;
          documentId?: string;
        };
        deals?: {
          id?: number;
          documentId?: string;
        }[];
        notes?: {
          id?: number;
          documentId?: string;
          title?: string;
          content?: string;
          createdByUser?: {
            id?: number;
            documentId?: string;
          };
          customer?: {
            id?: number;
            documentId?: string;
          };
          deal?: {
            id?: number;
            documentId?: string;
          };
          property?: {
            id?: number;
            documentId?: string;
          };
          task?: {
            id?: number;
            documentId?: string;
            title?: string;
            description?: string;
            /** @format date-time */
            dueDate?: string;
            assignedTo?: {
              id?: number;
              documentId?: string;
            };
            status?: "pending" | "in_progress" | "completed";
            relatedDeal?: {
              id?: number;
              documentId?: string;
            };
            notes?: {
              id?: number;
              documentId?: string;
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      agent?: {
        id?: number;
        documentId?: string;
      };
      notes?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    notes?: {
      id?: number;
      documentId?: string;
    }[];
    /** @format date-time */
    lastContacted?: string;
    /** @format date-time */
    nextFollowUp?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface ClientStageResponse {
  data?: ClientStage;
  meta?: object;
}

export interface CustomerRequest {
  data: {
    fullName: string;
    /** @format email */
    email?: string;
    phone?: string;
    source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
    /** @example "string or id" */
    agent?: number | string;
    /** @example "string or id" */
    stage?: number | string;
    deals?: (number | string)[];
    notes?: (number | string)[];
    /** @format date-time */
    lastContacted?: string;
    /** @format date-time */
    nextFollowUp?: string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface CustomerListResponse {
  data?: Customer[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Customer {
  id?: number;
  documentId?: string;
  fullName: string;
  /** @format email */
  email?: string;
  phone?: string;
  source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
  agent?: {
    id?: number;
    documentId?: string;
    username?: string;
    /** @format email */
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
        role?: {
          id?: number;
          documentId?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
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
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      users?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
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
      /** @format email */
      email?: string;
      phone?: string;
      source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
      agent?: {
        id?: number;
        documentId?: string;
      };
      stage?: {
        id?: number;
        documentId?: string;
      };
      deals?: {
        id?: number;
        documentId?: string;
        title?: string;
        status?: {
          id?: number;
          documentId?: string;
        };
        /** @format float */
        dealValue?: number;
        /** @format date-time */
        dealDate?: string;
        customer?: {
          id?: number;
          documentId?: string;
        };
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
          /** @format float */
          price?: number;
          /** @format float */
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
            /** @format float */
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              id?: number;
              documentId?: string;
            }[];
            folder?: {
              id?: number;
              documentId?: string;
              name?: string;
              pathId?: number;
              parent?: {
                id?: number;
                documentId?: string;
              };
              children?: {
                id?: number;
                documentId?: string;
              }[];
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
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  id?: number;
                  documentId?: string;
                }[];
                folder?: {
                  id?: number;
                  documentId?: string;
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              }[];
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            };
            folderPath?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          listedBy?: {
            id?: number;
            documentId?: string;
          };
          deals?: {
            id?: number;
            documentId?: string;
          }[];
          notes?: {
            id?: number;
            documentId?: string;
            title?: string;
            content?: string;
            createdByUser?: {
              id?: number;
              documentId?: string;
            };
            customer?: {
              id?: number;
              documentId?: string;
            };
            deal?: {
              id?: number;
              documentId?: string;
            };
            property?: {
              id?: number;
              documentId?: string;
            };
            task?: {
              id?: number;
              documentId?: string;
              title?: string;
              description?: string;
              /** @format date-time */
              dueDate?: string;
              assignedTo?: {
                id?: number;
                documentId?: string;
              };
              status?: "pending" | "in_progress" | "completed";
              relatedDeal?: {
                id?: number;
                documentId?: string;
              };
              notes?: {
                id?: number;
                documentId?: string;
              }[];
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            };
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        agent?: {
          id?: number;
          documentId?: string;
        };
        notes?: {
          id?: number;
          documentId?: string;
        }[];
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      notes?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      lastContacted?: string;
      /** @format date-time */
      nextFollowUp?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  deals?: {
    id?: number;
    documentId?: string;
  }[];
  notes?: {
    id?: number;
    documentId?: string;
  }[];
  /** @format date-time */
  lastContacted?: string;
  /** @format date-time */
  nextFollowUp?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface CustomerResponse {
  data?: Customer;
  meta?: object;
}

export interface DealRequest {
  data: {
    title: string;
    /** @example "string or id" */
    status?: number | string;
    /** @format float */
    dealValue?: number;
    /** @format date-time */
    dealDate?: string;
    /** @example "string or id" */
    customer?: number | string;
    /** @example "string or id" */
    property?: number | string;
    /** @example "string or id" */
    agent?: number | string;
    notes?: (number | string)[];
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface DealListResponse {
  data?: Deal[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Deal {
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
      /** @format email */
      email?: string;
      phone?: string;
      source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
      agent?: {
        id?: number;
        documentId?: string;
        username?: string;
        /** @format email */
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
            role?: {
              id?: number;
              documentId?: string;
            };
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
              firstname?: string;
              lastname?: string;
              username?: string;
              /** @format email */
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
                users?: {
                  id?: number;
                  documentId?: string;
                }[];
                permissions?: {
                  id?: number;
                  documentId?: string;
                  action?: string;
                  actionParameters?: any;
                  subject?: string;
                  properties?: any;
                  conditions?: any;
                  role?: {
                    id?: number;
                    documentId?: string;
                  };
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  /** @format date-time */
                  publishedAt?: string;
                  createdBy?: {
                    id?: number;
                    documentId?: string;
                  };
                  updatedBy?: {
                    id?: number;
                    documentId?: string;
                  };
                  locale?: string;
                  localizations?: {
                    id?: number;
                    documentId?: string;
                  }[];
                }[];
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              }[];
              blocked?: boolean;
              preferedLanguage?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          users?: {
            id?: number;
            documentId?: string;
          }[];
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      stage?: {
        id?: number;
        documentId?: string;
      };
      deals?: {
        id?: number;
        documentId?: string;
        title?: string;
        status?: {
          id?: number;
          documentId?: string;
        };
        /** @format float */
        dealValue?: number;
        /** @format date-time */
        dealDate?: string;
        customer?: {
          id?: number;
          documentId?: string;
        };
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
          /** @format float */
          price?: number;
          /** @format float */
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
            /** @format float */
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              id?: number;
              documentId?: string;
            }[];
            folder?: {
              id?: number;
              documentId?: string;
              name?: string;
              pathId?: number;
              parent?: {
                id?: number;
                documentId?: string;
              };
              children?: {
                id?: number;
                documentId?: string;
              }[];
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
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  id?: number;
                  documentId?: string;
                }[];
                folder?: {
                  id?: number;
                  documentId?: string;
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              }[];
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            };
            folderPath?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          listedBy?: {
            id?: number;
            documentId?: string;
          };
          deals?: {
            id?: number;
            documentId?: string;
          }[];
          notes?: {
            id?: number;
            documentId?: string;
            title?: string;
            content?: string;
            createdByUser?: {
              id?: number;
              documentId?: string;
            };
            customer?: {
              id?: number;
              documentId?: string;
            };
            deal?: {
              id?: number;
              documentId?: string;
            };
            property?: {
              id?: number;
              documentId?: string;
            };
            task?: {
              id?: number;
              documentId?: string;
              title?: string;
              description?: string;
              /** @format date-time */
              dueDate?: string;
              assignedTo?: {
                id?: number;
                documentId?: string;
              };
              status?: "pending" | "in_progress" | "completed";
              relatedDeal?: {
                id?: number;
                documentId?: string;
              };
              notes?: {
                id?: number;
                documentId?: string;
              }[];
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            };
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        agent?: {
          id?: number;
          documentId?: string;
        };
        notes?: {
          id?: number;
          documentId?: string;
        }[];
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      notes?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      lastContacted?: string;
      /** @format date-time */
      nextFollowUp?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  /** @format float */
  dealValue?: number;
  /** @format date-time */
  dealDate?: string;
  customer?: {
    id?: number;
    documentId?: string;
  };
  property?: {
    id?: number;
    documentId?: string;
  };
  agent?: {
    id?: number;
    documentId?: string;
  };
  notes?: {
    id?: number;
    documentId?: string;
  }[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface DealResponse {
  data?: Deal;
  meta?: object;
}

export interface FaqRequest {
  data: {
    question?: string;
    answer?: string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface FaqListResponse {
  data?: Faq[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Faq {
  id?: number;
  documentId?: string;
  question?: string;
  answer?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    /** @format email */
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
      users?: {
        id?: number;
        documentId?: string;
      }[];
      permissions?: {
        id?: number;
        documentId?: string;
        action?: string;
        actionParameters?: any;
        subject?: string;
        properties?: any;
        conditions?: any;
        role?: {
          id?: number;
          documentId?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    blocked?: boolean;
    preferedLanguage?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    question?: string;
    answer?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface FaqResponse {
  data?: Faq;
  meta?: object;
}

export interface GlobalRequest {
  data: {
    seo?: SharedSeoComponent;
    navbar?: GlobalNavbarComponent;
    footer?: GlobalFooterComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface GlobalListResponse {
  data?: Global[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Global {
  id?: number;
  documentId?: string;
  seo?: SharedSeoComponent;
  navbar?: GlobalNavbarComponent;
  footer?: GlobalFooterComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    navbar?: GlobalNavbarComponent;
    footer?: GlobalFooterComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface GlobalResponse {
  data?: Global;
  meta?: object;
}

export interface GlobalNavbarComponent {
  id?: number;
  logo?: {
    id?: number;
    documentId?: string;
  };
  left_navbar_items?: SharedLinkComponent[];
  right_navbar_items?: SharedLinkComponent[];
}

export interface GlobalFooterComponent {
  id?: number;
  logo?: {
    id?: number;
    documentId?: string;
  };
  description?: string;
  copyright?: string;
  designed_developed_by?: string;
  built_with?: string;
  internal_links?: SharedLinkComponent[];
  policy_links?: SharedLinkComponent[];
  social_media_links?: SharedLinkComponent[];
}

export interface LogoRequest {
  data: {
    /** @example "string or id" */
    image: number | string;
    company?: string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface LogoListResponse {
  data?: Logo[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Logo {
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
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: number;
        documentId?: string;
      };
      children?: {
        id?: number;
        documentId?: string;
      }[];
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
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
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
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      path?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  company?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
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
      /** @format float */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        id?: number;
        documentId?: string;
      }[];
      folder?: {
        id?: number;
        documentId?: string;
      };
      folderPath?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    company?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface LogoResponse {
  data?: Logo;
  meta?: object;
}

export interface NoteRequest {
  data: {
    title?: string;
    content: string;
    /** @example "string or id" */
    createdByUser?: number | string;
    /** @example "string or id" */
    customer?: number | string;
    /** @example "string or id" */
    deal?: number | string;
    /** @example "string or id" */
    property?: number | string;
    /** @example "string or id" */
    task?: number | string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface NoteListResponse {
  data?: Note[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Note {
  id?: number;
  documentId?: string;
  title?: string;
  content: string;
  createdByUser?: {
    id?: number;
    documentId?: string;
    username?: string;
    /** @format email */
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
        role?: {
          id?: number;
          documentId?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
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
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      users?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  customer?: {
    id?: number;
    documentId?: string;
    fullName?: string;
    /** @format email */
    email?: string;
    phone?: string;
    source?: "website" | "facebook" | "zalo" | "referral" | "event" | "other";
    agent?: {
      id?: number;
      documentId?: string;
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
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    deals?: {
      id?: number;
      documentId?: string;
      title?: string;
      status?: {
        id?: number;
        documentId?: string;
      };
      /** @format float */
      dealValue?: number;
      /** @format date-time */
      dealDate?: string;
      customer?: {
        id?: number;
        documentId?: string;
      };
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
        /** @format float */
        price?: number;
        /** @format float */
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
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            id?: number;
            documentId?: string;
          }[];
          folder?: {
            id?: number;
            documentId?: string;
            name?: string;
            pathId?: number;
            parent?: {
              id?: number;
              documentId?: string;
            };
            children?: {
              id?: number;
              documentId?: string;
            }[];
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
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                id?: number;
                documentId?: string;
              }[];
              folder?: {
                id?: number;
                documentId?: string;
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            path?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        listedBy?: {
          id?: number;
          documentId?: string;
        };
        deals?: {
          id?: number;
          documentId?: string;
        }[];
        notes?: {
          id?: number;
          documentId?: string;
          title?: string;
          content?: string;
          createdByUser?: {
            id?: number;
            documentId?: string;
          };
          customer?: {
            id?: number;
            documentId?: string;
          };
          deal?: {
            id?: number;
            documentId?: string;
          };
          property?: {
            id?: number;
            documentId?: string;
          };
          task?: {
            id?: number;
            documentId?: string;
            title?: string;
            description?: string;
            /** @format date-time */
            dueDate?: string;
            assignedTo?: {
              id?: number;
              documentId?: string;
            };
            status?: "pending" | "in_progress" | "completed";
            relatedDeal?: {
              id?: number;
              documentId?: string;
            };
            notes?: {
              id?: number;
              documentId?: string;
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      agent?: {
        id?: number;
        documentId?: string;
      };
      notes?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    notes?: {
      id?: number;
      documentId?: string;
    }[];
    /** @format date-time */
    lastContacted?: string;
    /** @format date-time */
    nextFollowUp?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  deal?: {
    id?: number;
    documentId?: string;
  };
  property?: {
    id?: number;
    documentId?: string;
  };
  task?: {
    id?: number;
    documentId?: string;
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface NoteResponse {
  data?: Note;
  meta?: object;
}

export interface PageRequest {
  data: {
    seo?: SharedSeoComponent;
    slug: string;
    dynamic_zone?: AbstractNull1 &
      (
        | AbstractNull1ComponentMapping<
            "dynamic-zone.hero",
            DynamicZoneHeroComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.features",
            DynamicZoneFeaturesComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.testimonials",
            DynamicZoneTestimonialsComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.how-it-works",
            DynamicZoneHowItWorksComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.brands",
            DynamicZoneBrandsComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.pricing",
            DynamicZonePricingComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.launches",
            DynamicZoneLaunchesComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.cta",
            DynamicZoneCtaComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.form-next-to-section",
            DynamicZoneFormNextToSectionComponent
          >
        | AbstractNull1ComponentMapping<
            "dynamic-zone.faq",
            DynamicZoneFaqComponent
          >
      );
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface PageListResponse {
  data?: Page[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Page {
  id?: number;
  documentId?: string;
  seo?: SharedSeoComponent;
  slug: string;
  dynamic_zone?: AbstractNull2 &
    (
      | AbstractNull2ComponentMapping<
          "dynamic-zone.hero",
          DynamicZoneHeroComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.features",
          DynamicZoneFeaturesComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.testimonials",
          DynamicZoneTestimonialsComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.how-it-works",
          DynamicZoneHowItWorksComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.brands",
          DynamicZoneBrandsComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.pricing",
          DynamicZonePricingComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.launches",
          DynamicZoneLaunchesComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.cta",
          DynamicZoneCtaComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.form-next-to-section",
          DynamicZoneFormNextToSectionComponent
        >
      | AbstractNull2ComponentMapping<
          "dynamic-zone.faq",
          DynamicZoneFaqComponent
        >
    );
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    slug?: string;
    dynamic_zone?: InternalNull3 &
      (
        | InternalNull3ComponentMapping<
            "dynamic-zone.hero",
            DynamicZoneHeroComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.features",
            DynamicZoneFeaturesComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.testimonials",
            DynamicZoneTestimonialsComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.how-it-works",
            DynamicZoneHowItWorksComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.brands",
            DynamicZoneBrandsComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.pricing",
            DynamicZonePricingComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.launches",
            DynamicZoneLaunchesComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.cta",
            DynamicZoneCtaComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.form-next-to-section",
            DynamicZoneFormNextToSectionComponent
          >
        | InternalNull3ComponentMapping<
            "dynamic-zone.faq",
            DynamicZoneFaqComponent
          >
      );
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface PageResponse {
  data?: Page;
  meta?: object;
}

export interface PlanRequest {
  data: {
    name?: string;
    price?: number;
    sub_text?: string;
    featured?: boolean;
    CTA?: SharedButtonComponent;
    perks?: SharedPerksComponent[];
    additional_perks?: SharedPerksComponent[];
    /** @example "string or id" */
    product?: number | string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface PlanListResponse {
  data?: Plan[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Plan {
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
      /** @format float */
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        id?: number;
        documentId?: string;
      }[];
      folder?: {
        id?: number;
        documentId?: string;
        name?: string;
        pathId?: number;
        parent?: {
          id?: number;
          documentId?: string;
        };
        children?: {
          id?: number;
          documentId?: string;
        }[];
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
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            id?: number;
            documentId?: string;
          }[];
          folder?: {
            id?: number;
            documentId?: string;
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
            firstname?: string;
            lastname?: string;
            username?: string;
            /** @format email */
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
              users?: {
                id?: number;
                documentId?: string;
              }[];
              permissions?: {
                id?: number;
                documentId?: string;
                action?: string;
                actionParameters?: any;
                subject?: string;
                properties?: any;
                conditions?: any;
                role?: {
                  id?: number;
                  documentId?: string;
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              }[];
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            blocked?: boolean;
            preferedLanguage?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        path?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      };
      folderPath?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
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
      };
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    categories?: {
      id?: number;
      documentId?: string;
      name?: string;
      product?: {
        id?: number;
        documentId?: string;
      };
      articles?: {
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
        }[];
        dynamic_zone?: AbstractNull3 &
          (
            | AbstractNull3ComponentMapping<
                "dynamic-zone.related-articles",
                DynamicZoneRelatedArticlesComponent
              >
            | AbstractNull3ComponentMapping<
                "dynamic-zone.cta",
                DynamicZoneCtaComponent
              >
          );
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
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            id?: number;
            documentId?: string;
          }[];
          folder?: {
            id?: number;
            documentId?: string;
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    dynamic_zone?: AbstractNull4 &
      (
        | AbstractNull4ComponentMapping<
            "dynamic-zone.related-products",
            DynamicZoneRelatedProductsComponent
          >
        | AbstractNull4ComponentMapping<
            "dynamic-zone.cta",
            DynamicZoneCtaComponent
          >
      );
    featured?: boolean;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface PlanResponse {
  data?: Plan;
  meta?: object;
}

export interface ProductRequest {
  data: {
    name?: string;
    price?: number;
    description?: string;
    slug?: string;
    images?: (number | string)[];
    perks?: SharedPerksComponent[];
    plans?: (number | string)[];
    categories?: (number | string)[];
    dynamic_zone?: InternalNull4 &
      (
        | InternalNull4ComponentMapping<
            "dynamic-zone.related-products",
            DynamicZoneRelatedProductsComponent
          >
        | InternalNull4ComponentMapping<
            "dynamic-zone.cta",
            DynamicZoneCtaComponent
          >
      );
    featured?: boolean;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface ProductListResponse {
  data?: Product[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Product {
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
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: number;
        documentId?: string;
      };
      children?: {
        id?: number;
        documentId?: string;
      }[];
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
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
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
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      path?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
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
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      perks?: SharedPerksComponent[];
      plans?: {
        id?: number;
        documentId?: string;
      }[];
      categories?: {
        id?: number;
        documentId?: string;
        name?: string;
        product?: {
          id?: number;
          documentId?: string;
        };
        articles?: {
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
          }[];
          dynamic_zone?: DiscriminatorNull2 &
            (
              | DiscriminatorNull2ComponentMapping<
                  "dynamic-zone.related-articles",
                  DynamicZoneRelatedArticlesComponent
                >
              | DiscriminatorNull2ComponentMapping<
                  "dynamic-zone.cta",
                  DynamicZoneCtaComponent
                >
            );
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
            /** @format float */
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              id?: number;
              documentId?: string;
            }[];
            folder?: {
              id?: number;
              documentId?: string;
            };
            folderPath?: string;
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      dynamic_zone?: DiscriminatorNull3 &
        (
          | DiscriminatorNull3ComponentMapping<
              "dynamic-zone.related-products",
              DynamicZoneRelatedProductsComponent
            >
          | DiscriminatorNull3ComponentMapping<
              "dynamic-zone.cta",
              DynamicZoneCtaComponent
            >
        );
      featured?: boolean;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  categories?: {
    id?: number;
    documentId?: string;
  }[];
  dynamic_zone?: BaseNull2 &
    (
      | BaseNull2ComponentMapping<
          "dynamic-zone.related-products",
          DynamicZoneRelatedProductsComponent
        >
      | BaseNull2ComponentMapping<"dynamic-zone.cta", DynamicZoneCtaComponent>
    );
  featured?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface ProductResponse {
  data?: Product;
  meta?: object;
}

export interface ProductPageRequest {
  data: {
    seo?: SharedSeoComponent;
    heading?: string;
    sub_heading?: string;
    dynamic_zone?: InternalNull5 &
      (
        | InternalNull5ComponentMapping<
            "dynamic-zone.testimonials",
            DynamicZoneTestimonialsComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.related-products",
            DynamicZoneRelatedProductsComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.related-articles",
            DynamicZoneRelatedArticlesComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.pricing",
            DynamicZonePricingComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.launches",
            DynamicZoneLaunchesComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.how-it-works",
            DynamicZoneHowItWorksComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.hero",
            DynamicZoneHeroComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.form-next-to-section",
            DynamicZoneFormNextToSectionComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.features",
            DynamicZoneFeaturesComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.faq",
            DynamicZoneFaqComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.cta",
            DynamicZoneCtaComponent
          >
        | InternalNull5ComponentMapping<
            "dynamic-zone.brands",
            DynamicZoneBrandsComponent
          >
      );
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface ProductPageListResponse {
  data?: ProductPage[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ProductPage {
  id?: number;
  documentId?: string;
  seo?: SharedSeoComponent;
  heading?: string;
  sub_heading?: string;
  dynamic_zone?: DiscriminatorNull4 &
    (
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.testimonials",
          DynamicZoneTestimonialsComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.related-products",
          DynamicZoneRelatedProductsComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.related-articles",
          DynamicZoneRelatedArticlesComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.pricing",
          DynamicZonePricingComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.launches",
          DynamicZoneLaunchesComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.how-it-works",
          DynamicZoneHowItWorksComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.hero",
          DynamicZoneHeroComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.form-next-to-section",
          DynamicZoneFormNextToSectionComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.features",
          DynamicZoneFeaturesComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.faq",
          DynamicZoneFaqComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.cta",
          DynamicZoneCtaComponent
        >
      | DiscriminatorNull4ComponentMapping<
          "dynamic-zone.brands",
          DynamicZoneBrandsComponent
        >
    );
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    seo?: SharedSeoComponent;
    heading?: string;
    sub_heading?: string;
    dynamic_zone?: DiscriminatorNull5 &
      (
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.testimonials",
            DynamicZoneTestimonialsComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.related-products",
            DynamicZoneRelatedProductsComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.related-articles",
            DynamicZoneRelatedArticlesComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.pricing",
            DynamicZonePricingComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.launches",
            DynamicZoneLaunchesComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.how-it-works",
            DynamicZoneHowItWorksComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.hero",
            DynamicZoneHeroComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.form-next-to-section",
            DynamicZoneFormNextToSectionComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.features",
            DynamicZoneFeaturesComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.faq",
            DynamicZoneFaqComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.cta",
            DynamicZoneCtaComponent
          >
        | DiscriminatorNull5ComponentMapping<
            "dynamic-zone.brands",
            DynamicZoneBrandsComponent
          >
      );
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface ProductPageResponse {
  data?: ProductPage;
  meta?: object;
}

export interface PropertyRequest {
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
    /** @format float */
    price?: number;
    /** @format float */
    area?: number;
    bedrooms?: number;
    bathrooms?: number;
    status?: "available" | "sold" | "pending" | "off-market";
    description?: string;
    images?: (number | string)[];
    /** @example "string or id" */
    listedBy?: number | string;
    deals?: (number | string)[];
    notes?: (number | string)[];
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface PropertyListResponse {
  data?: Property[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Property {
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
  /** @format float */
  price?: number;
  /** @format float */
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
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      id?: number;
      documentId?: string;
    }[];
    folder?: {
      id?: number;
      documentId?: string;
      name?: string;
      pathId?: number;
      parent?: {
        id?: number;
        documentId?: string;
      };
      children?: {
        id?: number;
        documentId?: string;
      }[];
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
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          id?: number;
          documentId?: string;
        }[];
        folder?: {
          id?: number;
          documentId?: string;
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
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
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      path?: string;
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  listedBy?: {
    id?: number;
    documentId?: string;
    username?: string;
    /** @format email */
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
        role?: {
          id?: number;
          documentId?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      users?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
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
        /** @format email */
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
        };
        stage?: {
          id?: number;
          documentId?: string;
        };
        deals?: {
          id?: number;
          documentId?: string;
        }[];
        notes?: {
          id?: number;
          documentId?: string;
          title?: string;
          content?: string;
          createdByUser?: {
            id?: number;
            documentId?: string;
          };
          customer?: {
            id?: number;
            documentId?: string;
          };
          deal?: {
            id?: number;
            documentId?: string;
          };
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
            /** @format float */
            price?: number;
            /** @format float */
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
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                id?: number;
                documentId?: string;
              }[];
              folder?: {
                id?: number;
                documentId?: string;
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            listedBy?: {
              id?: number;
              documentId?: string;
            };
            deals?: {
              id?: number;
              documentId?: string;
            }[];
            notes?: {
              id?: number;
              documentId?: string;
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          task?: {
            id?: number;
            documentId?: string;
            title?: string;
            description?: string;
            /** @format date-time */
            dueDate?: string;
            assignedTo?: {
              id?: number;
              documentId?: string;
            };
            status?: "pending" | "in_progress" | "completed";
            relatedDeal?: {
              id?: number;
              documentId?: string;
            };
            notes?: {
              id?: number;
              documentId?: string;
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        /** @format date-time */
        lastContacted?: string;
        /** @format date-time */
        nextFollowUp?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    /** @format float */
    dealValue?: number;
    /** @format date-time */
    dealDate?: string;
    customer?: {
      id?: number;
      documentId?: string;
    };
    property?: {
      id?: number;
      documentId?: string;
    };
    agent?: {
      id?: number;
      documentId?: string;
    };
    notes?: {
      id?: number;
      documentId?: string;
    }[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
  notes?: {
    id?: number;
    documentId?: string;
  }[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface PropertyResponse {
  data?: Property;
  meta?: object;
}

export interface RedirectionRequest {
  data: {
    source?: string;
    destination?: string;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface RedirectionListResponse {
  data?: Redirection[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Redirection {
  id?: number;
  documentId?: string;
  source?: string;
  destination?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    /** @format email */
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
      users?: {
        id?: number;
        documentId?: string;
      }[];
      permissions?: {
        id?: number;
        documentId?: string;
        action?: string;
        actionParameters?: any;
        subject?: string;
        properties?: any;
        conditions?: any;
        role?: {
          id?: number;
          documentId?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    }[];
    blocked?: boolean;
    preferedLanguage?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    source?: string;
    destination?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface RedirectionResponse {
  data?: Redirection;
  meta?: object;
}

export interface TaskRequest {
  data: {
    title: string;
    description?: string;
    /** @format date-time */
    dueDate?: string;
    /** @example "string or id" */
    assignedTo?: number | string;
    status?: "pending" | "in_progress" | "completed";
    /** @example "string or id" */
    relatedDeal?: number | string;
    notes?: (number | string)[];
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface TaskListResponse {
  data?: Task[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Task {
  id?: number;
  documentId?: string;
  title: string;
  description?: string;
  /** @format date-time */
  dueDate?: string;
  assignedTo?: {
    id?: number;
    documentId?: string;
    username?: string;
    /** @format email */
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
        role?: {
          id?: number;
          documentId?: string;
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
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
            users?: {
              id?: number;
              documentId?: string;
            }[];
            permissions?: {
              id?: number;
              documentId?: string;
              action?: string;
              actionParameters?: any;
              subject?: string;
              properties?: any;
              conditions?: any;
              role?: {
                id?: number;
                documentId?: string;
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          }[];
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      users?: {
        id?: number;
        documentId?: string;
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
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
        /** @format email */
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
        };
        stage?: {
          id?: number;
          documentId?: string;
        };
        deals?: {
          id?: number;
          documentId?: string;
        }[];
        notes?: {
          id?: number;
          documentId?: string;
          title?: string;
          content?: string;
          createdByUser?: {
            id?: number;
            documentId?: string;
          };
          customer?: {
            id?: number;
            documentId?: string;
          };
          deal?: {
            id?: number;
            documentId?: string;
          };
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
            /** @format float */
            price?: number;
            /** @format float */
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
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                id?: number;
                documentId?: string;
              }[];
              folder?: {
                id?: number;
                documentId?: string;
                name?: string;
                pathId?: number;
                parent?: {
                  id?: number;
                  documentId?: string;
                };
                children?: {
                  id?: number;
                  documentId?: string;
                }[];
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
                  /** @format float */
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    id?: number;
                    documentId?: string;
                  }[];
                  folder?: {
                    id?: number;
                    documentId?: string;
                  };
                  folderPath?: string;
                  /** @format date-time */
                  createdAt?: string;
                  /** @format date-time */
                  updatedAt?: string;
                  /** @format date-time */
                  publishedAt?: string;
                  createdBy?: {
                    id?: number;
                    documentId?: string;
                  };
                  updatedBy?: {
                    id?: number;
                    documentId?: string;
                  };
                  locale?: string;
                  localizations?: {
                    id?: number;
                    documentId?: string;
                  }[];
                }[];
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                /** @format date-time */
                publishedAt?: string;
                createdBy?: {
                  id?: number;
                  documentId?: string;
                };
                updatedBy?: {
                  id?: number;
                  documentId?: string;
                };
                locale?: string;
                localizations?: {
                  id?: number;
                  documentId?: string;
                }[];
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                id?: number;
                documentId?: string;
              };
              updatedBy?: {
                id?: number;
                documentId?: string;
              };
              locale?: string;
              localizations?: {
                id?: number;
                documentId?: string;
              }[];
            }[];
            listedBy?: {
              id?: number;
              documentId?: string;
            };
            deals?: {
              id?: number;
              documentId?: string;
            }[];
            notes?: {
              id?: number;
              documentId?: string;
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          task?: {
            id?: number;
            documentId?: string;
            title?: string;
            description?: string;
            /** @format date-time */
            dueDate?: string;
            assignedTo?: {
              id?: number;
              documentId?: string;
            };
            status?: "pending" | "in_progress" | "completed";
            relatedDeal?: {
              id?: number;
              documentId?: string;
            };
            notes?: {
              id?: number;
              documentId?: string;
            }[];
            /** @format date-time */
            createdAt?: string;
            /** @format date-time */
            updatedAt?: string;
            /** @format date-time */
            publishedAt?: string;
            createdBy?: {
              id?: number;
              documentId?: string;
            };
            updatedBy?: {
              id?: number;
              documentId?: string;
            };
            locale?: string;
            localizations?: {
              id?: number;
              documentId?: string;
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          /** @format date-time */
          publishedAt?: string;
          createdBy?: {
            id?: number;
            documentId?: string;
          };
          updatedBy?: {
            id?: number;
            documentId?: string;
          };
          locale?: string;
          localizations?: {
            id?: number;
            documentId?: string;
          }[];
        }[];
        /** @format date-time */
        lastContacted?: string;
        /** @format date-time */
        nextFollowUp?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          id?: number;
          documentId?: string;
        };
        updatedBy?: {
          id?: number;
          documentId?: string;
        };
        locale?: string;
        localizations?: {
          id?: number;
          documentId?: string;
        }[];
      }[];
      /** @format date-time */
      createdAt?: string;
      /** @format date-time */
      updatedAt?: string;
      /** @format date-time */
      publishedAt?: string;
      createdBy?: {
        id?: number;
        documentId?: string;
      };
      updatedBy?: {
        id?: number;
        documentId?: string;
      };
      locale?: string;
      localizations?: {
        id?: number;
        documentId?: string;
      }[];
    };
    /** @format float */
    dealValue?: number;
    /** @format date-time */
    dealDate?: string;
    customer?: {
      id?: number;
      documentId?: string;
    };
    property?: {
      id?: number;
      documentId?: string;
    };
    agent?: {
      id?: number;
      documentId?: string;
    };
    notes?: {
      id?: number;
      documentId?: string;
    }[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  };
  notes?: {
    id?: number;
    documentId?: string;
  }[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
  }[];
}

export interface TaskResponse {
  data?: Task;
  meta?: object;
}

export interface TestimonialRequest {
  data: {
    text?: string;
    user?: SharedUserComponent;
    locale?: string;
    localizations?: (number | string)[];
  };
}

export interface TestimonialListResponse {
  data?: Testimonial[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Testimonial {
  id?: number;
  documentId?: string;
  text?: string;
  user?: SharedUserComponent;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    id?: number;
    documentId?: string;
  };
  updatedBy?: {
    id?: number;
    documentId?: string;
  };
  locale?: string;
  localizations?: {
    id?: number;
    documentId?: string;
    text?: string;
    user?: SharedUserComponent;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      id?: number;
      documentId?: string;
    };
    updatedBy?: {
      id?: number;
      documentId?: string;
    };
    locale?: string;
    localizations?: {
      id?: number;
      documentId?: string;
    }[];
  }[];
}

export interface TestimonialResponse {
  data?: Testimonial;
  meta?: object;
}

export interface UploadFile {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  /** @format integer */
  width?: number;
  /** @format integer */
  height?: number;
  formats?: number;
  hash?: string;
  ext?: string;
  mime?: string;
  /** @format double */
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: object;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsRole {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsUser {
  /** @example 1 */
  id?: number;
  /** @example "foo.bar" */
  username?: string;
  /** @example "foo.bar@strapi.io" */
  email?: string;
  /** @example "local" */
  provider?: string;
  /** @example true */
  confirmed?: boolean;
  /** @example false */
  blocked?: boolean;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.258Z"
   */
  createdAt?: string;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.267Z"
   */
  updatedAt?: string;
}

export interface UsersPermissionsUserRegistration {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  jwt?: string;
  user?: UsersPermissionsUser;
}

export type UsersPermissionsPermissionsTree = Record<
  string,
  {
    /** every controller of the api */
    controllers?: Record<
      string,
      Record<
        string,
        {
          enabled?: boolean;
          policy?: string;
        }
      >
    >;
  }
>;

type BaseNull = (
  | DynamicZoneRelatedArticlesComponent
  | DynamicZoneCtaComponent
)[];

type BaseNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull = (
  | DynamicZoneRelatedProductsComponent
  | DynamicZoneCtaComponent
)[];

type AbstractNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull = (
  | DynamicZoneRelatedArticlesComponent
  | DynamicZoneCtaComponent
)[];

type DiscriminatorNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull = (
  | DynamicZoneRelatedArticlesComponent
  | DynamicZoneCtaComponent
)[];

type InternalNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type PolymorphNull = (
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

type PolymorphNullComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull1 = (
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

type InternalNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type BaseNull1 = (
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

type BaseNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull1 = (
  | DynamicZoneRelatedArticlesComponent
  | DynamicZoneCtaComponent
)[];

type DiscriminatorNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull2 = (
  | DynamicZoneRelatedProductsComponent
  | DynamicZoneCtaComponent
)[];

type InternalNull2ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull1 = (
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

type AbstractNull1ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull2 = (
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

type AbstractNull2ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull3 = (
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

type InternalNull3ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull3 = (
  | DynamicZoneRelatedArticlesComponent
  | DynamicZoneCtaComponent
)[];

type AbstractNull3ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type AbstractNull4 = (
  | DynamicZoneRelatedProductsComponent
  | DynamicZoneCtaComponent
)[];

type AbstractNull4ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull4 = (
  | DynamicZoneRelatedProductsComponent
  | DynamicZoneCtaComponent
)[];

type InternalNull4ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull2 = (
  | DynamicZoneRelatedArticlesComponent
  | DynamicZoneCtaComponent
)[];

type DiscriminatorNull2ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull3 = (
  | DynamicZoneRelatedProductsComponent
  | DynamicZoneCtaComponent
)[];

type DiscriminatorNull3ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type BaseNull2 = (
  | DynamicZoneRelatedProductsComponent
  | DynamicZoneCtaComponent
)[];

type BaseNull2ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type InternalNull5 = (
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

type InternalNull5ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull4 = (
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

type DiscriminatorNull4ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

type DiscriminatorNull5 = (
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

type DiscriminatorNull5ComponentMapping<Key, Type> = {
  __component: Key;
} & Type;

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://localhost:1337/api",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (https://mywebsite.io)
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  articles = {
    /**
     * No description
     *
     * @tags Article
     * @name GetArticles
     * @request GET:/articles
     * @secure
     */
    getArticles: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<ArticleListResponse, Error>({
        path: `/articles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Article
     * @name PostArticles
     * @request POST:/articles
     * @secure
     */
    postArticles: (data: ArticleRequest, params: RequestParams = {}) =>
      this.request<ArticleResponse, Error>({
        path: `/articles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Article
     * @name GetArticlesId
     * @request GET:/articles/{id}
     * @secure
     */
    getArticlesId: (id: number, params: RequestParams = {}) =>
      this.request<ArticleResponse, Error>({
        path: `/articles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Article
     * @name PutArticlesId
     * @request PUT:/articles/{id}
     * @secure
     */
    putArticlesId: (
      id: number,
      data: ArticleRequest,
      params: RequestParams = {},
    ) =>
      this.request<ArticleResponse, Error>({
        path: `/articles/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Article
     * @name DeleteArticlesId
     * @request DELETE:/articles/{id}
     * @secure
     */
    deleteArticlesId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/articles/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  blogPage = {
    /**
     * No description
     *
     * @tags Blog-page
     * @name GetBlogPage
     * @request GET:/blog-page
     * @secure
     */
    getBlogPage: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<BlogPageResponse, Error>({
        path: `/blog-page`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog-page
     * @name PutBlogPage
     * @request PUT:/blog-page
     * @secure
     */
    putBlogPage: (data: BlogPageRequest, params: RequestParams = {}) =>
      this.request<BlogPageResponse, Error>({
        path: `/blog-page`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog-page
     * @name DeleteBlogPage
     * @request DELETE:/blog-page
     * @secure
     */
    deleteBlogPage: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/blog-page`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  categories = {
    /**
     * No description
     *
     * @tags Category
     * @name GetCategories
     * @request GET:/categories
     * @secure
     */
    getCategories: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryListResponse, Error>({
        path: `/categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name PostCategories
     * @request POST:/categories
     * @secure
     */
    postCategories: (data: CategoryRequest, params: RequestParams = {}) =>
      this.request<CategoryResponse, Error>({
        path: `/categories`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name GetCategoriesId
     * @request GET:/categories/{id}
     * @secure
     */
    getCategoriesId: (id: number, params: RequestParams = {}) =>
      this.request<CategoryResponse, Error>({
        path: `/categories/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name PutCategoriesId
     * @request PUT:/categories/{id}
     * @secure
     */
    putCategoriesId: (
      id: number,
      data: CategoryRequest,
      params: RequestParams = {},
    ) =>
      this.request<CategoryResponse, Error>({
        path: `/categories/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name DeleteCategoriesId
     * @request DELETE:/categories/{id}
     * @secure
     */
    deleteCategoriesId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/categories/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  clientStages = {
    /**
     * No description
     *
     * @tags Client-stage
     * @name GetClientStages
     * @request GET:/client-stages
     * @secure
     */
    getClientStages: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<ClientStageListResponse, Error>({
        path: `/client-stages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client-stage
     * @name PostClientStages
     * @request POST:/client-stages
     * @secure
     */
    postClientStages: (data: ClientStageRequest, params: RequestParams = {}) =>
      this.request<ClientStageResponse, Error>({
        path: `/client-stages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client-stage
     * @name GetClientStagesId
     * @request GET:/client-stages/{id}
     * @secure
     */
    getClientStagesId: (id: number, params: RequestParams = {}) =>
      this.request<ClientStageResponse, Error>({
        path: `/client-stages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client-stage
     * @name PutClientStagesId
     * @request PUT:/client-stages/{id}
     * @secure
     */
    putClientStagesId: (
      id: number,
      data: ClientStageRequest,
      params: RequestParams = {},
    ) =>
      this.request<ClientStageResponse, Error>({
        path: `/client-stages/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Client-stage
     * @name DeleteClientStagesId
     * @request DELETE:/client-stages/{id}
     * @secure
     */
    deleteClientStagesId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/client-stages/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  customers = {
    /**
     * No description
     *
     * @tags Customer
     * @name GetCustomers
     * @request GET:/customers
     * @secure
     */
    getCustomers: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<CustomerListResponse, Error>({
        path: `/customers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name PostCustomers
     * @request POST:/customers
     * @secure
     */
    postCustomers: (data: CustomerRequest, params: RequestParams = {}) =>
      this.request<CustomerResponse, Error>({
        path: `/customers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name GetCustomersId
     * @request GET:/customers/{id}
     * @secure
     */
    getCustomersId: (id: number, params: RequestParams = {}) =>
      this.request<CustomerResponse, Error>({
        path: `/customers/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name PutCustomersId
     * @request PUT:/customers/{id}
     * @secure
     */
    putCustomersId: (
      id: number,
      data: CustomerRequest,
      params: RequestParams = {},
    ) =>
      this.request<CustomerResponse, Error>({
        path: `/customers/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name DeleteCustomersId
     * @request DELETE:/customers/{id}
     * @secure
     */
    deleteCustomersId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/customers/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deals = {
    /**
     * No description
     *
     * @tags Deal
     * @name GetDeals
     * @request GET:/deals
     * @secure
     */
    getDeals: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<DealListResponse, Error>({
        path: `/deals`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deal
     * @name PostDeals
     * @request POST:/deals
     * @secure
     */
    postDeals: (data: DealRequest, params: RequestParams = {}) =>
      this.request<DealResponse, Error>({
        path: `/deals`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deal
     * @name GetDealsId
     * @request GET:/deals/{id}
     * @secure
     */
    getDealsId: (id: number, params: RequestParams = {}) =>
      this.request<DealResponse, Error>({
        path: `/deals/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deal
     * @name PutDealsId
     * @request PUT:/deals/{id}
     * @secure
     */
    putDealsId: (id: number, data: DealRequest, params: RequestParams = {}) =>
      this.request<DealResponse, Error>({
        path: `/deals/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deal
     * @name DeleteDealsId
     * @request DELETE:/deals/{id}
     * @secure
     */
    deleteDealsId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/deals/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  faqs = {
    /**
     * No description
     *
     * @tags Faq
     * @name GetFaqs
     * @request GET:/faqs
     * @secure
     */
    getFaqs: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<FaqListResponse, Error>({
        path: `/faqs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Faq
     * @name PostFaqs
     * @request POST:/faqs
     * @secure
     */
    postFaqs: (data: FaqRequest, params: RequestParams = {}) =>
      this.request<FaqResponse, Error>({
        path: `/faqs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Faq
     * @name GetFaqsId
     * @request GET:/faqs/{id}
     * @secure
     */
    getFaqsId: (id: number, params: RequestParams = {}) =>
      this.request<FaqResponse, Error>({
        path: `/faqs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Faq
     * @name PutFaqsId
     * @request PUT:/faqs/{id}
     * @secure
     */
    putFaqsId: (id: number, data: FaqRequest, params: RequestParams = {}) =>
      this.request<FaqResponse, Error>({
        path: `/faqs/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Faq
     * @name DeleteFaqsId
     * @request DELETE:/faqs/{id}
     * @secure
     */
    deleteFaqsId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/faqs/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  global = {
    /**
     * No description
     *
     * @tags Global
     * @name GetGlobal
     * @request GET:/global
     * @secure
     */
    getGlobal: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<GlobalResponse, Error>({
        path: `/global`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Global
     * @name PutGlobal
     * @request PUT:/global
     * @secure
     */
    putGlobal: (data: GlobalRequest, params: RequestParams = {}) =>
      this.request<GlobalResponse, Error>({
        path: `/global`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Global
     * @name DeleteGlobal
     * @request DELETE:/global
     * @secure
     */
    deleteGlobal: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/global`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  logos = {
    /**
     * No description
     *
     * @tags Logo
     * @name GetLogos
     * @request GET:/logos
     * @secure
     */
    getLogos: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<LogoListResponse, Error>({
        path: `/logos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logo
     * @name PostLogos
     * @request POST:/logos
     * @secure
     */
    postLogos: (data: LogoRequest, params: RequestParams = {}) =>
      this.request<LogoResponse, Error>({
        path: `/logos`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logo
     * @name GetLogosId
     * @request GET:/logos/{id}
     * @secure
     */
    getLogosId: (id: number, params: RequestParams = {}) =>
      this.request<LogoResponse, Error>({
        path: `/logos/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logo
     * @name PutLogosId
     * @request PUT:/logos/{id}
     * @secure
     */
    putLogosId: (id: number, data: LogoRequest, params: RequestParams = {}) =>
      this.request<LogoResponse, Error>({
        path: `/logos/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logo
     * @name DeleteLogosId
     * @request DELETE:/logos/{id}
     * @secure
     */
    deleteLogosId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/logos/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  notes = {
    /**
     * No description
     *
     * @tags Note
     * @name GetNotes
     * @request GET:/notes
     * @secure
     */
    getNotes: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<NoteListResponse, Error>({
        path: `/notes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Note
     * @name PostNotes
     * @request POST:/notes
     * @secure
     */
    postNotes: (data: NoteRequest, params: RequestParams = {}) =>
      this.request<NoteResponse, Error>({
        path: `/notes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Note
     * @name GetNotesId
     * @request GET:/notes/{id}
     * @secure
     */
    getNotesId: (id: number, params: RequestParams = {}) =>
      this.request<NoteResponse, Error>({
        path: `/notes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Note
     * @name PutNotesId
     * @request PUT:/notes/{id}
     * @secure
     */
    putNotesId: (id: number, data: NoteRequest, params: RequestParams = {}) =>
      this.request<NoteResponse, Error>({
        path: `/notes/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Note
     * @name DeleteNotesId
     * @request DELETE:/notes/{id}
     * @secure
     */
    deleteNotesId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/notes/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  pages = {
    /**
     * No description
     *
     * @tags Page
     * @name GetPages
     * @request GET:/pages
     * @secure
     */
    getPages: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<PageListResponse, Error>({
        path: `/pages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page
     * @name PostPages
     * @request POST:/pages
     * @secure
     */
    postPages: (data: PageRequest, params: RequestParams = {}) =>
      this.request<PageResponse, Error>({
        path: `/pages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page
     * @name GetPagesId
     * @request GET:/pages/{id}
     * @secure
     */
    getPagesId: (id: number, params: RequestParams = {}) =>
      this.request<PageResponse, Error>({
        path: `/pages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description 
     *
     * @tags Page
     * @name PutPagesId
     * @request PUT:/pages/{id}
     * @secure
     */
    putPagesId: (id: number, data: PageRequest, params: RequestParams = {}) =>
      this.request<PageResponse, Error>({
        path: `/pages/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page
     * @name DeletePagesId
     * @request DELETE:/pages/{id}
     * @secure
     */
    deletePagesId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/pages/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  plans = {
    /**
     * No description
     *
     * @tags Plan
     * @name GetPlans
     * @request GET:/plans
     * @secure
     */
    getPlans: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<PlanListResponse, Error>({
        path: `/plans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name PostPlans
     * @request POST:/plans
     * @secure
     */
    postPlans: (data: PlanRequest, params: RequestParams = {}) =>
      this.request<PlanResponse, Error>({
        path: `/plans`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name GetPlansId
     * @request GET:/plans/{id}
     * @secure
     */
    getPlansId: (id: number, params: RequestParams = {}) =>
      this.request<PlanResponse, Error>({
        path: `/plans/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name PutPlansId
     * @request PUT:/plans/{id}
     * @secure
     */
    putPlansId: (id: number, data: PlanRequest, params: RequestParams = {}) =>
      this.request<PlanResponse, Error>({
        path: `/plans/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name DeletePlansId
     * @request DELETE:/plans/{id}
     * @secure
     */
    deletePlansId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/plans/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags Product
     * @name GetProducts
     * @request GET:/products
     * @secure
     */
    getProducts: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductListResponse, Error>({
        path: `/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name PostProducts
     * @request POST:/products
     * @secure
     */
    postProducts: (data: ProductRequest, params: RequestParams = {}) =>
      this.request<ProductResponse, Error>({
        path: `/products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name GetProductsId
     * @request GET:/products/{id}
     * @secure
     */
    getProductsId: (id: number, params: RequestParams = {}) =>
      this.request<ProductResponse, Error>({
        path: `/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name PutProductsId
     * @request PUT:/products/{id}
     * @secure
     */
    putProductsId: (
      id: number,
      data: ProductRequest,
      params: RequestParams = {},
    ) =>
      this.request<ProductResponse, Error>({
        path: `/products/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name DeleteProductsId
     * @request DELETE:/products/{id}
     * @secure
     */
    deleteProductsId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/products/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  productPage = {
    /**
     * No description
     *
     * @tags Product-page
     * @name GetProductPage
     * @request GET:/product-page
     * @secure
     */
    getProductPage: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductPageResponse, Error>({
        path: `/product-page`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product-page
     * @name PutProductPage
     * @request PUT:/product-page
     * @secure
     */
    putProductPage: (data: ProductPageRequest, params: RequestParams = {}) =>
      this.request<ProductPageResponse, Error>({
        path: `/product-page`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product-page
     * @name DeleteProductPage
     * @request DELETE:/product-page
     * @secure
     */
    deleteProductPage: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/product-page`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  properties = {
    /**
     * No description
     *
     * @tags Property
     * @name GetProperties
     * @request GET:/properties
     * @secure
     */
    getProperties: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<PropertyListResponse, Error>({
        path: `/properties`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PostProperties
     * @request POST:/properties
     * @secure
     */
    postProperties: (data: PropertyRequest, params: RequestParams = {}) =>
      this.request<PropertyResponse, Error>({
        path: `/properties`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name GetPropertiesId
     * @request GET:/properties/{id}
     * @secure
     */
    getPropertiesId: (id: number, params: RequestParams = {}) =>
      this.request<PropertyResponse, Error>({
        path: `/properties/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name PutPropertiesId
     * @request PUT:/properties/{id}
     * @secure
     */
    putPropertiesId: (
      id: number,
      data: PropertyRequest,
      params: RequestParams = {},
    ) =>
      this.request<PropertyResponse, Error>({
        path: `/properties/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Property
     * @name DeletePropertiesId
     * @request DELETE:/properties/{id}
     * @secure
     */
    deletePropertiesId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/properties/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  redirections = {
    /**
     * No description
     *
     * @tags Redirection
     * @name GetRedirections
     * @request GET:/redirections
     * @secure
     */
    getRedirections: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<RedirectionListResponse, Error>({
        path: `/redirections`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redirection
     * @name PostRedirections
     * @request POST:/redirections
     * @secure
     */
    postRedirections: (data: RedirectionRequest, params: RequestParams = {}) =>
      this.request<RedirectionResponse, Error>({
        path: `/redirections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redirection
     * @name GetRedirectionsId
     * @request GET:/redirections/{id}
     * @secure
     */
    getRedirectionsId: (id: number, params: RequestParams = {}) =>
      this.request<RedirectionResponse, Error>({
        path: `/redirections/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redirection
     * @name PutRedirectionsId
     * @request PUT:/redirections/{id}
     * @secure
     */
    putRedirectionsId: (
      id: number,
      data: RedirectionRequest,
      params: RequestParams = {},
    ) =>
      this.request<RedirectionResponse, Error>({
        path: `/redirections/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redirection
     * @name DeleteRedirectionsId
     * @request DELETE:/redirections/{id}
     * @secure
     */
    deleteRedirectionsId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/redirections/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  tasks = {
    /**
     * No description
     *
     * @tags Task
     * @name GetTasks
     * @request GET:/tasks
     * @secure
     */
    getTasks: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<TaskListResponse, Error>({
        path: `/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task
     * @name PostTasks
     * @request POST:/tasks
     * @secure
     */
    postTasks: (data: TaskRequest, params: RequestParams = {}) =>
      this.request<TaskResponse, Error>({
        path: `/tasks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task
     * @name GetTasksId
     * @request GET:/tasks/{id}
     * @secure
     */
    getTasksId: (id: number, params: RequestParams = {}) =>
      this.request<TaskResponse, Error>({
        path: `/tasks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task
     * @name PutTasksId
     * @request PUT:/tasks/{id}
     * @secure
     */
    putTasksId: (id: number, data: TaskRequest, params: RequestParams = {}) =>
      this.request<TaskResponse, Error>({
        path: `/tasks/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Task
     * @name DeleteTasksId
     * @request DELETE:/tasks/{id}
     * @secure
     */
    deleteTasksId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/tasks/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  testimonials = {
    /**
     * No description
     *
     * @tags Testimonial
     * @name GetTestimonials
     * @request GET:/testimonials
     * @secure
     */
    getTestimonials: (
      query?: {
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
      },
      params: RequestParams = {},
    ) =>
      this.request<TestimonialListResponse, Error>({
        path: `/testimonials`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Testimonial
     * @name PostTestimonials
     * @request POST:/testimonials
     * @secure
     */
    postTestimonials: (data: TestimonialRequest, params: RequestParams = {}) =>
      this.request<TestimonialResponse, Error>({
        path: `/testimonials`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Testimonial
     * @name GetTestimonialsId
     * @request GET:/testimonials/{id}
     * @secure
     */
    getTestimonialsId: (id: number, params: RequestParams = {}) =>
      this.request<TestimonialResponse, Error>({
        path: `/testimonials/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Testimonial
     * @name PutTestimonialsId
     * @request PUT:/testimonials/{id}
     * @secure
     */
    putTestimonialsId: (
      id: number,
      data: TestimonialRequest,
      params: RequestParams = {},
    ) =>
      this.request<TestimonialResponse, Error>({
        path: `/testimonials/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Testimonial
     * @name DeleteTestimonialsId
     * @request DELETE:/testimonials/{id}
     * @secure
     */
    deleteTestimonialsId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/testimonials/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  upload = {
    /**
     * @description Upload files
     *
     * @tags Upload - File
     * @name UploadCreate
     * @request POST:/upload
     * @secure
     */
    uploadCreate: (
      data: {
        /** The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
        path?: string;
        /** The ID of the entry which the file(s) will be linked to */
        refId?: string;
        /** The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
        ref?: string;
        /** The field of the entry which the file(s) will be precisely linked to. */
        field?: string;
        files: File[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UploadFile[], any>({
        path: `/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  connect = {
    /**
     * @description Redirects to provider login before being redirect to /auth/{provider}/callback
     *
     * @tags Users-Permissions - Auth
     * @name ConnectDetail
     * @summary Login with a provider
     * @request GET:/connect/{provider}
     * @secure
     */
    connectDetail: (provider: string, params: RequestParams = {}) =>
      this.request<any, void | Error>({
        path: `/connect/${provider}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  auth = {
    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalCreate
     * @summary Local login
     * @request POST:/auth/local
     * @secure
     */
    localCreate: (
      data: {
        identifier?: string;
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/local`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalRegisterCreate
     * @summary Register a user
     * @request POST:/auth/local/register
     * @secure
     */
    localRegisterCreate: (
      data: {
        username?: string;
        email?: string;
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/local/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name CallbackList
     * @summary Default Callback from provider auth
     * @request GET:/auth/{provider}/callback
     * @secure
     */
    callbackList: (provider: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/${provider}/callback`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ForgotPasswordCreate
     * @summary Send rest password email
     * @request POST:/auth/forgot-password
     * @secure
     */
    forgotPasswordCreate: (
      data: {
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/auth/forgot-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ResetPasswordCreate
     * @summary Rest user password
     * @request POST:/auth/reset-password
     * @secure
     */
    resetPasswordCreate: (
      data: {
        password?: string;
        passwordConfirmation?: string;
        code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/reset-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ChangePasswordCreate
     * @summary Update user's own password
     * @request POST:/auth/change-password
     * @secure
     */
    changePasswordCreate: (
      data: {
        password: string;
        currentPassword: string;
        passwordConfirmation: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/change-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name EmailConfirmationList
     * @summary Confirm user email
     * @request GET:/auth/email-confirmation
     * @secure
     */
    emailConfirmationList: (
      query?: {
        /** confirmation token received by email */
        confirmation?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | Error>({
        path: `/auth/email-confirmation`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name SendEmailConfirmationCreate
     * @summary Send confirmation email
     * @request POST:/auth/send-email-confirmation
     * @secure
     */
    sendEmailConfirmationCreate: (
      data: {
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          email?: string;
          sent?: "true";
        },
        Error
      >({
        path: `/auth/send-email-confirmation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  usersPermissions = {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name PermissionsList
     * @summary Get default generated permissions
     * @request GET:/users-permissions/permissions
     * @secure
     */
    permissionsList: (params: RequestParams = {}) =>
      this.request<
        {
          permissions?: UsersPermissionsPermissionsTree;
        },
        Error
      >({
        path: `/users-permissions/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesList
     * @summary List roles
     * @request GET:/users-permissions/roles
     * @secure
     */
    rolesList: (params: RequestParams = {}) =>
      this.request<
        {
          roles?: (UsersPermissionsRole & {
            nb_users?: number;
          })[];
        },
        Error
      >({
        path: `/users-permissions/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesCreate
     * @summary Create a role
     * @request POST:/users-permissions/roles
     * @secure
     */
    rolesCreate: (
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: UsersPermissionsPermissionsTree;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDetail
     * @summary Get a role
     * @request GET:/users-permissions/roles/{id}
     * @secure
     */
    rolesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users-permissions/roles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesUpdate
     * @summary Update a role
     * @request PUT:/users-permissions/roles/{role}
     * @secure
     */
    rolesUpdate: (
      role: string,
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: UsersPermissionsPermissionsTree;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles/${role}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDelete
     * @summary Delete a role
     * @request DELETE:/users-permissions/roles/{role}
     * @secure
     */
    rolesDelete: (role: string, params: RequestParams = {}) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles/${role}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersList
     * @summary Get list of users
     * @request GET:/users
     * @secure
     */
    usersList: (params: RequestParams = {}) =>
      this.request<UsersPermissionsUser[], Error>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersCreate
     * @summary Create a user
     * @request POST:/users
     * @secure
     */
    usersCreate: (
      data: {
        email: string;
        username: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UsersPermissionsUser & {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDetail
     * @summary Get a user
     * @request GET:/users/{id}
     * @secure
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersUpdate
     * @summary Update a user
     * @request PUT:/users/{id}
     * @secure
     */
    usersUpdate: (
      id: string,
      data: {
        email: string;
        username: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UsersPermissionsUser & {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDelete
     * @summary Delete a user
     * @request DELETE:/users/{id}
     * @secure
     */
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name GetUsers
     * @summary Get authenticated user info
     * @request GET:/users/me
     * @secure
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name CountList
     * @summary Get user count
     * @request GET:/users/count
     * @secure
     */
    countList: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/users/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
