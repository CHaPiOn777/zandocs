"use client";
import bg from "@/image/main/bgMain.png";
import { Typography } from "@mui/material";
import Container from "@/app/_components/Container/Container";
import CustomButton from "@/ui/Button/CustomButton";
import ImageBG from "@/ui/ImageBG/ImageBG";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";

const Main = () => {
  return (
    <MainCntainer>
      <Container sx={{ marginTop: "250px", gap: "24px" }} column>
        <Typography
          sx={{ textTransform: "uppercase" }}
          width={660}
          variant="h1"
        >
          Создай{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            Юридические Документы
          </span>{" "}
          За Минуты
        </Typography>
        <Typography width={650} variant="body1">
          Надёжный и удобный конструктор документов для бизнеса и частных лиц
        </Typography>
        <CustomButton
          sx={{ maxWidth: "240px", marginTop: "24px" }}
          variant="primary"
        >
          Создать документ
        </CustomButton>
      </Container>
      <ImageBG bg={bg} />
    </MainCntainer>
  );
};

export default Main;
