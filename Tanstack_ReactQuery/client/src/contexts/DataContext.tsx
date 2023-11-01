import { createContext, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { User } from "../App";

export type TDataContext = {
  data: User[];
};

type TDataContextProvider = {
  children: React.ReactNode;
};

export const DataContext = createContext<TDataContext>({ data: [] });

export function DataContextProvider({ children }: TDataContextProvider) {
  const [dataContextValue, setDataContextValue] = useState<TDataContext>({ data: [] });

  useEffect(() => {
    let promiseResult = axios.get<AxiosResponse>("http://127.0.0.1:5000/getAdmins").then((value) => {
      setDataContextValue(value.data);
    });
  }, []);

  return <DataContext.Provider value={dataContextValue}>{children}</DataContext.Provider>;
}
