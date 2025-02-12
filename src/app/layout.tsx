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
export const metadata: Metadata = {
  title: "Zandocs",
  description:
    "Надёжный и удобный конструктор документов для бизнеса и частных лиц",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const documents = await getProducts();

  return (
    <html lang="ru">
      {/* <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head> */}
      <body>
        <MUIThemeProvider>
          <ToastProvider>
            <Suspense fallback={<CircularProgress color={"info"} />}>
              <Header />
              <AuthAndCartLoader />
              <DocumentsClient initialDocs={documents} />
              {children}
              <Footer />
            </Suspense>
          </ToastProvider>
        </MUIThemeProvider>
      </body>
    </html>
  );
}
