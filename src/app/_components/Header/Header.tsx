"use client";
import * as SC from "./Header.style";
import { Stack } from "@mui/material";
import LogoComponent from "@/ui/Logo/Logo";
import { useAuthUser } from "@/store/authStore";
import { useEffect, useMemo, useState } from "react";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";
import Menu from "@/app/_components/Header/Menu";
import SwipeableTemporaryDrawer from "@/app/_components/Header/SwipeableTemporaryDrawer";
import HeaderAuthItem from "@/app/_components/Header/HeaderAuthItem";
import HeadeerBtns from "@/app/_components/Header/HeadeerBtns";
import useIsReady from "@/hooks/useIsReady";

const Header = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const ready = useIsReady();
  const isAuth = useAuthUser((state) => state.isAuth);
  const [isAuthState, setIsAuthState] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuthState(isAuth);
  }, [isAuth]);

  const size = useMemo(
    () => (isMobile ? "isMobile" : isTablet ? "isTablet" : "Big"),
    [isTablet, isMobile]
  );
  if (isAuth === null) {
    return null;
  }
  const returnDataHederBySize = (size: string) => {
    switch (size) {
      case "isTablet":
        return (
          <Stack direction="row" gap="16px" alignItems="center">
            <SwipeableTemporaryDrawer />
            <LogoComponent width={60} height={40} />
          </Stack>
        );

      case "isMobile":
        return (
          <>
            <SwipeableTemporaryDrawer />
            <LogoComponent width={60} height={40} />
          </>
        );

      default:
        return <LogoComponent />;
    }
  };
  if (!ready) {
    return null;
  }
  return (
    <SC.HeaderBox>
      <SC.Header>
        {returnDataHederBySize(size)}
        {!isTablet && <Menu />}
        {isAuthState ? <HeaderAuthItem /> : !isMobile ? <HeadeerBtns /> : null}
      </SC.Header>
    </SC.HeaderBox>
  );
};

export default Header;
