"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import TransitionsModal, { TOpenProps } from "@/ui/Modal/Modal";
import { Stack, Typography } from "@mui/material";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
import LoginForm from "@/app/(auth)/login/_components/LoginForm";
export type TToggleVisibleDocs = {
  toggleVisibleDocs?: () => void;
};
const LoginModal = ({
  isOpenModal,
  setIsOpenModal,
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
          setIsOpenAuthModal={setIsOpenModal}
          marginTop={"20px"}
        />
      </Stack>
    </TransitionsModal>
  );
};

export default LoginModal;
