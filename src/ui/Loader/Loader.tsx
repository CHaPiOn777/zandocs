"use client";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = ({
  children,
  isLoader,
}: {
  children?: React.ReactNode;
  isLoader: boolean;
}) => {
  return isLoader ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "100%",
      }}
    >
      <CircularProgress color={"info"} />
    </Box>
  ) : (
    children
  );
};

export default Loader;
