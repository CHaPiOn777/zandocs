import DocsContent from "@/app/documents/[id]/DocsContent";
import Loader from "@/ui/Loader/Loader";
import { Suspense } from "react";
type TDocs = {
  title: string;
  description: string;
  keywords: string[];
};
const documentMetaData: Record<string, TDocs> = {
  7652: {
    title: "Договор займа денег – Скачать образец бесплатно",
    description:
      "Скачайте договор займа между физическими лицами. Готовый бланк для займа денег без процентов.",
    keywords: [
      "Договор займа денег образец",
      "Скачать договор займа между физическими лицами",
      "Бланк договора займа денег",
      "Договор займа без процентов скачать",
      "Как составить договор займа денег",
    ],
  },
  7650: {
    title: "Разовая доверенность – Скачать бланк",
    description:
      "Как оформить разовую доверенность? Скачать образец доверенности на разовое представление интересов.",
    keywords: [
      "Разовая доверенность образец",
      "Скачать бланк разовой доверенности",
      "Доверенность на разовое представление интересов",
      "Как оформить разовую доверенность",
      "Пример разовой доверенности",
    ],
  },
  7642: {
    title: "Акт приема-передачи имущества – Образец и бланк",
    description:
      "Скачайте акт приема-передачи имущества. Готовый бланк и пример заполнения.",
    keywords: [
      "Акт приема-передачи имущества образец",
      "Скачать акт приема-передачи имущества",
      "Бланк акта приема-передачи имущества",
      "Как составить акт приема-передачи имущества",
      "Пример акта приема-передачи имущества",
    ],
  },
  3958: {
    title: "Расписка в получении денег – Скачать образец",
    description:
      "Как написать расписку о получении денег? Готовый бланк расписки для скачивания.",
    keywords: [
      "Расписка в получении денег образец",
      "Скачать бланк расписки",
      "Как написать расписку о получении денег",
      "Пример расписки",
      "Расписка о передаче денег скачать",
    ],
  },
};

// Функция для генерации мета-тегов
export async function generateMetadata({ params }: { params: { id: string } }) {
  const meta = documentMetaData[params.id] || {
    title: "Документ – Скачать бесплатно",
    description: "Официальный бланк документа для скачивания.",
    keywords: ["документ", "скачать шаблон", "юридические документы"],
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(", "),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://zandocs.kz/documents/${params.id}`,
    },
  };
}

// Основной компонент страницы
const Page = ({ params }: { params: { id: string } }) => {
  const DocumentComponent = <DocsContent id={params.id} />;

  return (
    <Suspense fallback={<Loader isLoader={true} />}>
      {DocumentComponent}
    </Suspense>
  );
};

export default Page;
