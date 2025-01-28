"use client";
import { Logo } from "@/image/icons/Logo";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const LogoComponent = ({
  width = 74,
  height = 54,
}: {
  width?: number;
  height?: number;
}) => {
  const router = useRouter();
  return (
    <Stack
      sx={{ cursor: "pointer" }}
      onClick={() => router.push("/main")}
      width={width}
      height={height}
    >
      <Logo width={width} height={height} />
    </Stack>
  );
};

export default LogoComponent;
