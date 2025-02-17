import Container from "@/app/_components/Container/Container";
import Line from "@/ui/Line/Line";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import komfort from "@/image/Tarif/komfort.png";
import standart from "@/image/Tarif/standart.png";
import Tenge from "@/image/Account/icons/Tenge";
import * as SC from "./Subsc.style";
import CheckBoxIconBlue from "@/image/Documents/CheckBoxIconBlue";
import useIsMobile from "@/hooks/useIsMobile";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import { motion } from "framer-motion";
import ButtonsBuy from "@/ui/ButtonsBuy/ButtonsBuy";

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

  const isMobile = useIsMobile();
  const isDesktopXS = useIsDesktopXS();

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
                  <ButtonsBuy
                    disabled={disabled}
                    id={id}
                    price={price}
                    title={title}
                  />
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
