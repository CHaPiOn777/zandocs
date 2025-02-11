"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import appTheme from "@/styles/appTheme";
import { CssBaseline } from "@mui/material";

const MUIThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {/* {appStyles} */}
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MUIThemeProvider;
