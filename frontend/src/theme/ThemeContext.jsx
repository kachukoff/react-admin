import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children, defaultMode = "dark" }) {
  const [mode, setMode] = useState(() =>
    localStorage.getItem("theme") ?? defaultMode
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};