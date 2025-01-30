"use client";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import TitleComponents from "@/ui/TitleComponents/TitleComponents";
import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "@/image/Profile/bgEducation.png";
import iconEdication from "@/image/Profile/iconEdication.png";
import Image from "next/image";
import useIsTablet from "@/hooks/useIsTablet";

const EducationPage = () => {
  const data = [
    {
      title:
        "Магистратура по швейцарскому праву (Master of Arts in Legal Studies)",
      desc: "Университет Фрибурга, Швейцария (2025)",
    },
    {
      title:
        'Магистр бизнес-права, специализация "Право цифрового рынка и данных" (Master 2 - Droit des affaires, parcours Droit du marché digital et des données)',
      desc: "Католический университет Лиона, Франция (2023–2024)",
    },
    {
      title:
        "Магистр международного коммерческого права (LL.M. in International Business Law)",
      desc: "Католический университет Лиона, Франция (2021–2022)",
    },
    {
      title: "Бакалавр права (LL.B. Bachelor of Laws)",
      desc: "Университет KIMEP, Алматы, Казахстан (2015–2020)",
    },
  ];
  const isTablet = useIsTablet();
  return (
    <>
      <TitleComponents height="74px">
        <Container sx={{ paddingLeft: isTablet ? "20px" : "0" }}>
          <Typography
            sx={{ textTransform: "uppercase", textAlign: "left" }}
            variant={"h3"}
          >
            Образование
          </Typography>
        </Container>
      </TitleComponents>
      <MainCntainer sx={{ background: "#F3F9FE", minHeight: "auto" }}>
        <Container
          sx={{
            margin: isTablet ? "40px 0" : "80px 0 80px 104px",
            gap: "24px",
          }}
          column
        >
          <List
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {data.map(({ title, desc }, index) => (
              <ListItem
                sx={{
                  padding: 0,
                  display: "flex",
                  gap: "16px",
                }}
                key={index}
              >
                <Stack
                  sx={{
                    background: "#0088FF1A",
                    borderRadius: "6px",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "78px",
                    height: "78px",
                  }}
                >
                  <Image
                    width={32}
                    height={32}
                    alt=""
                    // quality={100}
                    src={iconEdication}
                  />
                </Stack>
                <Stack gap={"8px"} sx={{ maxWidth: "900px" }}>
                  <Typography variant={"body1"}>{title}</Typography>
                  <Typography variant={"body2"}>{desc}</Typography>
                </Stack>
              </ListItem>
            ))}
          </List>
        </Container>
        <ImageBG top="-280px" height="900px" bg={bg} />
      </MainCntainer>
    </>
  );
};

export default EducationPage;
