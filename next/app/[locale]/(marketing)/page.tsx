import { Metadata } from "next";

import PageContent from "@/lib/shared/PageContent";
import { generateMetadataObject } from "@/lib/shared/metadata";
import ClientSlugHandler from "./ClientSlugHandler";
import api from "@/lib/api";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { data: pageData } = await api.page.getPages({
    filters: {
      filters: {
        slug: "homepage",
        locale: params.locale,
      },
    },
    populate: {
      seo: {
        populate: "*",
      },
      localizations: true,
    } as any,
    "pagination[limit]": 1,
  });

  const seo = pageData?.[0]?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { data: responseData } = await api.page.getPages({
    filters: {
      filters: {
        slug: "homepage",
        locale: params.locale,
      },
    },
    populate: {
      seo: {
        populate: "*",
      },
      localizations: true,
      dynamic_zone: {
        on: {
          "dynamic-zone.hero": {
            populate: "*",
          },
          "dynamic-zone.features": {
            populate: "*",
          },
          "dynamic-zone.testimonials": {
            populate: {
              testimonials: {
                populate: {
                  user: {
                    populate: "image",
                  },
                },
              },
            },
          },
          "dynamic-zone.how-it-works": {
            populate: "*",
          },
          "dynamic-zone.brands": {
            populate: {
              logos: {
                populate: {
                  image: {
                    populate: "*",
                  },
                },
              },
            },
          },
          "dynamic-zone.pricing": {
            populate: {
              plans: {
                populate: {
                  perks: true,
                  CTA: true,
                  product: true,
                },
              },
            },
          },
          "dynamic-zone.launches": {
            populate: {
              launches: {
                populate: "*",
              },
            },
          },
          "dynamic-zone.cta": {
            populate: "*",
          },
          "dynamic-zone.form-next-to-section": {
            populate: {
              social_media_icon_links: {
                populate: {
                  image: true,
                  link: true,
                },
              },
              section: {
                populate: {
                  users: {
                    populate: {
                      image: true,
                    },
                  },
                },
              },
              form: {
                populate: {
                  inputs: true,
                },
              },
            },
          },
          "dynamic-zone.faq": {
            populate: {
              faqs: {
                populate: "*",
              },
            },
          },
          "dynamic-zone.related-products": {
            populate: {
              products: {
                populate: "*",
              },
            },
          },
          "dynamic-zone.related-articles": {
            populate: {
              articles: {
                populate: "*",
              },
            },
          },
        },
      },
    } as any,
    "pagination[limit]": 1,
  });

  const localizedSlugs = responseData?.[0].localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = "";
      return acc;
    },
    { [params.locale]: "" }
  );

  const pageData = responseData?.[0];

  return (
    <>
      <ClientSlugHandler localizedSlugs={localizedSlugs || {}} />
      <PageContent pageData={pageData} />
    </>
  );
}
