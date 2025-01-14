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
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 0.4s ease-in-out;
    `}
`;
const Steps = () => {
  const [step, setStep] = useState(1);
  const dataObj: TPropsSteps[] = [
    {
      id: 1,
      title: "Шаг 1",
      desc: "Выберите нужный документ",
      image: <Image width={604} height={360} alt="Шаг 1" src={step1} />,
    },
    {
      id: 2,
      title: "Шаг 2",
      desc: "Заполните информацию в форме",
      image: <Image width={604} height={360} alt="Шаг 1" src={step2} />,
    },
    {
      id: 3,
      title: "Шаг 3",
      desc: "Скачайте документ",
      image: <Image width={604} height={360} alt="Шаг 1" src={step3} />,
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
            конструктор
          </span>{" "}
          документов
        </Typography>
      </TitleComponents>
      <MainCntainer sx={{ flexDirection: "column", alignItems: "center" }}>
        <Stack flexDirection="row" sx={{ gap: "120px", position: "relative" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "67px",
              alignItems: "center",
            }}
          >
            {dataObj.map((item) => (
              <ListItem key={item.id}>
                <StepsItem step={step} setStep={setStep} {...item} />
              </ListItem>
            ))}
          </List>
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
          sx={{ width: "430px", marginTop: "48px" }}
          variant="primary"
        >
          Создать документ
        </CustomButton>
        <ImageBG bg={bg} />
      </MainCntainer>
    </>
  );
};

export default Steps;
