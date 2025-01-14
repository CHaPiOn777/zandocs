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
  return (
    <Stack
      direction={column ? "column" : "row"}
      sx={{ width: "1228px", maxHeight: "max-content", ...sx }}
    >
      {children}
    </Stack>
  );
};

export default Container;
