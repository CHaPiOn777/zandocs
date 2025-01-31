"use client";

import useIsTablet from "@/hooks/useIsTablet";
import Exit from "@/image/Account/icons/Exit";
import Order from "@/image/Account/icons/Order";
import Profile from "@/image/Account/icons/Profile";
import Setting from "@/image/Account/icons/Setting";
import CardWrapper from "@/ui/CardWrapper/CardWrapper";
import {
  List,
  ListItem,
  Typography,
  SwipeableDrawer,
  CssBaseline,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type TLeaveFunc = {
  onMouseLeave?: () => void;
};
import { styled } from "@mui/material/styles";
const Root = styled("div")(({ theme }) => ({
  height: "100%",
  position: "relative",
  // backgroundColor: ,
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.default,
  }),
}));
const StyledBox = styled("div")(({}) => ({
  backgroundColor: "#fff",
}));

const Puller = styled("div")(({}) => ({
  width: "10%",
  height: 6,
  backgroundColor: "#d6ecff",
  borderRadius: 3,
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: 8,
}));
const MenuPopover = ({ onMouseLeave }: TLeaveFunc) => {
  const isTablet = useIsTablet();
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const clickActiveTab = (index: number, page: string) => {
    setActiveTab(index);
    router.push(page);
    if (isTablet) {
      setDrawerOpen(false); // Закрываем меню после навигации
    }
  };

  const addColorByIndex = (index: number) => {
    return activeTab === index ? "#2640E3" : "#333B47";
  };

  const objData = [
    {
      page: "/account/profile",
      title: "Профиль",
      icon: <Profile color={addColorByIndex(0)} />,
    },
    {
      page: "/account/settings",
      title: "Настройки аккаунта",
      icon: <Setting color={addColorByIndex(1)} />,
    },
    {
      page: "/account/orders",
      title: "Мои заказы",
      icon: <Order color={addColorByIndex(3)} />,
    },
    {
      page: "/logout",
      title: "Выход",
      icon: <Exit color={addColorByIndex(5)} />,
    },
  ];

  useEffect(() => {
    const index = objData.findIndex((item) => item.page === pathname);
    setActiveTab(index);
  }, [pathname]);

  const menuContent = (
    <List sx={{ display: "flex", flexDirection: "column" }}>
      {objData.map(({ title, icon, page }, index) => (
        <ListItem
          onClick={() => clickActiveTab(index, page)}
          sx={{
            gap: "6px",
            alignItems: "stretch",
            display: "flex",
            padding: "10px 32px",
            transition: "all .2s ease",
            cursor: "pointer",
            color: `${activeTab === index ? "#2640E3" : "#333B47"}`,
            "&:last-child": {
              borderTop: "1px solid #8DBAFF80",
              marginTop: "10px",
              paddingTop: "20px",
            },
            "&:hover": {
              background: "#0088FF1A",
            },
          }}
          key={index}
        >
          {icon}
          <Typography variant="subtitle1">{title}</Typography>
        </ListItem>
      ))}
    </List>
  );

  if (false) {
    return (
      <Root>
        <CssBaseline />
        {/* <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: "30%",
              overflow: drawerOpen ? "visible" : "hidden",
            },
          }}
        /> */}

        <Typography
          variant="h5"
          sx={{ cursor: "pointer" }}
          onClick={toggleDrawer(true)}
        >
          Открыть меню
        </Typography>
        <SwipeableDrawer
          anchor="bottom"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <StyledBox
            sx={{
              height: "100%",
              position: "absolute",
              top: "-56px",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
            }}
          >
            <Puller />

            <Typography
              sx={{
                textTransform: "uppercase",
                paddingLeft: "32px",
                paddingTop: "20px",
              }}
              variant="h5"
            >
              Личный кабинет
            </Typography>
            {menuContent}
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    );
  }

  return (
    <CardWrapper size="small" onMouseLeave={onMouseLeave}>
      <Typography
        sx={{ textTransform: "uppercase", paddingLeft: "32px" }}
        variant="h5"
      >
        Личный кабинет
      </Typography>
      {menuContent}
    </CardWrapper>
  );
};

export default MenuPopover;
