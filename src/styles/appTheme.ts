"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600, // Изменено с 600px на 500px
      md: 800, // Изменено с 960px на 800px
      lg: 1200, // Изменено с 1280px на 1200px
      xl: 1600, // Изменено с 1920px на 1600px
    },
  },
  typography: {
    fontFamily: `var(--font-acumin), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
    h1: {
      fontWeight: 500, // Используем Bold для h1
      fontSize: "52px",
      lineHeight: "61.4px",
      [createTheme().breakpoints.down("md")]: {
        fontSize: "48px", // Для sm и выше
        lineHeight: "57px",
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "24px", // Для sm и выше
        lineHeight: "28.8px",
      },
    },
    h2: {
      fontWeight: 400, // Используем Bold для h1
      fontSize: "48px",
      lineHeight: "62.4px",
      [createTheme().breakpoints.down("md")]: {
        fontSize: "32px", // Для sm и выше
        lineHeight: "41.6px",
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "20px", // Для sm и выше
        lineHeight: "24px",
      },
    },
    h3: {
      fontWeight: 400, // Используем Bold для h1
      fontSize: "32px",
      lineHeight: "41.6px",
      [createTheme().breakpoints.down("md")]: {
        fontSize: "24px", // Для sm и выше
        lineHeight: "28.8px",
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "18px", // Для sm и выше
        lineHeight: "21.6px",
      },
    },
    h4: {
      fontWeight: 500, // Используем Bold для h1
      fontSize: "24px",
      lineHeight: "33.6px",
      [createTheme().breakpoints.down("md")]: {
        fontSize: "18px", // Для sm и выше
        lineHeight: "18px",
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "16px", // Для sm и выше
        lineHeight: "19.2px",
      },
    },
    h5: {
      fontWeight: 400, // Используем Bold для h1
      fontSize: "18px",
      lineHeight: "18px",
      [createTheme().breakpoints.down("md")]: {
        fontSize: "16px", // Для sm и выше
        lineHeight: "22.4px",
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "14px", // Для sm и выше
        lineHeight: "16.8px",
      },
    },
    button: {
      fontWeight: 400, // для кнопок
      fontSize: "20px",
      lineHeight: "24px",
      // [createTheme().breakpoints.down("md")]: {
      //   fontSize: "32px", // Для sm и выше
      //   lineHeight: "41.6px",
      // },
    },
    caption: {
      fontWeight: 400, // для кнопок
      fontSize: "16px",
      lineHeight: "20px",
      // [createTheme().breakpoints.down("md")]: {
      //   fontSize: "32px", // Для sm и выше
      //   lineHeight: "41.6px",
      // },
    },

    subtitle1: {
      fontWeight: 400, // Используем Bold для body1
      fontSize: "14px",
      lineHeight: "19.6px",
      // [createTheme().breakpoints.down("md")]: {
      //   fontSize: "32px", // Для sm и выше
      //   lineHeight: "41.6px",
      // },
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22.4px",
      // [createTheme().breakpoints.down("md")]: {
      //   fontSize: "32px", // Для sm и выше
      //   lineHeight: "41.6px",
      // },
    },
    body1: {
      fontWeight: 400, // Используем Bold для body1
      fontSize: "18px",
      lineHeight: "22px",
      [createTheme().breakpoints.down("md")]: {
        fontSize: "16px", // Для sm и выше
        lineHeight: "20.8px",
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "16px", // Для sm и выше
        lineHeight: "20.8px",
      },
    },
    body2: {
      fontWeight: 400, // Используем Bold для body1
      fontSize: "16px",
      lineHeight: "22.4px",
      [createTheme().breakpoints.down("md")]: {
        fontSize: "14px",
        lineHeight: "18.2px",
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "14px", // Для sm и выше
        lineHeight: "18.2px",
      },
    },
    overline: {
      fontWeight: 400, // Используем Bold для body1
      fontSize: "12px",
      lineHeight: "14px",
      // [createTheme().breakpoints.down("md")]: {
      //   fontSize: "32px", // Для sm и выше
      //   lineHeight: "41.6px",
      // },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#0D1319",
      contrastText: "#2640E3",
      light: "#FFFEFA",
      dark: "#333B47",
    },
    secondary: {
      main: "#F3F9FE",
    },
    background: {
      default: "#0454FF0A",
    },
    text: {
      secondary: "#2916B9",
    },
  },
});

export default theme;
