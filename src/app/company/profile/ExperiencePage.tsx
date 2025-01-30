"use client";
import Container from "@/app/_components/Container/Container";
import useIsTablet from "@/hooks/useIsTablet";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import TitleComponents from "@/ui/TitleComponents/TitleComponents";
import { Typography } from "@mui/material";
import React from "react";

const ExperiencePage = () => {
  const isTablet = useIsTablet();

  return (
    <>
      <TitleComponents height="74px">
        <Container sx={{ paddingLeft: isTablet ? "20px" : "0" }}>
          <Typography
            sx={{ textTransform: "uppercase", textAlign: "left" }}
            variant={"h3"}
          >
            Опыт работы
          </Typography>
        </Container>
      </TitleComponents>
      <MainCntainer sx={{ background: "#F3F9FE", minHeight: "auto" }}>
        <Container
          sx={{
            margin: isTablet ? "40px 0" : "80px 0 80px 104px",
            gap: "24px",
            color: "#333B47",
          }}
          column
        >
          <Typography sx={{ maxWidth: "800px" }} variant={"body2"}>
            Айзада Мустафина — основатель Zandocs.kz, платформы
            для автоматизации юридических документов, адаптированных
            под законодательство Казахстана. До создания собственного проекта
            работала юристом в международной медиа-компании Euronews во Франции,
            где занималась подготовкой и анализом контрактов, разрешением
            претензионных вопросов.
          </Typography>
          <Typography sx={{ maxWidth: "800px" }} variant={"body2"}>
            В Казахстане Айзада приобрела опыт в ведущих юридических фирмах,
            таких как Integrites и Sayat Zholshy and Partners, проходила
            стажировки консультируя клиентов по корпоративным, налоговым
            и миграционным вопросам, а также сопровождая сделки и проекты
            международного уровня.
          </Typography>
        </Container>
      </MainCntainer>
    </>
  );
};

export default ExperiencePage;
