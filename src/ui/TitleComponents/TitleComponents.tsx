import { Stack } from "@mui/material";
import React from "react";

const TitleComponents = ({
  children,
  height = "164px",
}: {
  children: React.ReactNode;
  height?: string;
}) => {
  return (
    <Stack
      sx={{
        background: "var(--titleBG)",
        width: "100vw",
        height: height,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Stack>
  );
};

export default TitleComponents;
