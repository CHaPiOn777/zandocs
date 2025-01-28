"use client";
import useIsMobile from "@/hooks/useIsMobile";
import { Stack } from "@mui/material";
import React from "react";

const TitleComponents = ({
  children,
  height,
}: {
  children: React.ReactNode;
  height?: string;
}) => {
  const isMobile = useIsMobile();
  const heightBySize = !height ? (isMobile ? "88px" : "164px") : height;
  return (
    <Stack
      sx={{
        background: "var(--titleBG)",
        width: "100vw",
        height: heightBySize,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Stack>
  );
};

export default TitleComponents;
