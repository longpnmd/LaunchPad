import { Metadata } from "next";
import { generateMetadataObject } from "@/lib/shared/metadata";
import api from "@/lib/api";
import AdminClientLayout from "@/components/layout/AdminLayout";
import { ViewTransitions } from "next-view-transitions";
import { CartProvider } from "@/context/cart-context";
import { cn } from "@/lib/utils";

// Metadata cho Admin section
export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  // Add default locale if params.locale is undefined
  const locale = params?.locale?.toString() || "en";
  
  const response = await api.global.getGlobal({
    filters: { filters: { locale } },
    populate: "seo",
  });
  const pageData = response.data;
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Add default locale if params.locale is undefined
  const locale = params?.locale?.toString() || "en";
  
  const response = await api.global.getGlobal({
    filters: { filters: { locale } },
    populate: {
      seo: {
        populate: "*",
      },
      navbar: {
        populate: "*",
      },
    } as any,
  });

  const { data: globalData } = response;
  return (
    <html lang={locale}>
      <ViewTransitions>
        <CartProvider>
          <body
            className={cn(
              "bg-charcoal antialiased h-full w-full"
            )}
          >
            <AdminClientLayout params={params} initialData={globalData}>
              {children}
            </AdminClientLayout>
          </body>
        </CartProvider>
      </ViewTransitions>
    </html>
  );
}
