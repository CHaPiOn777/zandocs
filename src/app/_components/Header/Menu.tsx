"use client";
import * as SC from "./Header.style";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Typography } from "@mui/material";
import { TOnClick } from "@/image/Account/icons/Profile";
type TMenuItems = {
  name: string;
  link: string;
};
const Menu = ({ onClick }: TOnClick) => {
  const pathName = usePathname();
  const router = useRouter();

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
      link: "/company",
    },
    {
      name: "Обучение ZanTech",
      link: "/",
    },
  ];
  return (
    <menu>
      <SC.List>
        {menuItems.map((item, index) => (
          <SC.ListItem
            $isActive={pathName === item.link}
            key={index}
            onClick={() => (onClick && onClick(), router.push(item.link))}
          >
            <Typography sx={{ lineHeight: 1 }} variant="subtitle2">
              {item.name}
            </Typography>
          </SC.ListItem>
        ))}
      </SC.List>
    </menu>
  );
};

export default Menu;
