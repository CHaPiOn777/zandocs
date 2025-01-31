"use client";
import BasketHeader from "@/app/_components/Header/BasketHeader";
import HeadeerBtns from "@/app/_components/Header/HeadeerBtns";
import Menu from "@/app/_components/Header/Menu";
import useIsMobile from "@/hooks/useIsMobile";
import CloseIcon from "@/image/icons/CloseIcon";
import { useAuthUser } from "@/store/authStore";
import LogoComponent from "@/ui/Logo/Logo";
import { Stack } from "@mui/material";
import React, { memo } from "react";

const SwipeableContent = ({ onClick }: { onClick: () => void }) => {
  const isMobile = useIsMobile();
  const isAuth = useAuthUser((state) => state.isAuth);

  return (
    <Stack
      sx={{
        height: "100vh",
        width: isMobile ? "100vw" : "420px",
        padding: "24px 20px",
        background: "#F3F9FE",
        borderRight: "1px solid #8DBAFF80",
      }}
    >
      <Stack
        onClick={onClick}
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
        <LogoComponent width={60} height={40} />
        {isAuth && <BasketHeader />}
        <CloseIcon />
      </Stack>
      <Menu onClick={onClick} />
      {isMobile && <HeadeerBtns onClick={onClick} />}
    </Stack>
  );
};

export default memo(SwipeableContent);
