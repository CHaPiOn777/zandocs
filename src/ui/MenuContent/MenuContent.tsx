"use client";
import useIsTablet from "@/hooks/useIsTablet";
import { List, ListItem, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import Exit from "@/image/Account/icons/Exit";
import Order from "@/image/Account/icons/Order";
import Profile from "@/image/Account/icons/Profile";
import Setting from "@/image/Account/icons/Setting";
import useIsDesktopXS from "@/hooks/useIsDesktopXS";
const MenuContent = ({
  setDrawerOpen,
}: {
  setDrawerOpen?: (isOpen: boolean) => void;
}) => {
  const pathname = usePathname();
  const isTablet = useIsTablet();
  const isDesktopXS = useIsDesktopXS();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<number | null>(0);

  const addColorByIndex = (index: number) => {
    return activeTab === index ? "#2640E3" : "#333B47";
  };
  const clickActiveTab = (index: number, page: string) => {
    setActiveTab(index);
    router.push(page);
    if (isTablet && setDrawerOpen) {
      setDrawerOpen(false); // Закрываем меню после навигации
    }
  };

  useEffect(() => {
    const index = objData.findIndex((item) => item.page === pathname);
    setActiveTab(index);
  }, [pathname]);
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
  return (
    <>
      <Typography
        sx={{
          textTransform: "uppercase",
          paddingLeft: "32px",
          paddingTop: "32px",
          paddingBottom: isDesktopXS ? "16px" : "",
        }}
        variant="h5"
      >
        Личный кабинет
      </Typography>
      <List sx={{ display: "flex", flexDirection: "column", padding: "0" }}>
        {objData.map(({ title, icon, page }, index) => (
          <ListItem
            onClick={() => clickActiveTab(index, page)}
            sx={{
              gap: "6px",
              alignItems: "stretch",
              display: "flex",
              padding: "12px 32px",
              transition: "all .2s ease",
              cursor: "pointer",
              color: `${activeTab === index ? "#2640E3" : "#333B47"}`,
              "&:last-child": {
                borderTop: "1px solid #8DBAFF80",
                // marginTop: "10px",
                padding: "26px 32px",
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
    </>
  );
};

export default memo(MenuContent);
