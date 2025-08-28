"use client";

import { Suspense, PropsWithChildren } from "react";
import { CircularProgress } from "@mui/material";
import MUIThemeProvider from "@/providers/MUIThemeProvider";
import ToastProvider from "@/ui/ToastProvider/ToastProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <MUIThemeProvider>
      <Suspense fallback={<CircularProgress color="info" />}>
        <ToastProvider>{children}</ToastProvider>
      </Suspense>
    </MUIThemeProvider>
  );
}
