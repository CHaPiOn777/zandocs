"use client";

import { useDocsStore } from "@/store/docsStore";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import Container from "@/app/_components/Container/Container";
import useIsMobile from "@/hooks/useIsMobile";
import { Box, Stack, Typography } from "@mui/material";
import Loading from "@/ui/Loading/Loading";
import Line from "@/ui/Line/Line";
import CustomButton from "@/ui/Button/CustomButton";
import { useRouter } from "next/navigation";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import Tenge from "@/image/Account/icons/Tenge";
import FormPodpiska from "@/app/documents/[id]/_components/FormPodpiska";

const DocsContent = ({ id }: { id: string }) => {
  const isMobile = useIsMobile();
  const isDesctopXS = useIsDesktopXS();
  const router = useRouter();
  const documents = useDocsStore((state) => state.docs);
  const [isActiveForm, setIsActiveForm] = useState(false);
  const documentById = useMemo(
    () => documents.filter((docs) => docs.id == id),
    [documents, id]
  );
  const cleanText = useMemo(
    () => documentById[0]?.description.replace(/<\/?p>/g, ""),
    [documentById[0]?.description]
  );
  if (!documentById.length || !documents) {
    return <Loading />;
  }

  return (
    <MainCntainer sx={{ background: "#F3F9FE" }}>
      <Container
        sx={{ margin: isMobile ? "96px 0 " : "200px 0", gap: "24px" }}
        column
      >
        <CustomButton
          sx={{
            padding: "12px 16px",
            width: isMobile ? "calc(100vw - 32px)" : "200px",
            marginLeft: "auto",
          }}
          variant="secondary"
          size="16"
          fullWidth={isMobile}
          onClick={() => router.back()}
        >
          Назад
        </CustomButton>
        <Stack direction={isMobile ? "column" : "row"} spacing={"24px"}>
          <Stack
            spacing={3}
            sx={{
              minHeight: isDesctopXS ? "400px" : "458px",
              height: "auto",
              maxWidth: "810px",
              width: "100%",
            }}
          >
            <Typography
              variant={"body1"}
              sx={{
                color: "#2640E3",
                position: "relative",
                width: "max-content",
                cursor: "pointer",
                "&::after": {
                  content: '""', // Добавляем пустое содержимое
                  position: "absolute",
                  bottom: "-4px", // Линия располагается под текстом
                  left: "50%", // Центрируем линию по горизонтали
                  width: "0%", // Изначальная ширина
                  height: "1px", // Толщина линии
                  backgroundColor: "#2640E3", // Цвет линии
                  transition: "all 0.2s ease", // Плавный переход
                  transform: "translateX(-50%)", // Сдвигаем к центру
                },
                "&:hover::after": {
                  width: "100%", // Линия расширяется до всей ширины текста
                },
              }}
            >
              {documentById[0]?.categories[0].name}
            </Typography>
            <Typography variant={"h2"} sx={{ textTransform: "uppercase" }}>
              {documentById[0]?.name}
            </Typography>
            <Line />
            <Typography variant={"body2"} component={"span"}>
              {cleanText}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Typography
                variant={"h3"}
                sx={{
                  paddingBottom: "24px",
                  color: "#2640E3",
                  lineHeight: "1rem !important",
                }}
              >
                {documentById[0]?.price === "0"
                  ? "Бесплатно"
                  : documentById[0]?.price}
              </Typography>
              {documentById[0]?.price !== "0" && <Tenge color={"#2640E3"} />}
            </Stack>
            <CustomButton
              sx={{
                marginTop: "auto !important",
              }}
              variant="primary"
              onClick={() => setIsActiveForm(!isActiveForm)}
            >
              {isActiveForm ? "Скрыть документ" : "Заполнить документ"}
            </CustomButton>
          </Stack>
          {isMobile ? (
            <Box
              position={"relative"}
              width={"calc(100vw - 32px)"}
              height={"calc(100vw)"}
            >
              <Image
                style={{
                  border: "1px solid #2640E3",
                  borderRadius: "4px",
                  // position: "relative",
                }}
                objectFit={"cover"}
                fill
                src={documentById[0]?.images[0].src}
                alt={documentById[0]?.images[0].alt}
              />
            </Box>
          ) : (
            <Image
              style={{ border: "1px solid #2640E3", borderRadius: "4px" }}
              width={isDesctopXS ? 320 : 388}
              height={isDesctopXS ? 400 : 458}
              src={documentById[0]?.images[0].src}
              alt={documentById[0]?.images[0].alt}
            />
          )}
        </Stack>
        {isActiveForm && <FormPodpiska />}
      </Container>
    </MainCntainer>
  );
};

export default DocsContent;
