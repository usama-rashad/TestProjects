import React from "react";
import { createContext } from "react";
interface IThemeContext {
  color: string;
  setColour: (input: string) => void;
}

interface IProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({ color: "white", setColour(input: string) {} });

function ThemeProvider(props: IProviderProps) {
  const [color, setColor] = React.useState<string>("white");
  return (
    <ThemeContext.Provider
      value={{
        color,
        setColour(input) {
          setColor(input);
        },
      }}
    >
      <div>{props.children}</div>;
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
