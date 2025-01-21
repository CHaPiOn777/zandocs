import Container from "@/app/_components/Container/Container";
import Line from "@/ui/Line/Line";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import komfort from "@/image/tarif/komfort.png";
import standart from "@/image/tarif/standart.png";
import Tenge from "@/image/Account/icons/Tenge";
import CheckBoxIcon from "@/image/Documents/CheckBoxIcon";
import * as SC from "./Subsc.style";
import CustomButton from "@/ui/Button/CustomButton";
import CheckBoxIconBlue from "@/image/Documents/CheckBoxIconBlue";
import {
  addToCardByBasket,
  createInvoice,
  getMyBasket,
  getMyBasketURL,
  getProducts,
} from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useOrders } from "@/store/ordersStore";

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
  useEffect(() => {
    getMyBasket();
    //   getProducts();
  }, []);
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
    try {
      if (isBusket) {
        setisLoadingBasket(true);
        const { data } = await addToCardByBasket({
          id: id,
          quantity: 1,
        });

        notify("success", data.message);
        setOrdersPrice(ordersPrice + price);
        await getMyBasket();
      } else {
        setIsLoadingByeCard(true);
        const { data } = await createInvoice({
          amount: Number(10),
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
      <Container sx={{ margin: "90px 0", gap: "24px" }} column>
        <Stack gap={"16px"} alignItems="center">
          <Typography
            width={"720px"}
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

          <SC.ListST>
            {data.map(
              (
                { iconImg, title, price, data, disabled, id, priceStr },
                index
              ) => (
                <SC.ListItemST key={index}>
                  <SC.TitleWrap>
                    {iconImg}
                    <Stack>
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
                        lineHeight: "31.4px",
                      }}
                      variant="h1"
                    >
                      {priceStr}
                    </Typography>
                    <Tenge size={40} color={"#2640E3"} />
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
                    direction="row"
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
        </Stack>
      </Container>
    </MainCntainer>
  );
};

export default Subscription;
