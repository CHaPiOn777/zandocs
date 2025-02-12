"use client";
import React from "react";
import bg from "@/image/company/bg.png";
import bgTablet from "@/image/company/bgTablet.png";
import bgMobile from "@/image/company/bgMobile.png";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import { Typography } from "@mui/material";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";

const CompanyPageMain = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <MainCntainer
      sx={{
        ...(isMobile
          ? {
              paddingBottom: "40px",
              background:
                "linear-gradient(178.91deg, rgba(255, 255, 255, 0) 72.39%, rgba(0, 136, 255, 0.4) 115.03%)",
            }
          : {}),
      }}
    >
      <Container
        sx={{
          marginTop: isMobile ? "190px" : "280px",

          gap: "24px",
        }}
        column
      >
        <motion.div
          // key={item.number}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            x: -200,
          }}
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
          style={{
            borderRadius: "4px",
            padding: "36px 40px",
            background: "#FFFFFF99",
            backdropFilter: "blur(40px)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: isMobile ? "100vw" : "520px",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              textAlign: isMobile ? "center" : "left",
            }}
            maxWidth={400}
            variant="h2"
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
          <Typography
            sx={{ textAlign: isMobile ? "center" : "left" }}
            maxWidth={isMobile ? "300px" : "440px"}
            variant="body1"
          >
            Ваш надежный партнер в&nbsp;юридических&nbsp;услугах
          </Typography>
        </motion.div>
      </Container>
      <ImageBG
        top={"80px"}
        height={isMobile ? "200px" : undefined}
        width={isTablet ? "100vw" : undefined}
        bg={isMobile ? bgMobile : isTablet ? bgTablet : bg}
      />
    </MainCntainer>
  );
};

export default CompanyPageMain;
