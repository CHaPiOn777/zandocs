"use client";
import ImageBG from "@/ui/ImageBG/ImageBG";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import React from "react";
import bg from "@/image/AboutCompany/AboutBG.png";
import img from "@/image/AboutCompany/image.png";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Container from "@/app/_components/Container/Container";
import CustomButton from "@/ui/Button/CustomButton";
import Line from "@/ui/Line/Line";

const AboutCompany = () => {
  return (
    <MainCntainer>
      <ImageBG bg={bg} />
      <Container sx={{ marginTop: "150px", justifyContent: "space-between" }}>
        <Image src={img} width={462} height={400} alt="ноутбук" />
        <Stack width={550} gap={"24px"}>
          <Typography sx={{ textTransform: "uppercase" }} variant="h3">
            <span
              style={{
                color: "#2640E3",
              }}
            >
              удобные решения
            </span>{" "}
            для юридической{" "}
            <span
              style={{
                color: "#2640E3",
              }}
            >
              поддержки бизнеса и частных
            </span>{" "}
            клиентов
          </Typography>
          <Line />
          <Typography variant="body1">
            Мы предлагаем уникальные инструменты для быстрого и простого
            создания юридически значимых документов, которые&nbsp;соответствуют
            актуальным стандартам и законодательству.
          </Typography>
          <CustomButton
            sx={{ maxWidth: "100%", marginTop: "24px" }}
            variant="primary"
          >
            Создать документ
          </CustomButton>
        </Stack>
      </Container>
    </MainCntainer>
  );
};

export default AboutCompany;
