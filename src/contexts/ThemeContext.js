import React, { useState, createContext, useContext, useEffect } from "react";
import { LocalStorageKeys, Theme } from "../constants/Constants";
import StorageUtils from "../utils/StorageUtils";

const setBootstapTheme = (theme) => document.body.setAttribute("data-bs-theme", theme);
const systemThemeChangeHandler = ({matches}) => setBootstapTheme(matches ? Theme.DARK : Theme.LIGHT);

// Creating a context for the theme
export const ThemeContext = createContext(null);
// Initializing the theme
const initialTheme = StorageUtils.getOrSetItem(LocalStorageKeys.APP_THEME, Theme.AUTO);
const systemThemeMatch = window.matchMedia('(prefers-color-scheme: dark)');

// ThemeProvider component to manage the theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    StorageUtils.setItem(LocalStorageKeys.APP_THEME, theme);
    if(theme === Theme.AUTO) {
        systemThemeMatch.addEventListener('change', systemThemeChangeHandler);
        systemThemeChangeHandler(systemThemeMatch);
    } else {
        systemThemeMatch.removeEventListener('change', systemThemeChangeHandler);
        setBootstapTheme(theme);
    }
  }, [theme]);

  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
