"use client";
import React from "react";
import bg from "@/image/company/bg.png";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import { Box, Typography } from "@mui/material";

const CompanyPageMain = () => {
  return (
    <MainCntainer>
      <Container sx={{ marginTop: "200px", gap: "24px" }} column>
        <Box
          sx={{
            padding: "36px 40px",
            background: "#FFFFFF99",
            backdropFilter: "blur(40px)",
            maxWidth: "520px",
          }}
        >
          <Typography
            sx={{ textTransform: "uppercase" }}
            width={400}
            variant="h1"
          >
            компания{" "}
            <span
              style={{
                color: "#2640E3",
              }}
            >
              Zandocs.kz
            </span>
          </Typography>
          <Typography width={440} variant="body1">
            Ваш надежный партнер в юридических услугах
          </Typography>
        </Box>
      </Container>
      <ImageBG bg={bg} />
    </MainCntainer>
  );
};

export default CompanyPageMain;
