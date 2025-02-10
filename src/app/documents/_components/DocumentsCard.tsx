"use client";
import React, { useState } from "react";
import * as SC from "./Documents.style";
import Image from "next/image";
import Tenge from "@/image/Account/icons/Tenge";
import docsImg from "@/image/DocumentsPage/docsCard.png";
import { Stack, Typography } from "@mui/material";
import CustomButton from "@/ui/Button/CustomButton";
import Share from "@/image/DocumentsPage/icons/Share";
export type TDocument = {
  name: string;
  price: number;
};
const DocumentsCard = ({ document }: { document: TDocument }) => {
  const [isHover, setIsHover] = useState(false);
  console.log(document);
  return (
    <SC.ListItemS
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
    >
      <Image
        style={{ borderRadius: "4px" }}
        alt={document.name}
        width={292}
        height={220}
        src={docsImg}
        quality={100}
        unoptimized
      />
      <Stack
        height={"137px"}
        width={"100%"}
        justifyContent={"space-between"}
        p={2}
      >
        <Typography variant="body1">{document.name}</Typography>
        <Stack flexDirection="row" alignItems="center" gap="4px" width="100%">
          <Typography sx={{ color: "#2640E3" }} variant="body2">
            {document.price}
          </Typography>
          <Tenge size={14} color="#2640E3" />
        </Stack>
      </Stack>

      <Stack
        width={"100%"}
        height={"100%"}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          borderRadius: "4px",
          transition: "all .3s ease",
          alignItems: "center",
          justifyContent: "center",
          opacity: isHover ? 1 : 0,
          //   visibility: isHover ? "visible" : "hidden",
          background:
            "linear-gradient(10deg, #6bb5edfa 2.32%, #3181c8de 107.19%);",
        }}
      >
        <CustomButton
          sx={{ padding: "14px 32px" }}
          variant="primary"
          size={"16"}
        >
          Выбрать шаблон
        </CustomButton>
        <Stack
          sx={{
            transition: "all 0.3s ease-in-out",
            marginRight: "20px",
            "&:hover": {
              opacity: 0.6,
            },
          }}
          alignItems={"center"}
          flexDirection={"row"}
          gap={1}
          pt={3}
        >
          <Share />
          <Typography variant="body2">Поделиться</Typography>
        </Stack>
      </Stack>
    </SC.ListItemS>
  );
};

export default DocumentsCard;
