"use client";

import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import appTheme from "@/styles/appTheme";
import { CssBaseline } from "@mui/material";
import { getMyInfo } from "@/api/authApi";
import { useAuthUser } from "@/store/authStore";

const MUIThemeProvider = ({ children }: { children: ReactNode }) => {
  const setUser = useAuthUser((state) => state.setUser);
  const user = useAuthUser((state) => state.user);
  const setIsLoading = useAuthUser((state) => state.setIsLoading);
  const isAuth = useAuthUser((state) => state.isAuth);
  useEffect(() => {
    const getMyInfoData = async () => {
      try {
        setIsLoading(true); // Включаем индикатор загрузки
        const { data } = await getMyInfo(); // Выполняем запрос

        setUser(data); // Устанавливаем данные пользователя
      } catch (err) {
        console.error("Ошибка при получении информации:", err);
        setIsLoading(false);
      } finally {
        setIsLoading(false); // Отключаем индикатор загрузки
      }
    };
    console.log(user);
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
