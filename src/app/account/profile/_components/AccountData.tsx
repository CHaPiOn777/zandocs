"use client";

import useIsMobile from "@/hooks/useIsMobile";
import UserThumb from "@/image/Account/icons/UserThumb";
import { useAuthUser } from "@/store/authStore";
import WrapperBorderContent from "@/ui/WrapperBorderContent/WrapperBorderContent";
import { Stack, Typography } from "@mui/material";
import React from "react";

const AccountData = () => {
  const user = useAuthUser((state) => state.user);
  const data = [
    {
      title: "Изменить профиль",
      link: "/account/settings",
    },
    {
      title: "Изменить пароль",
      link: "/account/settings",
    },
    {
      title: "Выйти",
      link: "/logout",
    },
  ];
  const isMobile = useIsMobile();
  return (
    <WrapperBorderContent dataTabs={data}>
      <Stack
        direction="row"
        gap="16px"
        alignItems="center"
        px={isMobile ? "16px" : "32px"}
      >
        <UserThumb />
        <Typography sx={{ textTransform: "uppercase" }} variant={"h5"}>
          {!isMobile && "Добро пожаловать, "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            {user?.name}
          </span>
        </Typography>
      </Stack>
      <Stack gap="8px" px={isMobile ? "16px" : "32px"}>
        <Typography variant="body1">
          Имя пользователя:{" "}
          <Typography variant="body2" component="span">
            {user?.name}
          </Typography>
        </Typography>
        <Typography variant="body1">
          Email:{" "}
          <Typography variant="body2" component="span">
            {user?.user_email}
          </Typography>
        </Typography>
      </Stack>
    </WrapperBorderContent>
  );
};

export default AccountData;
