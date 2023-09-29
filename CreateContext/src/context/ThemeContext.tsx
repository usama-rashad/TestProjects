import { createContext, useState } from "react";

interface ITheme {
  primary: { textColor: string; backgroundColor: string };
  secondary: { textColor: string; backgroundColor: string };
}

interface IThemeContext {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

interface IThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme: ITheme = {
  primary: { textColor: "black", backgroundColor: "white" },
  secondary: { textColor: "white", backgroundColor: "black" },
};

export const ThemeContext = createContext<IThemeContext | null>({ theme: defaultTheme, setTheme: () => {} });

export const ThemeProvider = (props: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>(defaultTheme);

  const applyNewTheme = (input: ITheme) => {
    setTheme(input);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme(theme) {
          applyNewTheme(theme);
        },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
