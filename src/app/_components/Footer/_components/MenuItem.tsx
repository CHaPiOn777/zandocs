import { TPropsMenu } from "@/app/_components/Footer/Footer";
import { List, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const MenuItemComponent = ({
  title,
  list,
  icons,
  isLink,
  link,
}: TPropsMenu) => {
  const router = useRouter();
  return (
    <ListItem
      sx={{
        flexDirection: "column",
        alignItems: "flex-start",
        display: "flex",
        gap: "12px",
        width: "auto",
        // width: "345px",
        padding: 0,
      }}
    >
      <Typography sx={{ textTransform: "uppercase" }} variant="h5">
        {title}
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: 0,
        }}
      >
        {list.map((item, index) => (
          <ListItem
            onClick={() => link && router.push(link)}
            sx={{ padding: 0, display: "flex" }}
            key={index}
          >
            <Typography
              sx={{
                color: "#333B47",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                cursor: isLink ? "pointer" : "default",
                "&::after": {
                  content: '""', // Добавляем пустое содержимое
                  position: "absolute",
                  bottom: "-4px", // Линия располагается под текстом
                  left: "50%", // Центрируем линию по горизонтали
                  width: "0%", // Изначальная ширина
                  height: "1px", // Толщина линии
                  backgroundColor: "#333B47", // Цвет линии
                  transition: "all 0.2s ease", // Плавный переход
                  transform: "translateX(-50%)", // Сдвигаем к центру
                },
                "&:hover::after": {
                  width: isLink ? "100%" : "0", // Линия расширяется до всей ширины текста
                },
              }}
              variant="body2"
            >
              {icons?.length && icons[index]}
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </ListItem>
  );
};

export default MenuItemComponent;
