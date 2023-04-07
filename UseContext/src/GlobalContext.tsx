import { createContext, useState } from "react";

interface IGlobalContext {
  color: string;
  setColor: (color: string) => void;
}

const GlobalContextInit: IGlobalContext = { color: "black", setColor: () => {} };

export const GlobalContext = createContext(GlobalContextInit);

export const GlobalProvider = ({ children }: any): any => {
  const [color, setColor] = useState<IGlobalContext>(GlobalContextInit);

  return <GlobalContext.Provider value={{color,setColor}}>{children}</GlobalContext.Provider>;
};
