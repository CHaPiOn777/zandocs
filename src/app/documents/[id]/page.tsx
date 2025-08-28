// import DocsContent from "@/app/documents/[id]/DocsContent";

import DocsContent from "@/app/documents/[id]/DocsContent";
import Loader from "@/ui/Loader/Loader";
import { Metadata } from "next";
import { Suspense } from "react";

type PageProps = {
  params: { id: string };
};
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://zandocs.kz";

export const documentMetaData: Record<string, Metadata> = {
  "dogovor-dareniya": {
    title: "Договор дарения РК образец - Zandocs.kz",
    description:
      "Договор дарения РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: { canonical: new URL("/dogovor-dareniya", base).toString() },
  },
  "dogovor-zaima-deneg": {
    title: "Договор займа (на займ) денег образец - Zandocs.kz",
    description:
      "Договор займа/на займ денег образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: { canonical: new URL("/dogovor-zaima-deneg", base).toString() },
  },
  "razovaya-doverennost": {
    title: "Разовая доверенность пример образец - Zandocs.kz",
    description:
      "Разовая доверенность пример образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: {
      canonical: new URL("/razovaya-doverennost", base).toString(),
    },
  },
  "akt-priema-peredachi-imushchestva": {
    title: "Акт приема-передачи имущества образец РК - Zandocs.kz",
    description:
      "Акт приема-передачи имущества образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: {
      canonical: new URL("/akt-priema-peredachi-imushchestva", base).toString(),
    },
  },
  raspiska: {
    title: "Расписка образец | Образец расписки РК - Zandocs.kz",
    description:
      "Расписка образец (Образец расписки РК) в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: { canonical: new URL("/raspiska", base).toString() },
  },
  ustav: {
    title: "Устав ТОО образец РК - Zandocs.kz",
    description:
      "Устав ТОО образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: { canonical: new URL("/ustav", base).toString() },
  },
  "dogovor-garantii": {
    title: "Договор гарантии РК образец - Zandocs.kz",
    description:
      "Договор гарантии РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: { canonical: new URL("/dogovor-garantii", base).toString() },
  },
  "dogovor-vozmezdnogo-okazaniya-uslug": {
    title: "Договор возмездного оказания услуг РК образец шаблон - Zandocs.kz",
    description:
      "Договор возмездного оказания услуг РК образец шаблон в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: {
      canonical: new URL(
        "/dogovor-vozmezdnogo-okazaniya-uslug",
        base
      ).toString(),
    },
  },
  "dogovor-ob-okazanii-konsultacionnyh-uslug": {
    title: "Договор об оказании консультационных услуг образец РК - Zandocs.kz",
    description:
      "Договор об оказании консультационных услуг образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: {
      canonical: new URL(
        "/dogovor-ob-okazanii-konsultacionnyh-uslug",
        base
      ).toString(),
    },
  },
  "dogovor-kupli-prodazhi-v-rassrochku": {
    title: "Договор купли-продажи в рассрочку РК образец - Zandocs.kz",
    description:
      "Договор купли-продажи в рассрочку РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: {
      canonical: new URL(
        "/dogovor-kupli-prodazhi-v-rassrochku",
        base
      ).toString(),
    },
  },
  "dogovor-kupli-prodazhi-nedvizhimosti-bez-obremeneniy": {
    title:
      "Договор купли-продажи недвижимого имущества РК образец без обременений - Zandocs.kz",
    description:
      "Договор купли-продажи недвижимого имущества РК образец без обременений в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: {
      canonical: new URL(
        "/dogovor-kupli-prodazhi-nedvizhimosti-bez-obremeneniy",
        base
      ).toString(),
    },
  },
  "dogovor-arendy": {
    title: "Договор аренды квартиры РК образец - Zandocs.kz",
    description:
      "Договор аренды квартиры РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: { canonical: new URL("/dogovor-arendy", base).toString() },
  },
  "uchreditelnyy-dogovor": {
    title: "Учредительный договор ТОО РК шаблон образец - Zandocs.kz",
    description:
      "Учредительный договор ТОО РК шаблон образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: {
      canonical: new URL("/uchreditelnyy-dogovor", base).toString(),
    },
  },
  "1724": {
    title: "Протокол общего собрания участников ТОО РК образец - Zandocs.kz",
    description:
      "Протокол общего собрания участников ТОО РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: { canonical: new URL("/1724", base).toString() },
  },
  "1708": {
    title: "Решение о создании ТОО РК образец - Zandocs.kz",
    description:
      "Решение о создании ТОО РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
    alternates: { canonical: new URL("/1708", base).toString() },
  },
};

// Функция для генерации мета-тегов с асинхронным получением params

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  return (
    documentMetaData[id] || {
      title: "Документ – Скачать бесплатно",
      description: "Официальный бланк документа для скачивания. ",
    }
  );
}
// Асинхронный компонент страницы для работы с промисом params
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <Suspense fallback={<Loader isLoader={true} />}>
      <DocsContent id={id} />
    </Suspense>
  );
};

export default Page;
