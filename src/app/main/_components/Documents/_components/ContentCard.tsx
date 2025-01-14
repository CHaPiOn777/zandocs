import { TDataDocuments } from "@/app/main/_components/Documents/Documents";
import CheckBoxIcon from "@/image/Documents/CheckBoxIcon";
import CustomButton from "@/ui/Button/CustomButton";
import Line from "@/ui/Line/Line";
import { List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ContentCard = (props: TDataDocuments) => {
  const { title, desc, list, reverse, image } = props;
  return (
    <Stack direction={reverse ? "row-reverse" : "row"} gap={"130px"}>
      <Stack direction="column" width={498}>
        {title}
        <Line />
        <Typography variant={"body1"} mt={3} mb={2}>
          {desc}
        </Typography>
        <List
          sx={{
            gap: "12px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "32px",
          }}
        >
          {list.map((description, index) => (
            <ListItem
              key={index}
              sx={{ gap: "16px", display: "flex", alignItems: "center" }}
            >
              <CheckBoxIcon />
              <Typography variant={"body2"}>{description}</Typography>
            </ListItem>
          ))}
        </List>
        <CustomButton
          size="16"
          sx={{ padding: "20px 0px", width: "498px" }}
          variant="secondary"
        >
          Смотреть все шаблоны
        </CustomButton>
      </Stack>
      <Image width={572} height={460} alt={"фоновая картинка"} src={image} />
    </Stack>
  );
};

export default ContentCard;
