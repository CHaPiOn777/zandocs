import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css";
import MUIThemeProvider from "@/providers/MUIThemeProvider";
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import ToastProvider from "@/ui/ToastProvider/ToastProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <MUIThemeProvider>
          <ToastProvider>
            <Header />
            <main style={{ marginTop: "70px" }}>{children}</main>
            <Footer />
          </ToastProvider>
        </MUIThemeProvider>
      </body>
    </html>
  );
}
