"use client";
import useIsMobile from "@/hooks/useIsMobile";
import { Stack } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const TitleComponents = ({
  children,
  height,
}: {
  children: React.ReactNode;
  height?: string;
}) => {
  const isMobile = useIsMobile();
  const heightBySize = !height ? (isMobile ? "88px" : "164px") : height;
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }} // Анимация запускается при появлении
      viewport={{ once: true, amount: 0.5 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
      transition={{
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Stack
        sx={{
          background: "var(--titleBG)",
          width: "100vw",
          height: heightBySize,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Stack>
    </motion.div>
  );
};

export default TitleComponents;
