"use client";
import * as SC from "./Footer.style";
import React from "react";
import bg from "@/image/Footer/BGFooter.png";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import LogoComponent from "@/ui/Logo/Logo";
import Email from "@/image/Footer/Email";

import Phone from "@/image/Footer/Phone";
import MenuItemComponent from "@/app/_components/Footer/_components/MenuItem";
import Location from "@/image/Footer/Location";
import useIsReady from "@/hooks/useIsReady";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";
export type TPropsMenu = {
  title: string;
  list: string[];
  link?: string;
  isLink: boolean;
  icons?: React.JSX.Element[];
};
const Footer = () => {
  const isMobile = useIsMobile();
  const router = useRouter();

  const obj: TPropsMenu[] = [
    // {
    //   title: "Тарифы",
    //   list: ["Пакет Стандарт", "Пакет Комфорт"],
    //   link: "/tarif/#tarifPlan",
    //   isLink: true,
    // },
    // {
    //   title: "Личный кабинет",
    //   list: ["Оформление заказа", "Корзина", "Заказы"],
    // },
    {
      title: "Контакты",
      list: [
        "Митина 4/1, Алматы, Республика Казахстан",
        "+7 (771) 378 80 39",
        "info@zandocs.kz",
      ],
      icons: [<Location key={1} />, <Phone key={2} />, <Email key={3} />],
      isLink: false,
    },
  ];
  const dataLast = [
    {
      name: "Реквизиты",
      link: "/company/#contacts",
    },
    {
      name: "Публичная оферта",
      link: "/oferta",
    },
    {
      name: "Политика конфиденциальности",
      link: "/private",
    },
  ];
  const ready = useIsReady();

  if (!ready) {
    return null;
  }
  return (
    <SC.Footer>
      <Stack>
        <ImageBG bg={bg} height={"560px"} />
      </Stack>

      <Container sx={{ margin: "80px 0", gap: "24px" }} column>
        <List
          sx={{
            flexDirection: isMobile ? "column" : "row",
            display: "flex",
            gap: "32px",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <Stack
            justifyContent="space-between"
            sx={{
              flexDirection: isMobile ? "row" : "column",
              alignItems: isMobile ? "flex-end" : "flex-start",
            }}
          >
            <LogoComponent />
            <Stack direction="row">
              {/* <Insta /> */}
              {/* <Telega /> */}
            </Stack>
          </Stack>
          {obj.map((item, index) => (
            <MenuItemComponent key={index} {...item} />
          ))}
        </List>

        <Typography
          sx={{
            color: "#333B47",
            paddingTop: "32px",
            borderTop: "1px solid #2640E3",
            marginTop: "48px",
          }}
          variant="subtitle1"
        >
          ZanDocs — это онлайн-компания, специализирующаяся на юридических
          технологиях, которая делает право более простым и доступным
          для физических и юридических лиц в Республике Казахстан. ZanDocs
          помогает частным и физическим лицам составлять юридические документы,
          получать консультацию юристов и предоставляет обучающие курсы
          для студентов и бизнес владельцев. Юридическая информация и другие
          услуги предоставляются ZanDocs через сайт zandocs.kz. Обратите
          внимание, что ZanDocs не обладает статусом юридического или налогового
          консультанта и не осуществляет представительство частных лиц в суде
          или перед третьими лицами. ZanDocs не заменяет адвоката, юриста,
          бухгалтера, бухгалтерскую или юридическую фирму. Использование ZanDocs
          регулируется нашими условиями предоставления услуг и Политикой
          конфиденциальности.
        </Typography>
      </Container>
      <Box
        sx={{
          width: "100vw",
          background: "#2640E3",
          padding: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container column={isMobile}>
          <Typography sx={{ color: "#FFFEFA" }} variant="body2">
            Все права защищены 2025
          </Typography>
          <List
            sx={{
              display: "flex",
              padding: "0",
              marginTop: isMobile ? "24px" : 0,
              alignItems: isMobile ? "left" : "center",
              gap: isMobile ? "8px" : "24px",
              flexDirection: isMobile ? "column" : "row",
              marginLeft: isMobile ? 0 : "auto",
            }}
          >
            {dataLast.map(({ name, link }, index) => (
              <ListItem
                key={index}
                onClick={() => link && router.push(link)}
                sx={{
                  display: "flex",
                  padding: "0",

                  width: "max-content",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFEFA",
                    cursor: "pointer",
                    "&::after": {
                      content: '""', // Добавляем пустое содержимое
                      position: "absolute",
                      bottom: "-4px", // Линия располагается под текстом
                      left: "50%", // Центрируем линию по горизонтали
                      width: "0%", // Изначальная ширина
                      height: "1px", // Толщина линии
                      backgroundColor: "#FFFEFA", // Цвет линии
                      transition: "all 0.2s ease", // Плавный переход
                      transform: "translateX(-50%)", // Сдвигаем к центру
                    },
                    "&:hover::after": {
                      width: "100%", // Линия расширяется до всей ширины текста
                    },
                  }}
                  variant="body2"
                >
                  {name}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </SC.Footer>
  );
};

export default Footer;
