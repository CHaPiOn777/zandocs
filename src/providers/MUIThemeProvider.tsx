"use client";

import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import appTheme from "@/styles/appTheme";
import { CssBaseline } from "@mui/material";
import { getMyBasket, getMyInfo } from "@/api/authApi";
import { useAuthUser } from "@/store/authStore";
import axios from "axios";
import { notify } from "@/ui/ToastProvider/ToastProvider";
import { useBasket } from "@/store/basketStore";

const MUIThemeProvider = ({ children }: { children: ReactNode }) => {
  const setUser = useAuthUser((state) => state.setUser);
  const setCart = useBasket((state) => state.setCart);

  const setIsLoading = useAuthUser((state) => state.setIsLoading);
  const isAuth = useAuthUser((state) => state.isAuth);
  useEffect(() => {
    const getMyInfoData = async () => {
      try {
        setIsLoading(true); // Включаем индикатор загрузки
        const { data } = await getMyInfo(); // Выполняем запрос
        const { data: basket } = await getMyBasket(); // Выполняем запрос
        setCart(basket);
        setUser(data); // Устанавливаем данные пользователя
      } catch (err) {
        if (axios.isAxiosError(err)) {
          notify("error", err?.response?.data.message);
        }
        setIsLoading(false);
      } finally {
        setIsLoading(false); // Отключаем индикатор загрузки
      }
    };
    if (isAuth) {
      getMyInfoData();
    }
  }, [isAuth]);

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
