"use client";

import { useDocsStore } from "@/store/docsStore";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import Image from "next/image";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
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

// {#is_legal_entity2}
// в денежной форме на сумму {name2} тенге.
// {/is_legal_entity2}
// {#is_individual2}
// в виде {passport2} на сумму {name2} тенге.
// {/is_individual2}

// {#is_entrepreneur2}
// {name2} паспорт {passport2}, ИИН {iin2}, далее по тексту – « Участник 2 ».
// {/is_entrepreneur2}

// {#is_legal_entity2}
// {name2} в лице {passport2}, действующего на основании {iin2}, с другой стороны, заключили настоящий Договор купли-продажи товара в рассрочку (далее – «Договор» или «настоящий Договор») о нижеследующем:
// {/is_legal_entity2}
// {#is_individual2}
// {name2} паспорт {passport2}, ИИН {iin2}, с другой стороны, заключили настоящий Договор купли-продажи товара в рассрочку (далее – «Договор» или «настоящий Договор») о нижеследующем:
// {/is_individual2}
// {#is_entrepreneur2}
// {name2} паспорт {passport2}, ИИН {iin2}, с другой стороны, заключили настоящий Договор купли-продажи товара в рассрочку (далее – «Договор» или «настоящий Договор») о нижеследующем:
// {/is_entrepreneur2}
// {#is_legal_entity3}
// {name3} в лице {passport3}, действующего на основании {iin3}, именуемый в дальнейшем «Должник» с другой стороны,
// {/is_legal_entity3}
// {#is_individual3}
// {name3} паспорт {passport3}, ИИН {iin3}, именуемый в дальнейшем «Должник» с другой стороны,
// {/is_individual3}
// {#is_entrepreneur3}
// {name3} паспорт {passport3}, ИИН {iin3}, именуемый в дальнейшем «Должник» с другой стороны,
// {/is_entrepreneur3}

import FormPodpiska from "@/app/documents/[id]/_components/FormPodpiska";
import ActPriemki from "@/app/documents/[id]/_components/ActPriemki";
import Doverennost from "@/app/documents/[id]/_components/Doverennost";
import Zaim from "@/app/documents/[id]/_components/Zaim";
import Darenie from "@/app/documents/[id]/_components/Darenie";
import Arenda from "@/app/documents/[id]/_components/Arenda";
import ButtonsBuy from "@/ui/ButtonsBuy/ButtonsBuy";
import Vozmezdnoe from "@/app/documents/[id]/_components/Vozmezdnoe";
import KPRassrochka from "@/app/documents/[id]/_components/KPRassrochka";
import Garantia from "@/app/documents/[id]/_components/Garantia";
import Konsulting from "@/app/documents/[id]/_components/Konsulting";
import DKP from "@/app/documents/[id]/_components/DKP";
import Ustav from "@/app/documents/[id]/_components/Ustav";
import UchDog from "./_components/UchDogovor";
const DocsContent = ({ id }: { id: string }) => {
  const setActiveDoc = useDocsStore((state) => state.setActiveDoc);
  const isMobile = useIsMobile();
  const isDesctopXS = useIsDesktopXS();
  const router = useRouter();
  const documents = useDocsStore((state) => state.docs);
  const [isActiveForm, setIsActiveForm] = useState(false);
  const documentById = useMemo(
    () => documents.filter((docs) => docs.id == id),
    [documents, id]
  );
  useEffect(() => {
    setActiveDoc(documentById[0]);
  }, [documentById]);
  const parseText = useMemo(
    () => (documentById.length ? parse(documentById[0]?.description) : null),
    [documentById[0]?.description]
  );
  const activeDoc = useDocsStore((state) => state.activeDoc);
  const myDocs = useDocsStore((state) => state.myDocs);
  const isMyDocs = myDocs.some(({ product_id }) => product_id == activeDoc?.id);

  const toggleVisibleDocs = () => {
    setIsActiveForm(!isActiveForm);
  };

  const returnDocsById = useCallback((id: string): ReactElement | null => {
    const data: Record<string, ReactElement> = {
      "3958": <FormPodpiska />,
      "7642": <ActPriemki />,
      "7650": <Doverennost />,
      "7652": <Zaim />,
      "7658": <Darenie />,
      "2320": <Arenda />,
      "2360": <Vozmezdnoe />,
      "2340": <KPRassrochka />,
      "2368": <Garantia />,
      "2356": <Konsulting />,
      "2327": <DKP />,
      "2547": <Ustav />,
      "1800": <UchDog />,
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
            <Typography
              variant={"h2"}
              component="h1"
              sx={{ textTransform: "uppercase" }}
            >
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
                component="h2"
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
            {/* {false ? ( */}
            {Number(activeDoc?.price) > 0 && !isMyDocs ? (
              <ButtonsBuy
                id={activeDoc?.id}
                price={activeDoc?.price}
                title={activeDoc?.name}
                nameBtnTwice="Купить документ"
              />
            ) : (
              <CustomButton
                sx={{
                  marginTop: "auto !important",
                }}
                variant="primary"
                onClick={() => toggleVisibleDocs()}
              >
                {isActiveForm ? "Скрыть документ" : "Заполнить документ"}
              </CustomButton>
            )}
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
          }}
        >
          {isActiveForm && returnDocsById(id)}
        </motion.div>
      </Container>
    </MainCntainer>
  );
};

export default DocsContent;
