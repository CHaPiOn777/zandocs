import { TPropsMenu } from "@/app/_components/Footer/Footer";
import { List, ListItem, Typography } from "@mui/material";
import React from "react";

const MenuItemComponent = ({ title, list, icons }: TPropsMenu) => {
  return (
    <ListItem
      sx={{
        flexDirection: "column",
        alignItems: "flex-start",
        display: "flex",
        gap: "12px",
        width: "345px",
      }}
    >
      <Typography sx={{ textTransform: "uppercase" }} variant="h5">
        {title}
      </Typography>
      <List sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {list.map((item, index) => (
          <ListItem key={index}>
            <Typography
              sx={{ color: "#333B47", display: "flex", gap: "8px" }}
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
