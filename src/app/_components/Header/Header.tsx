"use client";
import * as SC from "./Header.style";
import { Box, Stack, Typography } from "@mui/material";
import LogoComponent from "@/ui/Logo/Logo";
import { usePathname, useRouter } from "next/navigation";
import Tenge from "@/image/Account/icons/Tenge";
import Basket from "@/image/Account/icons/Basket";
import SearchIcon from "@/image/icons/SearchIcon";
import CustomButton from "@/ui/Button/CustomButton";
import { useAuthUser } from "@/store/authStore";
import UserThumbHead from "@/image/Account/icons/UserThumbHead";
import { useEffect, useState } from "react";
import MenuPopover from "@/app/account/_components/MenuPopover";
import CustomPopover from "@/ui/Popover/CustomPopover";
import { useBasket } from "@/store/basketStore";
type TMenuItems = {
  name: string;
  link: string;
};
const Header = () => {
  const cart = useBasket((state) => state.cart);

  const router = useRouter();
  const pathName = usePathname();
  const menuItems: TMenuItems[] = [
    {
      name: "Главная",
      link: "/main",
    },
    {
      name: "Документы",
      link: "/",
    },
    {
      name: "Тарифы",
      link: "/tarif",
    },
    {
      name: "О компании",
      link: "/",
    },
    {
      name: "Обучение ZanTech",
      link: "/",
    },
  ];
  const isAuth = useAuthUser((state) => state.isAuth);
  const [isAuthState, setIsAuthState] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuthState(isAuth);
  }, [isAuth]);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  if (isAuth === null) {
    return null;
  }
  return (
    <SC.HeaderBox>
      <SC.Header>
        <LogoComponent />
        <menu>
          <SC.List>
            {menuItems.map((item, index) => (
              <SC.ListItem
                $isActive={pathName === item.link}
                key={index}
                onClick={() => router.push(item.link)}
              >
                <Typography sx={{ lineHeight: 1 }} variant="subtitle2">
                  {item.name}
                </Typography>
              </SC.ListItem>
            ))}
          </SC.List>
        </menu>
        {isAuthState ? (
          <Stack direction="row" alignItems="center" gap="8px">
            <SC.Basket onClick={() => router.push("/basket")}>
              <Stack direction="row" gap="2px">
                <Typography sx={{ alignSelf: "end" }} variant="body2">
                  {cart?.totals?.total_price}
                </Typography>
                <Tenge />
              </Stack>
              <Stack sx={{ position: "relative" }}>
                <Basket />
                {cart?.items_count > 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      width: "18px",
                      height: "18px",
                      backgroundColor: "#2640E3",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "12px",
                        lineHeight: "16px",

                        color: "white",
                      }}
                    >
                      {cart?.items_count}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </SC.Basket>
            <CustomPopover
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              trigger={<UserThumbHead />}
            >
              <MenuPopover
                onMouseLeave={() => {
                  setAnchorEl(null);
                }}
              />
            </CustomPopover>
          </Stack>
        ) : (
          <Stack direction="row" spacing={2} alignItems="center">
            <Box width={24} height={24}>
              <SearchIcon />
            </Box>
            <CustomButton
              size="16"
              sx={{ padding: "14px 32px 12px" }}
              variant="primary"
              onClick={() => router.push("/register")}
            >
              Регистрация
            </CustomButton>
            <CustomButton
              size="16"
              sx={{ padding: "14px 32px 10px" }}
              variant="secondary"
              onClick={() => router.push("/login")}
            >
              Вход
            </CustomButton>
          </Stack>
        )}
      </SC.Header>
    </SC.HeaderBox>
  );
};

export default Header;
