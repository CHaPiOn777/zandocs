import DocsContent from "@/app/documents/[id]/DocsContent";
import Loader from "@/ui/Loader/Loader";
import { Metadata } from "next";
import { Suspense } from "react";

// Обновлённая типизация: params — это Promise<{ id: string }>
type PageProps = {
  params: Promise<{ id: string }>;
};

const documentMetaData: Record<string, Metadata> = {
  "3958": {
    title: "Расписка в получении денег – Скачать образец, бланк, пример",
    description:
      "Расписка в получении денег образец. Скачать бланк расписки. Как написать расписку о получении денег. Пример расписки. Расписка о передаче денег скачать.",
  },
  "7642": {
    title: "Акт приема-передачи имущества – Скачать образец бесплатно",
    description:
      "Акт приема-передачи имущества образец. Скачать акт приема-передачи имущества. Бланк акта приема-передачи имущества. Как составить акт приема-передачи имущества. Пример акта приема-передачи имущества.",
  },
  "7650": {
    title: "Разовая доверенность – Образец, бланк, пример оформления",
    description:
      "Разовая доверенность образец. Скачать бланк разовой доверенности. Доверенность на разовое представление интересов. Как оформить разовую доверенность. Пример разовой доверенности.",
  },
  "7652": {
    title: "Договор займа денег – Скачать образец бесплатно",
    description:
      "Договор займа денег образец. Скачать договор займа между физическими лицами. Бланк договора займа денег. Договор займа без процентов скачать. Как составить договор займа денег.",
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
      description: "Официальный бланк документа для скачивания.",
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
