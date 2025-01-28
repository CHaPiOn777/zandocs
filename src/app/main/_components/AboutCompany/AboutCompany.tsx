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
import useIsDesktopXS from "@/hooks/useIsDesktopXS";

const AboutCompany = () => {
  const isDesktopXS = useIsDesktopXS();
  return (
    <MainCntainer>
      <ImageBG bg={bg} />
      <Container
        sx={{
          margin: isDesktopXS ? "60px 0" : "100px 0",
          justifyContent: "space-between",
          gap: isDesktopXS ? "32px" : "0",
          alignItems: "center",
        }}
        column={isDesktopXS}
      >
        <Image
          src={img}
          width={isDesktopXS ? 300 : 462}
          height={isDesktopXS ? 270 : 400}
          alt="ноутбук"
        />
        <Stack
          width={isDesktopXS ? "100%" : "550px"}
          gap={"24px"}
          alignItems={isDesktopXS ? "center" : "left"}
        >
          <Typography
            sx={{ textTransform: "uppercase" }}
            textAlign={isDesktopXS ? "center" : "left"}
            variant="h3"
          >
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
          <Typography
            variant="body1"
            textAlign={isDesktopXS ? "center" : "left"}
          >
            Мы предлагаем уникальные инструменты для быстрого и простого
            создания юридически значимых документов, которые&nbsp;соответствуют
            актуальным стандартам и законодательству.
          </Typography>
          <CustomButton
            fullWidth={isDesktopXS}
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
