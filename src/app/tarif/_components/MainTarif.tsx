"use client";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { Stack, Typography } from "@mui/material";
import bg from "@/image/Tarif/bg.png";
import React from "react";

const MainTarif = () => {
  return (
    <MainCntainer>
      <Container sx={{ marginTop: "160px", gap: "24px" }} column>
        <Stack
          sx={{
            background: "#F3F9FE99",
            backdropFilter: "blur(31px)",
            width: "520px",
            borderRadius: "4px",
            padding: "36px 40px",
          }}
        >
          <Typography sx={{ textTransform: "uppercase" }} variant="h2">
            выбери{" "}
            <span
              style={{
                color: "#2640E3",
              }}
            >
              свой идеальный
            </span>{" "}
            тарифный{" "}
            <span
              style={{
                color: "#2640E3",
              }}
            >
              план
            </span>
          </Typography>
          <Typography variant="body1" mt={2}>
            Выберите оптимальное решение, <br /> соответствующее вашим
            потребностям и целям
          </Typography>
        </Stack>
      </Container>
      <ImageBG bg={bg} />
    </MainCntainer>
  );
};

export default MainTarif;
