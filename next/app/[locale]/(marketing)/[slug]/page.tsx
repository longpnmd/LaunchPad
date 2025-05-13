import { Metadata } from "next";
import PageContent from "@/lib/shared/PageContent";
import { generateMetadataObject } from "@/lib/shared/metadata";
import ClientSlugHandler from "../ClientSlugHandler";
import { pageApi } from "@/lib/api-helper";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { data } = await pageApi.getPages({
    filters: {
      slug: params.slug,
      locale: params.locale,
    },
    populate: {
      seo: {
        populate: ["metaImage"],
      },
      localizations: true,
    } as any,
    paginationLimit: 1,
  });
  const pageData = data?.data?.[0];
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function Page({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { data } = await pageApi.getPages({
    filters: {
      slug: params.slug,
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
                    populate: "*",
                  },
                },
              },
            },
          },
        },
      },
    } as any,
    paginationLimit: 1,
  });

  const pageData = data?.data?.[0];

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
