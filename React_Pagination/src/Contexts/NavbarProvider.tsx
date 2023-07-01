import { createContext } from "react";
import React from "react";

interface INavbarProvider {
  children: React.ReactNode;
}

interface IContextData {
  pageNumber: number;
  setPageNumber: (page: number) => void;
}

export const NavbarContext = createContext<IContextData>({ pageNumber: 1, setPageNumber: () => {} });

const NavbarProvider = (props: INavbarProvider) => {
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  return (
    <NavbarContext.Provider
      value={{
        pageNumber,
        setPageNumber(page) {
          setPageNumber(page);
        },
      }}
    >
      <div>{props.children}</div>
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
