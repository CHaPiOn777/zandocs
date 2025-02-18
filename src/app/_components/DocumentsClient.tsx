/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Обязательно для клиентского компонента

import { useDocsStore } from "@/store/docsStore";
import { useEffect } from "react";

interface Props {
  initialDocs: any[];
}

export default function DocumentsClient({ initialDocs }: Props) {
  const setDocs = useDocsStore((state) => state.setDocs); // Zustand: функция для установки документов
  // Сохраняем данные из серверного компонента в стор при первой загрузке
  useEffect(() => {
    setDocs(initialDocs);
  }, [initialDocs, setDocs]);

  return null; // Этот компонент не рендерит ничего сам по себе
}
