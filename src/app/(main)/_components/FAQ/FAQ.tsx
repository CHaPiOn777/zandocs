"use client";

import Container from "@/app/_components/Container/Container";
import FAQItem from "@/app/(main)/_components/FAQ/_components/FAQItem";
import ImageBG from "@/ui/ImageBG/ImageBG";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import TitleComponents from "@/ui/TitleComponents/TitleComponents";
import { Stack, Typography } from "@mui/material";
import React from "react";
import bg from "@/image/BGLST.png";
import Line from "@/ui/Line/Line";
import CustomButton from "@/ui/Button/CustomButton";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export type TDataFAQ = {
  title: string;
  desc: string;
  number: string;
  span?: string;
};
const FAQ = () => {
  const dataObj: TDataFAQ[] = [
    {
      title: "Что такое ZanDocs?",
      desc: "Это платформа для быстрого и удобного создания юридических документов онлайн.",
      number: "01",
    },
    {
      title: "Кто может использовать ZanDocs?",
      desc: "Платформа предназначена для предпринимателей, студентов, юристов и всех, кто нуждается в юридических документах.",
      number: "02",
    },
    {
      title: "Безопасен ли ZanDocs?",
      desc: "Да, мы гарантируем уровень защиты данных и конфиденциальность информации пользователей.",
      number: "03",
    },
    {
      title: "Что такое ZanTech Academy?",
      desc: "Это образовательная платформа, предлагающая курсы для студентов юридического факультета и для предпринимателей. Студенты могут укрепить свои знания в области права, а предприниматели — освоить основы юридической грамотности для ведения бизнеса.",
      number: "04",
    },
    {
      title: "Что делать при проблемах на сайте?",
      desc: "Попробуйте обновить страницу или очистить кэш браузера. Если проблема сохраняется, обратитесь в нашу службу поддержки: ",
      span: "info@zandocs.kz",
      number: "05",
    },
  ];
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const router = useRouter();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <TitleComponents>
        <Typography sx={{ textAlign: "center" }} variant={"h2"}>
          Часто{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            задаваемые <br />
          </span>{" "}
          вопросы{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            (FAQ)
          </span>
        </Typography>
      </TitleComponents>
      <MainCntainer
        sx={{
          background: "#c2e5ff20",
          paddingBottom: "100px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container sx={{ marginTop: "80px", gap: "8px" }} column>
          {dataObj.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: 160, scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }} // Анимация запускается при появлении
              viewport={{ once: true, amount: 0.4 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
              transition={{
                duration: 0.3,
                delay: 0.13 * index,
                ease: "easeOut",
              }}
            >
              <FAQItem
                handleChange={handleChange}
                expanded={expanded}
                {...item}
              />
            </motion.div>
          ))}
        </Container>
        <motion.div
          // key={item.number}
          initial={{ opacity: 0, y: 160, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }} // Анимация запускается при появлении
          viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
          transition={{
            duration: 0.4,
            // delay: 0.2 * index,
            ease: "easeOut",
          }}
        >
          <Stack mt={"150px"} alignItems={"center"}>
            <Typography
              maxWidth={"1228px"}
              sx={{ textTransform: "uppercase" }}
              textAlign={"center"}
              variant="h3"
              mb={2}
            >
              Zandocs.kz — это{" "}
              <span
                style={{
                  color: "#2640E3",
                }}
              >
                инновационная{" "}
              </span>
              платформа для{" "}
              <span
                style={{
                  color: "#2640E3",
                }}
              >
                создания и автоматизации
              </span>{" "}
              юридических документов
            </Typography>
            <Line />
            <Typography
              variant="body1"
              textAlign="center"
              maxWidth="900px"
              mt={3}
            >
              Мы помогаем бизнесу и частным лицам легко и быстро оформлять
              важные юридические документы, экономя время и ресурсы. Наша
              миссия — сделать юридические услуги доступными, понятными
              и удобными для каждого.
            </Typography>
            <CustomButton
              size="20"
              sx={{ padding: "20px 32px", marginTop: "48px" }}
              variant="secondary"
              onClick={() => router.push("/company")}
            >
              Узнать больше о компании
            </CustomButton>
          </Stack>
        </motion.div>
        <ImageBG height={"940px"} bg={bg} opacity={0.5} />
      </MainCntainer>
    </>
  );
};

export default FAQ;
