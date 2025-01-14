import { Logo } from "@/image/icons/Logo";
import { Stack } from "@mui/material";
import React from "react";

const LogoComponent = ({
  width = 74,
  height = 54,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Stack width={width} height={height}>
      <Logo />
    </Stack>
  );
};

export default LogoComponent;
