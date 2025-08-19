"use client";
import React, { useState } from "react";
import * as SC from "./Documents.style";
import Image from "next/image";
import Tenge from "@/image/Account/icons/Tenge";
import docsImg from "@/image/DocumentsPage/docsCard.png";
import { Stack, Typography } from "@mui/material";
import CustomButton from "@/ui/Button/CustomButton";
import Share from "@/image/DocumentsPage/icons/Share";
import { useRouter } from "next/navigation";
import { notify } from "@/ui/ToastProvider/ToastProvider";
export type TDocument = {
  name: string;
  price: number;
  regular_price: number;
  id: number;
  slug: string;
};

const URL_ZANDOCS = "https://zandocs.kz/documents";
const DocumentsCard = ({ document }: { document: TDocument }) => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const copyToClipboard = (numberDocs: string) => {
    navigator.clipboard
      .writeText(`${URL_ZANDOCS}/${numberDocs}`)
      .then(() => notify("success", "Ссылка скопирована!"))
      .catch(() => notify("error", "Ошибка копирования"));
  };
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
        <Stack flexDirection="row" alignItems="stretch" gap="4px" width="100%">
          <Typography sx={{ color: "#2640E3" }} variant="body1">
            {document.regular_price}
          </Typography>
          <Tenge size={16} color="#2640E3" />
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
          onClick={() => router.push(`/documents/${document.slug}`)}
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
          <Typography
            onClick={() => copyToClipboard(document.slug)}
            variant="body2"
          >
            Поделиться
          </Typography>
        </Stack>
      </Stack>
    </SC.ListItemS>
  );
};

export default DocumentsCard;
