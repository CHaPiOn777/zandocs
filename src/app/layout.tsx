import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css";
import MUIThemeProvider from "@/providers/MUIThemeProvider";
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import ToastProvider from "@/ui/ToastProvider/ToastProvider";
import { getProducts } from "@/api/authApi";
import DocumentsClient from "@/app/_components/DocumentsClient";
import AuthAndCartLoader from "@/app/_components/AuthAndCartLoader";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Zandocs",
  description:
    "Zandocs — Конструктор документов. Зандокс. Конструктор документов. Создать документ онлайн. зандокс. zandocs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const documents = await getProducts();
  return (
    <html lang="ru">
      <Head>
        <title>Zandocs</title>
        <meta
          name="description"
          content="Zandocs — Конструктор документов. Зандокс. Конструктор документов. Создать документ онлайн. зандокс. zandocs"
        />
        <meta
          name="google-site-verification"
          content="KFs_C3D17sGdal_CPABZpAlAHI2cS3XS8oLFVGxUIoI"
        />
        {/* Метатег keywords уже не оказывает существенного влияния на SEO, но его можно добавить */}
        <meta
          name="keywords"
          content="Конструктор документов, зандокс, zandocs"
        />
      </Head>
      <body>
        <MUIThemeProvider>
          <Suspense fallback={<CircularProgress color={"info"} />}>
            <ToastProvider>
              <Header />
              <AuthAndCartLoader />
              <DocumentsClient initialDocs={documents} />
              {children}
              <Footer />
            </ToastProvider>
          </Suspense>
        </MUIThemeProvider>
      </body>
    </html>
  );
}
