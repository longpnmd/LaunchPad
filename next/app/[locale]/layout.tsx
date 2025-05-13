import React from 'react'

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { generateMetadataObject } from '@/lib/shared/metadata';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { CartProvider } from '@/context/cart-context';
import { cn } from '@/lib/utils';
import { ViewTransitions } from 'next-view-transitions';
import { globalApi } from '@/lib/api-helper';

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

// Default Global SEO for pages without them
export async function generateMetadata({
    params,
}: {
    params: { locale: string; slug: string };
}): Promise<Metadata> {
    const response = await globalApi.getGlobal({
        filters: { locale: params.locale.toString() },
        populate: "seo",
    });
    if(response.status !== 200) {
        throw new Error(`Failed to fetch data from Strapi (url=${response.config.url}, status=${response.status})`);
    }
    const pageData = response.data;        
    const seo = pageData.data?.seo;
    const metadata = generateMetadataObject(seo);
    return metadata;
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const response = await globalApi.getGlobal({
        filters: { locale: locale.toString() },
        populate: "navbar,footer",
    });
    if(response.status !== 200) {
        throw new Error(`Failed to fetch data from Strapi (url=${response.config.url}, status=${response.status})`);
    }
    const {data : pageData} = response.data     
    return (
        <html lang={locale}>
            <ViewTransitions>
                <CartProvider>
                    <body
                        className={cn(
                            inter.className,
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