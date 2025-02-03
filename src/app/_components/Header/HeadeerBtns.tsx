"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { TOnClick } from "@/image/Account/icons/Profile";
import SearchIcon from "@/image/icons/SearchIcon";
import { useAuthUser } from "@/store/authStore";
import CustomButton from "@/ui/Button/CustomButton";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { memo } from "react";

const HeadeerBtns = ({ onClick }: TOnClick) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const isAuth = useAuthUser((state) => state.isAuth);
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      marginTop={isMobile ? "auto" : "0"}
      spacing={isMobile ? 1 : 2}
      alignItems="center"
      onClick={() => onClick && onClick()}
    >
      {!isMobile && (
        <Box width={24} height={24}>
          <SearchIcon />
        </Box>
      )}
      {!isAuth && (
        <>
          <CustomButton
            size="16"
            fullWidth={isMobile}
            sx={{ padding: "14px 32px 12px" }}
            variant="primary"
            onClick={() => router.push("/register")}
          >
            Регистрация
          </CustomButton>
          <CustomButton
            size="16"
            fullWidth={isMobile}
            sx={{ padding: "14px 32px 10px" }}
            variant="secondary"
            onClick={() => router.push("/login")}
          >
            Вход
          </CustomButton>
        </>
      )}
    </Stack>
  );
};

export default memo(HeadeerBtns);
