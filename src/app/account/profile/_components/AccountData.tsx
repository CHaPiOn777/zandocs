"use client";

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
  return (
    <WrapperBorderContent dataTabs={data}>
      <Stack direction="row" gap="16px" alignItems="center" px={"32px"}>
        <UserThumb />
        <Typography sx={{ textTransform: "uppercase" }} variant={"h5"}>
          Добро пожаловать,{" "}
          <span
            style={{
              color: "#2640E3",
            }}
          >
            {user?.name}
          </span>
        </Typography>
      </Stack>
      <Stack gap="8px" px={"32px"}>
        <Typography variant="body2">Имя пользователя: {user?.name}</Typography>
        <Typography variant="body2">Email: {user?.user_email}</Typography>
      </Stack>
    </WrapperBorderContent>
  );
};

export default AccountData;
