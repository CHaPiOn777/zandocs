"use client";

import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import TitleComponents from "@/ui/TitleComponents/TitleComponents";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import step1 from "@/image/Steps/step1.png";
import step2 from "@/image/Steps/step2.png";
import step3 from "@/image/Steps/step3.png";
import Image from "next/image";
import StepsItem from "@/app/main/_components/Steps/_components/StepsItem";
import CustomButton from "@/ui/Button/CustomButton";
import ImageBG from "@/ui/ImageBG/ImageBG";
import bg from "@/image/Steps/BGSteps.png";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";
import Container from "@/app/_components/Container/Container";
import { GlobalMedia } from "@/styles/globalStyles";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export type TPropsSteps = {
  id: number;
  title: string;
  desc: string;
  image: React.JSX.Element;
};
export const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const ImageWrapper = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 604px;
  height: 360px;
  @media ${GlobalMedia.mobile} {
    width: 100vw;
    height: auto;
  }
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 0.4s ease-in-out;
    `}
`;
const Steps = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const [step, setStep] = useState(1);
  const router = useRouter();

  const dataObj: TPropsSteps[] = [
    {
      id: 1,
      title: "Шаг 1",
      desc: "Выберите нужный документ",
      image: (
        <Image
          width={isMobile ? 442 : 604}
          height={isMobile ? 214 : 360}
          alt="Шаг 1"
          src={step1}
        />
      ),
    },
    {
      id: 2,
      title: "Шаг 2",
      desc: "Заполните информацию в форме",
      image: (
        <Image
          width={isMobile ? 442 : 604}
          height={isMobile ? 214 : 360}
          alt="Шаг 1"
          src={step2}
        />
      ),
    },
    {
      id: 3,
      title: "Шаг 3",
      desc: "Скачайте документ",
      image: (
        <Image
          width={isMobile ? 442 : 604}
          height={isMobile ? 214 : 360}
          alt="Шаг 1"
          src={step3}
        />
      ),
    },
  ];

  return (
    <>
      <TitleComponents>
        <Typography
          sx={{ textTransform: "uppercase", textAlign: "center" }}
          variant={"h2"}
        >
          Как работает{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            <br />
            конструктор
          </span>{" "}
          документов
        </Typography>
      </TitleComponents>
      <MainCntainer sx={{ flexDirection: "column", alignItems: "center" }}>
        <Container
          sx={{ margin: isTablet ? "40px 0" : "100px 0", alignItems: "center" }}
          column
        >
          <motion.div
            initial={{ opacity: 0, y: 160 }}
            whileInView={{ opacity: 1, y: 0 }} // Анимация запускается при появлении
            viewport={{ once: true, amount: 0.5 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack
              flexDirection={isTablet ? "column-reverse" : "row"}
              sx={{ gap: isTablet ? "40px" : "120px", position: "relative" }}
              alignItems="center"
            >
              <List
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: isTablet ? "row" : "column",
                  gap: isTablet ? "30px" : "67px",
                  alignItems: isTablet ? "flex-start" : "center",
                  padding: 0,
                }}
              >
                {dataObj.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{ padding: 0, display: "flex", flexDirection: "row" }}
                  >
                    <StepsItem step={step} setStep={setStep} {...item} />
                  </ListItem>
                ))}
                {!isTablet && (
                  <Box
                    height="220px"
                    width="2px"
                    sx={{
                      position: "absolute",
                      background: "#3374ff30",
                      top: "40px",
                      left: "24px",
                      zIndex: -1,
                    }}
                  />
                )}
                {isTablet && (
                  <Box
                    height="2px"
                    width="65%"
                    sx={{
                      position: "absolute",
                      background: "#3374ff30",
                      top: "25px",
                      left: isMobile ? "71px" : "90px",
                      zIndex: -1,
                    }}
                  />
                )}
              </List>

              {step === dataObj[0].id && (
                <ImageWrapper isVisible={step === dataObj[0].id}>
                  {dataObj[0].image}
                </ImageWrapper>
              )}
              {step === dataObj[1].id && (
                <ImageWrapper isVisible={step === dataObj[1].id}>
                  {dataObj[1].image}
                </ImageWrapper>
              )}
              {step === dataObj[2].id && (
                <ImageWrapper isVisible={step === dataObj[2].id}>
                  {dataObj[2].image}
                </ImageWrapper>
              )}
            </Stack>

            <CustomButton
              size={isMobile ? "16" : "20"}
              sx={{ width: isMobile ? "100%" : "430px", marginTop: "48px" }}
              variant="primary"
              onClick={() => router.push("/documents")}
            >
              Создать документ
            </CustomButton>
          </motion.div>
        </Container>
        <ImageBG top={isTablet ? "100px" : "0"} bg={bg} />
      </MainCntainer>
    </>
  );
};

export default Steps;
