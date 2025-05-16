import React from "react";

import { Metadata } from "next";
import { generateMetadataObject } from "@/lib/shared/metadata";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CartProvider } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import api from "@/lib/api";


// Default Global SEO for pages without them
export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const response = await api.global.getGlobal({
    filters: { filters: { locale: params.locale.toString() } },
    populate: "seo",
  });
  const pageData = response.data;
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const response = await api.global.getGlobal({
    filters: { filters: { locale: locale.toString() } },
    populate: {
      seo: {
        populate: "*",
      },
      navbar: {
        populate: "*",
      },
    } as any,
  });
  const { data: pageData } = response;
  return (
    <html lang={locale}>
      <ViewTransitions>
        <CartProvider>
          <body
            className={cn(
              "bg-charcoal antialiased h-full w-full"
            )}
          >
            <Navbar data={pageData?.navbar} locale={locale} />
            {children}
            <Footer data={pageData?.footer} locale={locale} />
          </body>
        </CartProvider>
      </ViewTransitions>
    </html>
  );
}
