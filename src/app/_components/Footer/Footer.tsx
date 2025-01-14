"use client";
import * as SC from "./Footer.style";
import React from "react";
import bg from "@/image/Footer/BGFooter.png";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import { List, Stack, Typography } from "@mui/material";
import LogoComponent from "@/ui/Logo/Logo";
import Email from "@/image/Footer/Email";

import Phone from "@/image/Footer/Phone";
import MenuItemComponent from "@/app/_components/Footer/_components/MenuItem";
import Location from "@/image/Footer/Location";
import Insta from "@/image/icons/Insta";
import Telega from "@/image/icons/Telega";
export type TPropsMenu = {
  title: string;
  list: string[];
  icons?: React.JSX.Element[];
};
const Footer = () => {
  const obj: TPropsMenu[] = [
    {
      title: "Тарифы",
      list: ["Пакет Стандарт", "Пакет Комфорт", "Пакет Премиум"],
    },
    {
      title: "Личный кабинет",
      list: ["Оформление заказа", "Корзина", "Заказы"],
    },
    {
      title: "Контакты",
      list: [
        "8657 Elmwood Avenue, IN 46947",
        "(910) 658–2992",
        "Cryptocurrency@mail.com",
      ],
      icons: [<Location key={1} />, <Phone key={2} />, <Email key={3} />],
    },
  ];
  return (
    <SC.Footer>
      <Stack>
        <ImageBG bg={bg} height={"560px"} />
        <Stack direction="row">
          <Insta />
          <Telega />
        </Stack>
      </Stack>

      <Container sx={{ marginTop: "80px", gap: "24px" }} column>
        <Stack flexDirection="row" gap="100px">
          <LogoComponent />
          <List
            sx={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {obj.map((item, index) => (
              <MenuItemComponent key={index} {...item} />
            ))}
          </List>
        </Stack>
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
    </SC.Footer>
  );
};

export default Footer;
