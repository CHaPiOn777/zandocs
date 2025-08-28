import { PropsWithChildren } from "react";
import MUIThemeProvider from "@/providers/MUIThemeProvider";
import ToastProvider from "@/ui/ToastProvider/ToastProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <MUIThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </MUIThemeProvider>
  );
}
