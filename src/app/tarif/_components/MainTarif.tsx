"use client";
import Container from "@/app/_components/Container/Container";
import ImageBG from "@/ui/ImageBG/ImageBG";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { Typography } from "@mui/material";
import bg from "@/image/Tarif/bg.png";
import React from "react";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";

const MainTarif = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <MainCntainer sx={{ padding: isMobile ? 0 : "" }}>
      <Container
        sx={{
          marginTop: isTablet ? "250px" : "200px",
          gap: "24px",
        }}
        column
      >
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            x: -200,
          }}
          // style={{ marginLeft: "auto" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",

            x: 0,
          }} // Анимация запускается при появлении
          viewport={{ once: true }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
          transition={{
            duration: 0.4,
            // delay: 0.2 * index,
            ease: "easeOut",
          }}
          style={{
            background: "#F3F9FE99",
            backdropFilter: "blur(31px)",
            width: "520px",
            borderRadius: "4px",
            padding: "36px 40px",
            ...(isMobile
              ? {
                  width: "100%",
                  marginTop: "48px",
                  background:
                    "linear-gradient(179.13deg, rgba(255, 255, 255, 0) 33.16%, rgba(0, 136, 255, 0.4) 115.27%)",
                }
              : {}),
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              textAlign: isMobile ? "center" : "left",
            }}
            variant="h2"
          >
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
          <Typography
            sx={{ textAlign: isMobile ? "center" : "left" }}
            variant="body1"
            mt={2}
          >
            Выберите оптимальное решение, <br /> соответствующее вашим
            потребностям и целям
          </Typography>
        </motion.div>
      </Container>
      <ImageBG
        top={isMobile ? "80px" : "0"}
        height={isMobile ? "220px" : undefined}
        width={isMobile ? "100%" : isTablet ? "200vw" : null}
        reverce={isTablet}
        bg={bg}
      />
    </MainCntainer>
  );
};

export default MainTarif;
