import React, { useState, createContext, useContext, useEffect } from "react";
import { LocalStorageKeys, Theme } from "../constants/Constants";
import StorageUtils from "../utils/StorageUtils";




// Creating a context for the theme
export const ThemeContext = createContext(null);
// Initializing the theme
const initialTheme = StorageUtils.getOrSetItem(LocalStorageKeys.APP_THEME, Theme.AUTO);
const systemThemeMatch = window.matchMedia('(prefers-color-scheme: dark)');
const initialBootstrapTheme = initialTheme === Theme.AUTO ? systemThemeMatch.matches ? Theme.DARK : Theme.LIGHT : initialTheme;

// ThemeProvider component to manage the theme state
export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(initialTheme);
  const [bootstrapTheme, setBootstrapTheme] = useState(initialBootstrapTheme);

  useEffect(() => document.body.setAttribute("data-bs-theme", bootstrapTheme), [bootstrapTheme]);

  const systemThemeChangeHandler = ({matches}) => setBootstrapTheme(matches ? Theme.DARK : Theme.LIGHT);

  useEffect(() => {
    StorageUtils.setItem(LocalStorageKeys.APP_THEME, selectedTheme);
    if(selectedTheme === Theme.AUTO) {
        systemThemeMatch.addEventListener('change', systemThemeChangeHandler);
        systemThemeChangeHandler(systemThemeMatch);
    } else {
        systemThemeMatch.removeEventListener('change', systemThemeChangeHandler);
        setBootstrapTheme(selectedTheme);
    }
  }, [selectedTheme]);

  const toggleTheme = (theme) => {
    setSelectedTheme(theme);
  };

  return <ThemeContext.Provider value={{ selectedTheme, theme: bootstrapTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
