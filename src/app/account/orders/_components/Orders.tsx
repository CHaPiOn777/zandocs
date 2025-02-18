/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getOrders } from "@/api/authApi";
import CustomTable, {
  Column,
} from "@/app/account/orders/_components/CustomTable";
import { useAuthUser } from "@/store/authStore";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useOrders } from "@/store/ordersStore";
import axios from "axios";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import { Box, Stack, Typography } from "@mui/material";
import CustomButton from "@/ui/Button/CustomButton";
import DocsIcon from "@/image/Account/Docs.png";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";
import ColumnsDocuments from "@/ui/ColumnsDocuments/ColumnsDocuments";

type TDataTableCollapse = {
  id: number;
  product_id: number;
  price: number;
  link: string;
  date: Date | null;
  name: string;
};
const Orders = () => {
  const user = useAuthUser((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const orders = useOrders((state) => state.orders);
  const isMobile = useIsMobile();
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
      label: isMobile ? "" : "Действия",
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
  const toggleCollapse = () => {
    setActiveCollapseTable((prev) => !prev);
  };
  const refContainer = useRef<HTMLDivElement | null>(null);

  const scrollToElement = (clientY?: number) => {
    if (refContainer.current) {
      const containerPosition =
        refContainer.current.getBoundingClientRect().top + window.scrollY;

      const offset = 200;
      window.scrollTo({
        top: clientY ? clientY : containerPosition - offset, // Прокрутка с учётом отступа
        behavior: "smooth", // Плавная прокрутка
      });
    }
  };
  const [rowsCollapse, setRowsCollapse] = useState<
    (string | number | React.JSX.Element | null)[][]
  >([]);
  const [prevScrollValue, setPrevScrollValue] = useState(0);
  const router = useRouter();
  const openTableData = (line_items: TDataTableCollapse[]) => {
    const rows = line_items?.map((item, index) => [
      item.name,
      item.price,
      null,
      <Typography
        key={index}
        component={"span"}
        onClick={() => router.push(`/documents/${item.product_id}`)}
        variant="body2"
        sx={{
          // margin: "0 40px",
          justifyContent: "center",
          display: "flex",
          color: "#2640E3",
          cursor: "pointer",
          position: "relative", // Обязательно для использования ::after
          transition: "all 0.2s ease",
          "&::after": {
            content: '""', // Добавляем пустое содержимое
            position: "absolute",
            bottom: "-4px", // Линия располагается под текстом
            left: "50%", // Центрируем линию по горизонтали
            width: "0%", // Изначальная ширина
            height: "1px", // Толщина линии
            backgroundColor: "#2640E3", // Цвет линии
            transition: "all 0.2s ease", // Плавный переход
            transform: "translateX(-50%)", // Сдвигаем к центру
          },
          "&:hover::after": {
            width: "60%", // Линия расширяется до всей ширины текста
          },
        }}
      >
        Скачать
      </Typography>,
    ]);

    setRowsCollapse(rows);
    toggleCollapse();
    scrollToElement();
    setPrevScrollValue(window.scrollY);
  };
  const closeTableCollapse = () => {
    toggleCollapse();
    scrollToElement(prevScrollValue);
  };
  const [activeCollapseTable, setActiveCollapseTable] = useState(false);
  const rows = useMemo(
    () =>
      orders.map((order) => {
        const line_items = order[order.length - 1];
        const newArr = [...order];
        newArr.splice(
          -1,
          1,
          <Typography
            component={"span"}
            onClick={() => openTableData(line_items)}
            variant="body2"
            sx={{
              // margin: "0 40px",
              justifyContent: "center",
              display: "flex",
              color: "#2640E3",
              cursor: "pointer",
              position: "relative", // Обязательно для использования ::after
              transition: "all 0.2s ease",
              "&::after": {
                content: '""', // Добавляем пустое содержимое
                position: "absolute",
                bottom: "-4px", // Линия располагается под текстом
                left: "50%", // Центрируем линию по горизонтали
                width: "0%", // Изначальная ширина
                height: "1px", // Толщина линии
                backgroundColor: "#2640E3", // Цвет линии
                transition: "all 0.2s ease", // Плавный переход
                transform: "translateX(-50%)", // Сдвигаем к центру
              },
              "&:hover::after": {
                width: "60%", // Линия расширяется до всей ширины текста
              },
            }}
          >
            Просмотр
          </Typography>
        );
        return newArr;
      }),
    [orders]
  );
  const loadNextPage = useCallback(() => {
    setIsFirstRender(true);
    setPage((prev) => (prev += 1));
  }, []);
  return (
    <Stack
      ref={refContainer}
      direction="row"
      sx={{ width: "100%", maxWidth: "832px" }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <CustomTable
          iconTitle={DocsIcon}
          isLoadingTable={isLoading ? !orders.length : false}
          loadNextPage={loadNextPage}
          rows={rows}
          isLoading={isLoading}
          columns={columns as Column<any>[]}
          title={"Мои заказы"}
        />
        {/* Выезжающий блок */}
        <Box
          sx={{
            position: "absolute",
            background:
              "linear-gradient(259.49deg, #FAFAFA 3.69%, #EFF8FF 110.74%)",

            top: 0,
            right: activeCollapseTable ? 0 : "-110%", // Скрыт за пределами экрана
            height: "100%", // Высота равна высоте экрана
            width: "100%", // Ширина выезжающего блока
            backgroundColor: "#f5f5f5", // Цвет фона
            boxShadow: "-4px 0 8px rgba(0, 0, 0, 0.1)", // Тень
            zIndex: 1200, // Накладываемый поверх контента
            transition: "right 0.3s ease-in-out", // Анимация выезда
          }}
        >
          <CustomTable
            button={
              <CustomButton
                sx={{ marginLeft: "auto", padding: "12px 20px" }}
                variant={"secondary"}
                size="16"
                onClick={closeTableCollapse}
              >
                Назад
              </CustomButton>
            }
            iconTitle={DocsIcon}
            rows={rowsCollapse}
            columns={ColumnsDocuments() as Column<any>[]}
            title={"Товары в заказе"}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Orders;
