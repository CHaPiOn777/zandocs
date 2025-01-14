import { Stack } from "@mui/material";
import React from "react";

const TitleComponents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        background: "var(--titleBG)",
        width: "100vw",
        height: "164px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Stack>
  );
};

export default TitleComponents;
