import { Metadata } from "next";
import { Inter } from "next/font/google";
import { generateMetadataObject } from "@/lib/shared/metadata";
import AdminClientLayout from "./page";
import qs from "qs";
import api from "@/lib/api";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Metadata cho Admin section
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  try {
    const response = await api.global.getGlobal({
      filters: { filters: { locale: params.locale?.toString() || "en" } },
      populate: "seo",
    });
    const pageData = response.data;
    const seo = pageData?.seo;

    return (
      generateMetadataObject(seo) || {
        title: "Admin Dashboard | CRM BĐS",
        description: "Hệ thống quản lý bất động sản",
      }
    );
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Admin Dashboard | CRM BĐS",
      description: "Hệ thống quản lý bất động sản",
    };
  }
}

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  try {
    // Server-side data fetching
    const response = await api.global
      .getGlobal({
        filters: { filters: { locale: params.locale?.toString() || "en" } },
        populate: {
          seo: {
            populate: "*",
          },
          navbar : {
            populate: "*",
          },
        } as any,
      })

    const globalData = response.data;

    return (
      <html lang={params.locale} className={inter.className}>
        <body className="antialiased bg-gray-50">
          <AdminClientLayout
            children={children}
            params={params}
            initialData={globalData}
          />
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error in AdminLayout:", error);
    return (
      <html lang={params.locale} className={inter.className}>
        <body className="antialiased bg-gray-50">
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                Đã xảy ra lỗi
              </h1>
              <p className="mb-4">
                Không thể tải dữ liệu. Vui lòng thử lại sau.
              </p>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={() => window.location.reload()}
              >
                Tải lại trang
              </button>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
