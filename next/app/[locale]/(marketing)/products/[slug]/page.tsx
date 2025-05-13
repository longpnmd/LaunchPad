import { Metadata } from "next";

import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { AmbientColor } from "@/components/decorations/ambient-color";
import { SingleProduct } from "@/components/products/single-product";
import DynamicZoneManager from '@/components/dynamic-zone/manager'
import { productApi } from "@/lib/api-helper";

export async function generateMetadata({
  params,
}: {
  params: { locale: string, slug: string };
}): Promise<Metadata> {
  const { data: response } = await productApi.getProducts({
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
  const pageData = response.data?.[0];

  // const seo = pageData?.seo; ;
  // const metadata = generateMetadataObject(seo);
  // return metadata;
  return {}
}

export default async function SingleProductPage({
  params,
}: {
  params: { slug: string, locale: string };
}) {
  const { data: response } = await productApi.getProducts({
    filters: {
      slug: params.slug,
      locale: params.locale,
    },
    populate: ["seo.metaImage","dynamic_zone"] as any,
    paginationLimit: 1,
  });

  const product = response?.data?.[0];

  if (!product) {
    redirect("/products");
  }

  return (
    <div className="relative overflow-hidden w-full">
      <AmbientColor />
      <Container className="py-20 md:py-40">
        <SingleProduct product={product} />
        {product?.dynamic_zone && (<DynamicZoneManager dynamicZone={product?.dynamic_zone as any} locale={params.locale} />)}
      </Container>
    </div>
  );
}
