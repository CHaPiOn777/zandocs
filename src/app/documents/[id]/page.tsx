import DocsContent from "@/app/documents/[id]/DocsContent";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

const documentMetaData: Record<string, Metadata> = {
  "dogovor-dareniya": {
    title: "Договор дарения РК образец - Zandocs.kz",
    description:
      "Договор дарения РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "dogovor-zaima-deneg": {
    title: "Договор займа (на займ) денег образец - Zandocs.kz",
    description:
      "Договор займа/на займ денег образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "razovaya-doverennost": {
    title: "Разовая доверенность пример образец - Zandocs.kz",
    description:
      "Разовая доверенность пример образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "akt-priema-peredachi-imushchestva": {
    title: "Акт приема-передачи имущества образец РК - Zandocs.kz",
    description:
      "Акт приема-передачи имущества образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  raspiska: {
    title: "Расписка образец | Образец расписки РК - Zandocs.kz",
    description:
      "Расписка образец (Образец расписки РК) в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  ustav: {
    title: "Устав ТОО образец РК - Zandocs.kz",
    description:
      "Устав ТОО образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "dogovor-garantii": {
    title: "Договор гарантии РК образец - Zandocs.kz",
    description:
      "Договор гарантии РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "dogovor-vozmezdnogo-okazaniya-uslug": {
    title: "Договор возмездного оказания услуг РК образец шаблон - Zandocs.kz",
    description:
      "Договор возмездного оказания услуг РК образец шаблон в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "dogovor-ob-okazanii-konsultacionnyh-uslug": {
    title: "Договор об оказании консультационных услуг образец РК - Zandocs.kz",
    description:
      "Договор об оказании консультационных услуг образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "dogovor-kupli-prodazhi-v-rassrochku": {
    title: "Договор купли-продажи в рассрочку РК образец - Zandocs.kz",
    description:
      "Договор купли-продажи в рассрочку РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "dogovor-kupli-prodazhi-nedvizhimosti-bez-obremeneniy": {
    title:
      "Договор купли-продажи недвижимого имущества РК образец без обременений - Zandocs.kz",
    description:
      "Договор купли-продажи недвижимого имущества РК образец без обременений в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "dogovor-arendy": {
    title: "Договор аренды квартиры РК образец - Zandocs.kz",
    description:
      "Договор аренды квартиры РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "uchreditelnyy-dogovor": {
    title: "Учредительный договор ТОО РК шаблон образец - Zandocs.kz",
    description:
      "Учредительный договор ТОО РК шаблон образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "1724": {
    title: "Протокол общего собрания участников ТОО РК образец - Zandocs.kz",
    description:
      "Протокол общего собрания участников ТОО РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "1708": {
    title: "Решение о создании ТОО РК образец - Zandocs.kz",
    description:
      "Решение о создании ТОО РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
};

// Функция для генерации мета-тегов с асинхронным получением params
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://zandocs.kz/documents";
  const meta = documentMetaData[id];
  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
      alternates: { canonical: new URL(`/${id}`, base).toString() },
    };
  }

  return {
    title: "Документ – Скачать бесплатно",
    description: "Официальный бланк документа для скачивания.",
    alternates: { canonical: new URL(`/${id}`, base).toString() },
  };
}

// Асинхронный компонент страницы для работы с промисом params
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <DocsContent id={id} />;
};

export default Page;
