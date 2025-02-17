/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TransitionsModal, { TOpenProps } from "@/ui/Modal/Modal";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { resetPassword, resetPassword2 } from "@/api/authApi";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import CustomInput from "@/ui/Inputs/CustomInput";
import CustomButton from "@/ui/Button/CustomButton";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import LoginForm from "@/app/(auth)/login/_components/LoginForm";
export type TToggleVisibleDocs = {
  toggleVisibleDocs?: () => void;
};
const LoginModal = ({
  isOpenModal,
  setIsOpenModal,
  toggleVisibleDocs,
}: TOpenProps & TToggleVisibleDocs) => {
  const isDesktopXS = useIsDesktopXS();

  return (
    <TransitionsModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <Stack
        sx={{
          boxShadow: "0px 8px 16px 0px #8E8DD01F",
          background: "#F3F9FE",
          borderRadius: "4px",
          padding: isDesktopXS ? "20px" : "40px",
          //   maxWidth: "604px",
          gap: "24px",
          "&:focus-visible": {
            border: "none",
            outline: "none",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", color: "#2640E3" }}
        >
          Авторизация
        </Typography>
        <Typography variant="body2">
          Чтобы продолжить работу с документа, пожалуйста, авторизуйтесь!
        </Typography>
        <LoginForm
          isModal
          toggleVisibleDocs={toggleVisibleDocs}
          setIsOpenAuthModal={setIsOpenModal}
          marginTop={"20px"}
        />
      </Stack>
    </TransitionsModal>
  );
};

export default LoginModal;
