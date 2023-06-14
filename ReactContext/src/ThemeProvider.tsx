import React from "react";
import { createContext } from "react";

interface IThemeProvider {
  children: React.ReactNode;
}

export interface ITheme {
  primary: React.CSSProperties;
}

interface IThemeContext {
  theme: ITheme | null;
  setTheme: React.Dispatch<React.SetStateAction<ITheme | null>>;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = (props: IThemeProvider) => {
  const [theme, setTheme] = React.useState<ITheme | null>(null);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};
