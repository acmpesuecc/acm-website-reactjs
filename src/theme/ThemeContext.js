import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./GlobalStyles";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  //   const today = new Date();
  //   const time = today.getHours();
  //   const firstTheme = time >= 6 && time <= 21 ? "light" : "dark";
  const [theme, setTheme] = useState("dark");

  const setMode = (theme) => {
    window.localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setTheme("dark");
  }, []);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
