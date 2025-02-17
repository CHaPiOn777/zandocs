"use client";

import { useDocsStore } from "@/store/docsStore";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import Image from "next/image";
import React, { ReactElement, useCallback, useMemo, useState } from "react";
import Container from "@/app/_components/Container/Container";
import useIsMobile from "@/hooks/useIsMobile";
import { Box, Stack, Typography } from "@mui/material";
import Loading from "@/ui/Loading/Loading";
import Line from "@/ui/Line/Line";
import CustomButton from "@/ui/Button/CustomButton";
import { useRouter } from "next/navigation";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import Tenge from "@/image/Account/icons/Tenge";
import parse from "html-react-parser";
import { motion } from "framer-motion";

import { useAuthUser } from "@/store/authStore";
import LoginModal from "@/app/(auth)/login/_components/LoginModal";
import dynamic from "next/dynamic";
const FormPodpiska = dynamic(
  () => import("@/app/documents/[id]/_components/FormPodpiska")
);
const ActPriemki = dynamic(
  () => import("@/app/documents/[id]/_components/ActPriemki")
);
const Doverennost = dynamic(
  () => import("@/app/documents/[id]/_components/Doverennost")
);
const Zaim = dynamic(() => import("@/app/documents/[id]/_components/Zaim"));
const Darenie = dynamic(
  () => import("@/app/documents/[id]/_components/Darenie")
);
const DocsContent = ({ id }: { id: string }) => {
  const isMobile = useIsMobile();
  const isDesctopXS = useIsDesktopXS();
  const router = useRouter();
  const documents = useDocsStore((state) => state.docs);
  const isAuth = useAuthUser((state) => state.isAuth);
  const [isActiveForm, setIsActiveForm] = useState(false);
  const documentById = useMemo(
    () => documents.filter((docs) => docs.id == id),
    [documents, id]
  );
  console.log(documentById);
  const parseText = useMemo(
    () => (documentById.length ? parse(documentById[0]?.description) : null),
    [documentById[0]?.description]
  );
  const [isOpenAuthModal, setisOpenAuthModal] = useState(false);
  const toggleVisibleDocs = () => {
    setIsActiveForm(!isActiveForm);
  };
  const authOrVisibleDocs = () => {
    if (isAuth) {
      toggleVisibleDocs();
    } else {
      setisOpenAuthModal(true);
    }
  };
  const returnDocsById = useCallback((id: string): ReactElement | null => {
    const data: Record<string, ReactElement> = {
      "3958": <FormPodpiska />,
      "7642": <ActPriemki />,
      "7650": <Doverennost />,
      "7652": <Zaim />,
      "7658": <Darenie />,
    };

    return data[id] || null;
  }, []);

  if (!documentById.length || !documents) {
    return <Loading />;
  }
  const goBack = () => {
    // window.scrollTo(0, 0); // Скроллим страницу наверх
    router.back(); // Возвращаемся на предыдущую страницу
  };
  return (
    <MainCntainer sx={{ background: "#edf7ff" }}>
      <Container
        sx={{ margin: isMobile ? "96px 0 " : "200px 0", gap: "24px" }}
        column
      >
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            x: 200,
          }}
          style={{ marginLeft: "auto" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",

            x: 0,
          }} // Анимация запускается при появлении
          viewport={{ once: true, amount: 0.1 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
          transition={{
            duration: 0.4,
            // delay: 0.2 * index,
            ease: "easeOut",
          }}
        >
          <CustomButton
            sx={{
              padding: "12px 16px",
              width: isMobile ? "calc(100vw - 32px)" : "200px",
            }}
            variant="secondary"
            size="16"
            fullWidth={isMobile}
            onClick={() => goBack()}
          >
            Назад
          </CustomButton>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          style={{
            // marginLeft: "auto",
            display: "flex",
            gap: "24px",
            flexDirection: isMobile ? "column" : "row",
          }}
          viewport={{ once: true, amount: 0.1 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
          transition={{
            duration: 0.4,
            // delay: 0.2 * index,
            ease: "easeOut",
          }}
        >
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
            {/* <Typography variant={"body2"} component={"span"}> */}
            {parseText}
            {/* </Typography> */}

            <Stack
              direction={"row"}
              sx={{ paddingBottom: "24px" }}
              spacing={1}
              alignItems={"center"}
            >
              <Typography
                variant={"h3"}
                sx={{
                  color: "#2640E3",
                  lineHeight: "1rem !important",
                }}
              >
                {documentById[0]?.price === "0"
                  ? "Бесплатно"
                  : documentById[0]?.price}
              </Typography>
              {documentById[0]?.price !== "0" && (
                <Tenge color={"#2640E3"} size={isMobile ? 14 : 16} />
              )}
            </Stack>
            <CustomButton
              sx={{
                marginTop: "auto !important",
              }}
              variant="primary"
              onClick={() => authOrVisibleDocs()}
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
        </motion.div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActiveForm
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            overflow: "hidden",
            // background: "lightblue",
            // padding: isActiveForm ? "10px" : "0px",
          }} // overflow нужен, чтобы контент не вылезал
        >
          {returnDocsById(id)}
        </motion.div>
      </Container>
      <LoginModal
        isOpenModal={isOpenAuthModal}
        setIsOpenModal={setisOpenAuthModal}
        toggleVisibleDocs={toggleVisibleDocs}
      />
    </MainCntainer>
  );
};

export default DocsContent;
