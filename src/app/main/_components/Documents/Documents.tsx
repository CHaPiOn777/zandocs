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
export type TDataDocuments = {
  title: React.JSX.Element;
  desc: string;
  list: string[];
  reverse: boolean;
  image: StaticImageData;
};
const Documents = () => {
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
            старта
          </span>{" "}
          вашего
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
          документы{" "}
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
          paddingBottom: "100px",
        }}
      >
        <ImageBG bg={bg} height="120%" />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginTop: "100px",
          }}
        >
          {dataObj.map((item, index) => (
            <ListItem key={index}>
              <ContentCard {...item} />
            </ListItem>
          ))}
        </List>
      </MainCntainer>
    </>
  );
};

export default Documents;
