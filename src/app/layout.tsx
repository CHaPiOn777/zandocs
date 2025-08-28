import "./globals.css";
import "../styles/fonts.css";
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import { getProducts } from "@/api/authApi";
import DocumentsClient from "@/app/_components/DocumentsClient";
import AuthAndCartLoader from "@/app/_components/AuthAndCartLoader";
import Script from "next/script";
import Providers from "./providers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const documents = await getProducts();

  return (
    <html lang="ru">
      <head>
        <title>Zandocs</title>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VDKRCYMVLS"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VDKRCYMVLS');
          `}
        </Script>

        {/* 2. Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PQNK7MF8');
          `}
        </Script>
      </head>
      <body>
        {/* 3. Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQNK7MF8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Providers>
          <Header />
          <AuthAndCartLoader />
          <DocumentsClient initialDocs={documents} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
