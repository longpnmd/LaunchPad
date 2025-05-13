import React from "react";

import { BlogLayout } from "@/components/blog-layout";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import ClientSlugHandler from "../../ClientSlugHandler";
import { articleApi } from "@/lib/api-helper";

export default async function SingleArticlePage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { data: articleResponse } = await articleApi.getArticles({
    filters: {
      slug: params.slug,
      locale: params.locale,
    },
    populate: {
      image: true,
      categories: true,
      seo: {
        populate: ["metaImage"],
      },
      localizations: true,
    } as any,
    paginationLimit: 1,
  });
  const article = articleResponse.data?.[0];

  if (!article) {
    return <div>Blog not found</div>;
  }

  const localizedSlugs = article.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = localization.slug;
      return acc;
    },
    { [params.locale]: params.slug }
  );

  return (
    <BlogLayout article={article} locale={params.locale}>
      <ClientSlugHandler localizedSlugs={localizedSlugs || {}} />
      <BlocksRenderer content={article.content} />
    </BlogLayout>
  );
}
