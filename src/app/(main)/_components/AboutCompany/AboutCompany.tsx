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
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const AboutCompany = () => {
  const router = useRouter();
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
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }} // Анимация запускается при появлении
          viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={img}
            width={isDesktopXS ? 300 : 462}
            height={isDesktopXS ? 270 : 400}
            alt="ноутбук"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }} // Анимация запускается при появлении
          viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
              создания юридически значимых документов,
              которые&nbsp;соответствуют актуальным стандартам
              и законодательству.
            </Typography>
            <CustomButton
              fullWidth={isDesktopXS}
              sx={{ maxWidth: "100%", marginTop: "24px" }}
              variant="primary"
              onClick={() => router.push("/documents")}
            >
              Создать документ
            </CustomButton>
          </Stack>
        </motion.div>
      </Container>
    </MainCntainer>
  );
};

export default AboutCompany;
