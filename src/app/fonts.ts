import localFont from "next/font/local";

export const acumin = localFont({
  src: [
    {
      path: "../../public/fonts/Acumin-RPro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acumin-BdPro.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-acumin",
  display: "swap",
});
