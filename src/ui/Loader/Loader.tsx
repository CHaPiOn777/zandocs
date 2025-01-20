"use client";
import { Box, CircularProgress, SxProps, Theme } from "@mui/material";
import React from "react";

const Loader = ({
  children,
  isLoader,
  sx,
}: {
  children?: React.ReactNode;
  isLoader: boolean;
  sx?: SxProps<Theme>;
}) => {
  return isLoader ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "100%",
        ...sx,
      }}
    >
      <CircularProgress color={"info"} />
    </Box>
  ) : (
    children
  );
};

export default Loader;
