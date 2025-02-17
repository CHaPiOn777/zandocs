"use client"; // Обязательно для клиентских компонентов

import { useEffect } from "react";
import axios from "axios";
import { useAuthUser } from "@/store/authStore"; // Измените на актуальный путь
import { useBasket } from "@/store/basketStore"; // Измените на актуальный путь
import { getMyBasket, getMyInfo, getMyProducts } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import { useDocsStore } from "@/store/docsStore";

const AuthAndCartLoader = () => {
  const setUser = useAuthUser((state) => state.setUser);
  const setCart = useBasket((state) => state.setCart);
  const setIsLoading = useAuthUser((state) => state.setIsLoading);
  const isAuth = useAuthUser((state) => state.isAuth);
  const setMyDocs = useDocsStore((state) => state.setMyDocs);

  useEffect(() => {
    const getMyInfoData = async () => {
      try {
        setIsLoading(true); // Включаем индикатор загрузки

        // Параллельные запросы
        const [userInfo, basketInfo, myProducts] = await Promise.all([
          getMyInfo(),
          getMyBasket(),
          getMyProducts(),
        ]);

        setMyDocs(myProducts.data.data);
        // Устанавливаем данные из запросов
        setUser(userInfo.data);
        setCart(basketInfo.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          notify("error", err?.response?.data?.message || "Ошибка сервера");
        }
      } finally {
        setIsLoading(false); // Отключаем индикатор загрузки в любом случае
      }
    };

    if (isAuth) {
      getMyInfoData();
    }
  }, [isAuth, setIsLoading, setUser, setCart]);

  return null; // Этот компонент не рендерит ничего
};

export default AuthAndCartLoader;
