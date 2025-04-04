// import DocsContent from "@/app/documents/[id]/DocsContent";

import DocsContent from "@/app/documents/[id]/DocsContent";
import Loader from "@/ui/Loader/Loader";
import { Metadata } from "next";
import { Suspense } from "react";

// Обновлённая типизация: params — это Promise<{ id: string }>
type PageProps = {
  params: Promise<{ id: string }>;
};

const documentMetaData: Record<string, Metadata> = {
  "7658": {
    title: "Договор дарения РК образец - Zandocs.kz",
    description:
      "Договор дарения РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "7652": {
    title: "Договор займа (на займ) денег образец - Zandocs.kz",
    description:
      "Договор займа/на займ денег образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "7650": {
    title: "Разовая доверенность пример образец - Zandocs.kz",
    description:
      "Разовая доверенность пример образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "7642": {
    title: "Акт приема-передачи имущества образец РК - Zandocs.kz",
    description:
      "Акт приема-передачи имущества образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "3958": {
    title: "Расписка образец | Образец расписки РК - Zandocs.kz",
    description:
      "Расписка образец (Образец расписки РК) в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "2547": {
    title: "Устав ТОО образец РК - Zandocs.kz",
    description:
      "Устав ТОО образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "2368": {
    title: "Договор гарантии РК образец - Zandocs.kz",
    description:
      "Договор гарантии РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "2360": {
    title: "Договор возмездного оказания услуг РК образец шаблон - Zandocs.kz",
    description:
      "Договор возмездного оказания услуг РК образец шаблон в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "2356": {
    title: "Договор об оказании консультационных услуг образец РК - Zandocs.kz",
    description:
      "Договор об оказании консультационных услуг образец РК в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "2340": {
    title: "Договор купли-продажи в рассрочку РК образец - Zandocs.kz",
    description:
      "Договор купли-продажи в рассрочку РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "2327": {
    title:
      "Договор купли-продажи недвижимого имущества РК образец без обременений - Zandocs.kz",
    description:
      "Договор купли-продажи недвижимого имущества РК образец без обременений в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "2320": {
    title: "Договор аренды квартиры РК образец - Zandocs.kz",
    description:
      "Договор аренды квартиры РК образец в zandocs.kz ✅ Готовые юридические документы за 2 минуты ✅ Быстро, точно и доступно, без визита к юристу! ☎️ 7(771)378-80-39",
  },
  "1800": {
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
