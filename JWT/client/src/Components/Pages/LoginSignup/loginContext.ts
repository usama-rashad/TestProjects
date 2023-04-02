import { createContext, useContext } from "react";

export interface ILogin {
  username: string;
  password: string;
}

export const LoginContext = createContext<ILogin | null>(null);

export const useLoginContext = () => {
  let loginData = useContext(LoginContext) as ILogin;
  if (!loginData) {
    return {} as ILogin;
  }
  return loginData;
};
