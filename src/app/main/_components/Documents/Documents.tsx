"use client";

import ImageBG from "@/ui/ImageBG/ImageBG";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import TitleComponents from "@/ui/TitleComponents/TitleComponents";
import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import bg from "@/image/Documents/BGDocuments.png";
import image1 from "@/image/Documents/01.png";
import image2 from "@/image/Documents/02.png";
import ContentCard from "@/app/main/_components/Documents/_components/ContentCard";
import { StaticImageData } from "next/image";
import useIsTablet from "@/hooks/useIsTablet";
import Container from "@/app/_components/Container/Container";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import { motion } from "framer-motion";

export type TDataDocuments = {
  title: React.JSX.Element;
  desc: string;
  list: string[];
  reverse: boolean;
  image: StaticImageData;
};
const Documents = () => {
  const isTablet = useIsTablet();
  const isDesktopXS = useIsDesktopXS();

  const dataObj: TDataDocuments[] = [
    {
      title: (
        <Typography sx={{ textTransform: "uppercase" }} variant={"h3"} mb={1}>
          Документы для 
          <span
            style={{
              color: "#2640E3",
            }}
          >
            старта{" "}
          </span>
          вашего{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            бизнеса
          </span>
        </Typography>
      ),
      desc: "Юридические документы, необходимые для создания и ведения бизнеса — от регистрации до соглашений с учредителями и сотрудниками",
      list: [
        "Устав",
        "Учредительный договор",
        "Трудовые договоры",
        "Соглашение о конфиденциальности",
      ],
      reverse: false,
      image: image1,
    },
    {
      title: (
        <Typography sx={{ textTransform: "uppercase" }} variant={"h3"} mb={1}>
          Документы для 
          <span
            style={{
              color: "#2640E3",
            }}
          >
            частных лиц
          </span>{" "}
        </Typography>
      ),
      desc: "Шаблоны для повседневных юридических нужд: доверенности, договора аренды, завещания и другие личные документы легко и быстро",
      list: [
        "Доверенность",
        "Договор аренды",
        "Завещание",
        "Соглашения о дарении",
      ],
      reverse: true,
      image: image2,
    },
  ];
  return (
    <>
      <TitleComponents>
        <Typography
          sx={{ textTransform: "uppercase", textAlign: "center" }}
          variant={"h2"}
        >
          <span
            style={{
              color: "#2640E3",
            }}
          >
            юридические
          </span>{" "}
          документы <br />
          <span
            style={{
              color: "#2640E3",
            }}
          >
            для любых нужд
          </span>
        </Typography>
      </TitleComponents>
      <MainCntainer
        sx={{
          background: "#c2e5ff20",
          // paddingBottom: "100px",
        }}
      >
        <Container sx={{ margin: isDesktopXS ? "48px 0" : "100px 0" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: isDesktopXS ? "32px" : "80px",
              padding: 0,
              width: "100%",
            }}
          >
            {dataObj.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -90 : 90 }}
                whileInView={{ opacity: 1, x: 0 }} // Анимация запускается при появлении
                viewport={{ once: true, amount: 0.5 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
                transition={{ duration: 0.6, ease: "easeOut" }}
                // style={{ position: "absolute", top: top, left: left, zIndex: -1 }}
              >
                <ListItem sx={{ padding: 0 }}>
                  <ContentCard {...item} />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Container>
        <ImageBG bg={bg} height={isTablet ? "100%" : "120%"} />
      </MainCntainer>
    </>
  );
};

export default Documents;
