import { Metadata } from "next";
import PageContent from "@/lib/shared/PageContent";
import { generateMetadataObject } from "@/lib/shared/metadata";
import ClientSlugHandler from "../ClientSlugHandler";
import api from "@/lib/api";
import { link } from "fs";
import { CTA } from "@/components/dynamic-zone/cta";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { data } = await api.page.getPages({
    filters: {
      filters: {
        slug: params.slug,
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
  const pageData = data?.[0];
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function Page({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { data } = await api.page.getPages({
    filters: {
      filters: {
        slug: params.slug,
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
          "dynamic-zone.pricing": {
            populate: {
              plans: {
                populate: {
                  perks : true,
                  CTA : true,
                  product : true
                },
              },
            },
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
          "dynamic-zone.cta": {
            populate: "*",
          },
          "dynamic-zone.faq": {
            populate: "*",
          },
        },
      },
    } as any,
    "pagination[limit]": 1,
  });

  const pageData = data?.[0];

  // console.log("Page Data:" + pageData?.dynamic_zone[0]?.id ?? "No data");

  const localizedSlugs = pageData?.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = localization.slug;
      return acc;
    },
    { [params.locale]: params.slug }
  );

  return (
    <>
      <ClientSlugHandler localizedSlugs={localizedSlugs || {}} />
      <PageContent pageData={pageData} />
    </>
  );
}
