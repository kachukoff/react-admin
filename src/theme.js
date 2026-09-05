import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { tokens } from "./colorTokens"; // Импортируем вынесенные цвета

// Экспортируем токенов 
export { tokens };

// Настройки темы Material UI
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  
  // Общие шрифты заголовков
  const fontHeading = {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  };

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: { main: colors.primary[500] },
            secondary: { main: colors.greenAccent[500] },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: { default: colors.primary[500] },
          }
        : {
            primary: { main: colors.primary[100] },
            secondary: { main: colors.greenAccent[500] },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: { default: "#fcfcfc" },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: { ...fontHeading, fontSize: 40 },
      h2: { ...fontHeading, fontSize: 32 },
      h3: { ...fontHeading, fontSize: 24 },
      h4: { ...fontHeading, fontSize: 20 },
      h5: { ...fontHeading, fontSize: 16 },
      h6: { ...fontHeading, fontSize: 14 },
    },
  };
};

// Контекст для переключения тем
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// Кастомный хук управления состоянием темы
export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
