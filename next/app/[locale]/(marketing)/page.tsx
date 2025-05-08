import { Metadata } from "next";

import PageContent from "@/lib/shared/PageContent";
import { generateMetadataObject } from "@/lib/shared/metadata";
import ClientSlugHandler from "./ClientSlugHandler";
import { api } from "@/lib/services";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { data: pageData } = await api.pages.getPages({
    filters: {
      slug: "homepage",
      locale: params.locale,
    },
    populate: "seo.metaImage",
    "pagination[limit]": 1,
  });

  const seo = pageData?.data?.[0]?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { data: responseData } = await api.pages
    .getPages({
      filters: {
        slug: "homepage",
        locale: params.locale,
      },
      populate: {
        seo: {
          populate: ["metaImage"],
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
                  populate: "*",
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
              populate: "*",
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
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw new Error(
        `Failed to fetch data from Strapi (url=${error.config.url}, status=${error.response.status})`
      );
    });

  const localizedSlugs = responseData?.data?.[0].localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = "";
      return acc;
    },
    { [params.locale]: "" }
  );

  const pageData = responseData?.data?.[0];

  return (
    <>
      <ClientSlugHandler localizedSlugs={localizedSlugs || {}} />
      <PageContent pageData={pageData} />
    </>
  );
}
