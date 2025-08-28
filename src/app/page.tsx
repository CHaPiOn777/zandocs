import type { Metadata } from "next";
import HomeClient from "./_components/HomeClient/HomeClient";

export const metadata: Metadata = {
  title: "Zandocs",
  description:
    "Zandocs — Конструктор документов. Зандокс. Конструктор документов. Создать документ онлайн. зандокс. zandocs",
  keywords: ["Конструктор документов", "зандокс", "zandocs"],
  alternates: { canonical: "/" },
};

export default async function Page() {
  return <HomeClient />;
}
