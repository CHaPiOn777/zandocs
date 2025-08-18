"use client"; // Если используешь App Router (Next.js 13+)

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const useTabQueryUpdater = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateTabQuery = useCallback(
    (tabIndex: number) => {
      if (typeof window === "undefined") return; // Проверка на серверный рендеринг

      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tabIndex.toString());

      window.history.pushState(null, "", `${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  return updateTabQuery;
};

export default useTabQueryUpdater;
