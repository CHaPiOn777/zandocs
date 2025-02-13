import Container from "@/app/_components/Container/Container";
import Line from "@/ui/Line/Line";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import komfort from "@/image/Tarif/komfort.png";
import standart from "@/image/Tarif/standart.png";
import Tenge from "@/image/Account/icons/Tenge";
import * as SC from "./Subsc.style";
import CustomButton from "@/ui/Button/CustomButton";
import CheckBoxIconBlue from "@/image/Documents/CheckBoxIconBlue";
import { addToCardByBasket, createInvoice, getMyBasket } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useOrders } from "@/store/ordersStore";
import { useBasket } from "@/store/basketStore";
import useIsMobile from "@/hooks/useIsMobile";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import { useAuthUser } from "@/store/authStore";
import { motion } from "framer-motion";

type TPropsData = {
  iconImg: React.JSX.Element;
  title: string;
  priceStr: string;
  price: number;
  data: string[];
  disabled: boolean;
  id: number;
};

const Subscription = () => {
  const [isLoadingBasket, setisLoadingBasket] = useState<boolean>(false);
  const [isLoadingByeCard, setIsLoadingByeCard] = useState<boolean>(false);
  const setIsFirstRender = useOrders((state) => state.setIsFirstRender);
  const setOrdersPrice = useOrders((state) => state.setOrdersPrice);
  const ordersPrice = useOrders((state) => state.ordersPrice);

  const data: TPropsData[] = [
    {
      iconImg: (
        <Image
          quality={100}
          width={72}
          height={72}
          alt={"Пакет стандарт"}
          src={standart}
        />
      ),
      title: "Пакет стандарт",
      priceStr: "10 000",
      price: 10000,
      id: 858,
      data: [
        "Устав на русском языке",
        "Учредительный договор",
        "Решение об открытии ТОО",
      ],
      disabled: false,
    },
    {
      iconImg: (
        <Image width={72} height={72} alt={"Пакет комфорт"} src={komfort} />
      ),
      title: "Пакет комфорт",
      priceStr: "50 000",
      price: 50000,
      id: 817,
      data: [
        "Включает в себя пакет “Стандарт”",
        "Трудовые отношения",
        "Доступ к 50 докуметам при ведении бизнеса",
        "Перевод устава на казахский и английские языки",
        "Приказ о вступлении в должность первого руководителя",
      ],
      disabled: true,
    },
  ];
  const isAuth = useAuthUser((state) => state.isAuth);

  const setCart = useBasket((state) => state.setCart);
  const isMobile = useIsMobile();
  const isDesktopXS = useIsDesktopXS();

  const router = useRouter();
  const addBusket = async ({
    id,
    price,
    title = "Покупка товара",
    isBusket = false,
  }: {
    id: number;
    price: number;
    title?: string;
    isBusket?: boolean;
  }) => {
    if (!isAuth) {
      return notify(
        "error",
        <div>
          <Typography variant="body2">
            Сначала авторизуйтесь.{" "}
            <Typography
              variant="body2"
              component="span"
              onClick={() => router.push("login")}
              sx={{
                color: "#2640E3",
                position: "relative",
                cursor: "pointer",
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
                  width: "40px", // Линия расширяется до всей ширины текста
                },
              }}
            >
              Вход
            </Typography>
          </Typography>
        </div>
      );
    }
    try {
      if (isBusket) {
        setisLoadingBasket(true);
        await addToCardByBasket({
          id: id,
          quantity: 1,
        });

        notify("success", "Товар добавлен в корзину");
        setOrdersPrice(ordersPrice + price);
        const { data: cart } = await getMyBasket();
        setCart(cart);
      } else {
        setIsLoadingByeCard(true);
        const { data } = await createInvoice({
          amount: price,
          description: title,
          items: [
            {
              product_id: id,
              quantity: 1,
            },
          ],
        });
        router.push(data.data.invoice_url);
        notify("success", data.message);
      }

      setIsFirstRender(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notify("error", error?.response?.data.message);
      }
    } finally {
      setisLoadingBasket(false);
      setIsLoadingByeCard(false);
    }
  };

  return (
    <MainCntainer sx={{ background: "#0088FF0D" }}>
      <Container
        sx={{ margin: isMobile ? "50px 0" : "90px 0", gap: "24px" }}
        column
      >
        <motion.div
          // key={item.number}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.8,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
          }}
          // style={{ marginLeft: "auto" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
          }} // Анимация за // Анимация запускается при появлении
          viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
          transition={{
            duration: 0.4,
            // delay: 0.2 * index,
            ease: "easeOut",
          }}
        >
          <Typography
            maxWidth={"720px"}
            sx={{ textTransform: "uppercase", textAlign: "center" }}
            variant="h2"
          >
            Оформите{" "}
            <span
              style={{
                color: "#2640E3",
              }}
            >
              подписку{" "}
            </span>
            <span
              style={{
                color: "#2640E3",
              }}
            >
              для бесплатного{" "}
            </span>
            доступа
          </Typography>
          <Line />

          <SC.ListST id="tarifPlan">
            {data.map(
              (
                { iconImg, title, price, data, disabled, id, priceStr },
                index
              ) => (
                <SC.ListItemST key={index}>
                  <SC.TitleWrap>
                    <Stack
                      sx={{
                        padding: isMobile ? "6px" : "10px",
                        background: "#D4EAFD",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                      }}
                    >
                      {iconImg}
                    </Stack>
                    <Stack sx={{ gap: "8px" }}>
                      <Typography sx={{ color: "#8B8CA0" }} variant="body1">
                        Подписка
                      </Typography>
                      <Typography
                        sx={{ textTransform: "uppercase" }}
                        variant="h3"
                      >
                        {title}
                      </Typography>
                    </Stack>
                  </SC.TitleWrap>
                  <Stack alignItems={"flex-end"} direction="row">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        color: "#2640E3",
                        lineHeight: isMobile
                          ? "18px !important"
                          : "31.4px !important",
                      }}
                      variant="h1"
                    >
                      {priceStr}
                    </Typography>
                    <Tenge
                      size={isMobile ? 20 : isDesktopXS ? 30 : 40}
                      color={"#2640E3"}
                    />
                    <Typography
                      sx={{ color: "#8B8CA0", alignSelf: "flex-end" }}
                      variant="body1"
                    >
                      /в месяц
                    </Typography>
                  </Stack>
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {data.map((item, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          padding: 0,
                          gap: "16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <CheckBoxIconBlue />
                        <Typography variant={"body2"}>{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                  <Stack
                    marginTop={"auto"}
                    direction={isMobile ? "column" : "row"}
                    gap={"12px"}
                    width="100%"
                  >
                    {!disabled && (
                      <CustomButton
                        sx={{
                          marginTop: "auto",
                          width: "100%",
                          opacity: disabled || isLoadingBasket ? 0.6 : 1,
                          gap: "12px",
                        }}
                        size="20"
                        variant="secondary"
                        onClick={() => addBusket({ id, price, isBusket: true })}
                        disabled={isLoadingBasket || disabled}
                        isCircular={disabled ? false : true}
                      >
                        В корзину
                      </CustomButton>
                    )}
                    <CustomButton
                      sx={{
                        width: "100%",
                        opacity: disabled || isLoadingByeCard ? 0.6 : 1,
                        gap: "12px",
                      }}
                      size="20"
                      variant="primary"
                      onClick={() => addBusket({ id, price, title })}
                      disabled={isLoadingByeCard || disabled}
                      isCircular={disabled ? false : true}
                    >
                      {disabled ? "Скоро" : "Оформить подписку"}
                    </CustomButton>
                  </Stack>
                </SC.ListItemST>
              )
            )}
          </SC.ListST>
        </motion.div>
      </Container>
    </MainCntainer>
  );
};

export default Subscription;
