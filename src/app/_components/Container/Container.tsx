"use client";

import useIsTablet from "@/hooks/useIsTablet";
import { Theme } from "@emotion/react";
import { Stack, SxProps } from "@mui/material";
import React from "react";

const Container = ({
  children,
  column = false,
  sx,
}: {
  children: React.ReactNode;
  column?: boolean;
  sx?: SxProps<Theme>;
}) => {
  const isTablet = useIsTablet();

  return (
    <Stack
      direction={column ? "column" : "row"}
      sx={{
        width: isTablet ? "100%" : "1228px",
        maxHeight: "max-content",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};

export default Container;
