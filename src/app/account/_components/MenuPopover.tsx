"use client";
import Docs from "@/image/Account/icons/Docs";
import Exit from "@/image/Account/icons/Exit";
import Order from "@/image/Account/icons/Order";
import Profile from "@/image/Account/icons/Profile";
import Setting from "@/image/Account/icons/Setting";
import CardWrapper from "@/ui/CardWrapper/CardWrapper";
import { List, ListItem, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export type TLeaveFunc = {
  onMouseLeave?: () => void;
};
const MenuPopover = ({ onMouseLeave }: TLeaveFunc) => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const router = useRouter();
  const pathname = usePathname();

  const clickActiveTab = (index: number, page: string) => {
    setActiveTab(index);
    router.push(page);
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
      page: "/account/docs",
      title: "Мои документы",
      icon: <Docs color={addColorByIndex(2)} />,
    },
    {
      page: "/account/orders",
      title: "Мои заказы",
      icon: <Order color={addColorByIndex(3)} />,
    },
    // {
    //   page: "/account/adress",
    //   title: "Платежный адрес",
    //   icon: <Adress color={addColorByIndex(4)} />,
    // },
    {
      page: "/logout",
      title: "Выход",
      icon: <Exit color={addColorByIndex(5)} />,
    },
  ];
  useEffect(() => {
    const index = objData.findIndex((item) => item.page === pathname);
    setActiveTab(index); // Установите начальное состояние после гидратации
  }, [pathname]);
  return (
    <CardWrapper size="small" onMouseLeave={onMouseLeave}>
      <Typography
        sx={{ textTransform: "uppercase", paddingLeft: "32px" }}
        variant="h5"
      >
        Личный кабинет
      </Typography>
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
    </CardWrapper>
  );
};

export default MenuPopover;
