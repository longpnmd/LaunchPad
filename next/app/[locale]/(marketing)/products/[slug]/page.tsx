import { Metadata } from "next";

import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { AmbientColor } from "@/components/decorations/ambient-color";
import { SingleProduct } from "@/components/products/single-product";
import DynamicZoneManager from "@/components/dynamic-zone/manager";
import api from "@/lib/api";
import { generateMetadataObject } from "@/lib/shared/metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { data: response } = await api.productPage.getProductPage({
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
  const pageData = response;

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function SingleProductPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { data: response } = await api.product.getProducts({
    filters: {
      filters: {
        slug: params.slug?.toString() || "",
      },
    },
    populate: {
      perks: true,
      plans: true,
      categories: true,
      images: true,
      dynamic_zone: {
        on: {
          "dynamic-zone.related-products": {
            populate: {
              products: {
                populate: {
                  images: true,
                },
              },
            },
          },
        },
      },
    } as any,
    "pagination[limit]": 1,
    locale: params.locale,
  });

  const product = response?.[0];

  if (!product) {
    redirect("/products");
  }

  return (
    <div className="relative overflow-hidden w-full">
      <AmbientColor />
      <Container className="py-20 md:py-40">
        <SingleProduct product={product} />
        {product?.dynamic_zone && (
          <DynamicZoneManager
            dynamicZone={product?.dynamic_zone as any}
            locale={params.locale}
          />
        )}
      </Container>
    </div>
  );
}
