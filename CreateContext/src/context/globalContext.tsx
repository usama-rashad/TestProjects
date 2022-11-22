import React, { useState } from "react";
import { createContext } from "react";

// Provides access to global variables

interface IGlobalContext {
  status: boolean;
}

interface IContextChildren {
  children: React.ReactNode;
}

export const GlobalContext = createContext<IGlobalContext>({
  status: false,
});

export const GlobalContextProvider = ({ children }: IContextChildren) => {
  let state : boolean;



  return (
    <GlobalContext.Provider value={{ state }}>
      {children}
    </GlobalContext.Provider>
  );
};
