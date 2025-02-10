"use client";
import bg from "@/image/main/bgMain.png";
import { Typography } from "@mui/material";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import CustomButton from "@/ui/Button/CustomButton";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";

const Main = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <MainCntainer>
      <Container
        sx={{ marginTop: isMobile ? "96px" : "250px", gap: "24px" }}
        column
      >
        <Typography
          sx={{ textTransform: "uppercase" }}
          maxWidth={660}
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
        <Typography
          marginTop={isMobile ? "100px" : "0"}
          maxWidth={isTablet ? 350 : 650}
          textAlign={isMobile ? "center" : "left"}
          variant="body1"
        >
          Надёжный и удобный конструктор документов для бизнеса и частных лиц
        </Typography>
        <CustomButton
          fullWidth={isMobile}
          sx={{ maxWidth: isMobile ? "100%" : "240px", marginTop: "24px" }}
          variant="primary"
        >
          Создать документ
        </CustomButton>
      </Container>
      <ImageBG
        height={isMobile ? "250px" : "700px"}
        left={isMobile ? "-92px" : isTablet ? "-226px" : "0"}
        bg={bg}
      />
    </MainCntainer>
  );
};

export default Main;
