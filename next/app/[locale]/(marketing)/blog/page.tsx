import { type Metadata } from "next";

import { Container } from "@/components/container";
import { Heading } from "@/components/elements/heading";
import { Subheading } from "@/components/elements/subheading";
import { BlogCard } from "@/components/blog-card";
import { FeatureIconContainer } from "@/components/dynamic-zone/features/feature-icon-container";
import { IconClipboardText } from "@tabler/icons-react";
import { BlogPostRows } from "@/components/blog-post-rows";
import { AmbientColor } from "@/components/decorations/ambient-color";
import { generateMetadataObject } from "@/lib/shared/metadata";

import ClientSlugHandler from "../ClientSlugHandler";
import api from "@/lib/api";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { data: pageData } = await api.blogPage.getBlogPage({
    filters: {
      filters: {
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

  const seo = Array.isArray(pageData) ? pageData[0].seo : undefined;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function Blog({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { data: _blogPage } = await api.blogPage.getBlogPage({
    filters: {
      filters: {
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
  const { data: articles } = await api.article.getArticles({
    filters: {
      filters: {
        locale: params.locale,
      },
    },
    populate: {
      image: true,
      categories: {
        populate: "*",
      },
      seo: {
        populate: "*",
      },
      localizations: true,
    } as any,
    "pagination[limit]": 100,
  });
  const blogPage = Array.isArray(_blogPage) ? _blogPage[0] : _blogPage;

  const localizedSlugs = blogPage?.localizations?.reduce(
    (acc: Record<string, string>, localization: any) => {
      acc[localization.locale] = "blog";
      return acc;
    },
    { [params.locale]: "blog" }
  );

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <ClientSlugHandler localizedSlugs={localizedSlugs || {}} />
      <AmbientColor />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
            <IconClipboardText className="h-6 w-6 text-white" />
          </FeatureIconContainer>
          <Heading as="h1" className="mt-4">
            {blogPage?.seo?.metaTitle}
          </Heading>
          <Subheading className="max-w-3xl mx-auto">
            {blogPage?.seo?.metaDescription}
          </Subheading>
        </div>

        {articles?.slice(0, 1).map((article: API.Article) => (
          <BlogCard
            article={article}
            locale={params.locale}
            key={article.title}
          />
        ))}

        <BlogPostRows articles={articles ?? []} />
      </Container>
    </div>
  );
}
