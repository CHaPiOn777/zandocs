/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getOrders } from "@/api/authApi";
import CustomTable, {
  Column,
} from "@/app/account/orders/_components/CustomTable";
import { useAuthUser } from "@/store/authStore";
import { useCallback, useEffect, useState } from "react";
import { useOrders } from "@/store/ordersStore";
import axios from "axios";
import { notify } from "@/ui/ToastProvider/ToastProvider";

const Orders = () => {
  const user = useAuthUser((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const orders = useOrders((state) => state.orders);
  const setOrders = useOrders((state) => state.setOrders);
  const setIsFirstRender = useOrders((state) => state.setIsFirstRender);
  const isFirstRender = useOrders((state) => state.isFirstRender);
  const [page, setPage] = useState(1);
  const columns = [
    {
      label: "Заказ",
      key: "0",
    },
    {
      label: "Дата",
      key: "1",
    },
    {
      label: "Статус",
      key: "2",
    },
    {
      label: "Итого",
      key: "3",
    },
    {
      label: "Действия",
      key: "4",
    },
  ];
  useEffect(() => {
    if (!user) return;
    const getMyOrders = async () => {
      try {
        setIsLoading(true); // Включаем индикатор загрузки
        const { data } = await getOrders(String(user.id), page); // Выполняем запрос

        // const { dataDD } = await getDownloads(String(user.id), page); // Выполняем запрос
        // await addProduct({
        //   user_id: user.id,
        //   file_id: 2360,
        // }); // Выполняем запрос
        // await resetProduct({ user_id: String(user.id) });
        // const { data123 } = await getMyProducts(page); // Выполняем запрос
        setOrders(data);
        // console.log(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          notify("error", err?.response?.data.message);
        }
      } finally {
        setIsFirstRender(false);
        setIsLoading(false); // Отключаем индикатор загрузки
      }
    };
    if (isFirstRender) {
      getMyOrders();
    }
  }, [user, page]);

  const loadNextPage = useCallback(() => {
    setIsFirstRender(true);
    setPage((prev) => (prev += 1));
  }, []);
  return (
    <CustomTable
      isLoadingTable={!orders.length}
      loadNextPage={loadNextPage}
      rows={orders}
      isLoading={isLoading}
      columns={columns as Column<any>[]}
      title={"Мои заказы"}
    />
  );
};

export default Orders;
