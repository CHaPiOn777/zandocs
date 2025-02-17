/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import ImageBG from "@/ui/ImageBG/ImageBG";
import bg from "@/image/BGLogin.png";
import MainCntainer from "@/ui/MainCntainer/MainCntainer";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomButton from "@/ui/Button/CustomButton";
import { login, resetPassword } from "@/api/authApi";
import CustomInput from "@/ui/Inputs/CustomInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthUser } from "@/store/authStore";
import ResetModal from "@/app/(auth)/login/resetModal";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import axios from "axios";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import LoginForm from "@/app/(auth)/login/_components/LoginForm";

const Page = () => {
  const isMobile = useIsMobile();
  return (
    <MainCntainer>
      <ImageBG top={"-100px"} height={"1150px"} bg={bg} />

      <motion.div
        // key={item.number}
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          scale: 0.8,
        }}
        style={{
          padding: "20px",
          gap: isMobile ? "40px" : "100px",
          flexDirection: isMobile ? "column" : "row",
          display: "flex",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }} // Анимация за // Анимация запускается при появлении
        viewport={{ once: true, amount: 0.2 }} // `once: true` - срабатывает 1 раз, `amount: 0.2` - 20% в видимости
        transition={{
          duration: 0.4,
          // delay: 0.2 * index,
          ease: "easeOut",
        }}
      >
        <Stack
          maxWidth={"400px"}
          gap={isMobile ? "20px" : "64px"}
          mt="140px"
          alignItems="center"
        >
          <Typography
            sx={{ textTransform: "uppercase", color: "#2640E3" }}
            variant="h2"
            alignSelf={"flex-start"}
          >
            Авторизация
          </Typography>
          <Typography variant="body1">
            Войдите, чтобы продолжить работу с&nbsp;вашими документами.
          </Typography>
        </Stack>
        <LoginForm />
      </motion.div>
    </MainCntainer>
  );
};

export default Page;
