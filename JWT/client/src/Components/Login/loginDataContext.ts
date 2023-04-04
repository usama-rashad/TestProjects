import { createContext, useContext } from "react";

export interface ILoginDataContext {
  loginUsername: string;
  loginPassword: string;
  signupUsername: string;
  signupPassword1: string;
  signupPassword2: string;
  setLoginUsername: (name: string) => void;
  setLoginPassword: (password: string) => void;
  setSignupUsername: (name: string) => void;
  setSignupPassword1: (password: string) => void;
  setSignupPassword2: (password: string) => void;
  login: () => void;
  signup: () => void;
}

const loginDataContextInit: ILoginDataContext = {
  loginUsername: "",
  loginPassword: "",
  signupUsername: "",
  signupPassword1: "",
  signupPassword2: "",
  setLoginUsername: function (name: string): void {
    this.loginUsername = name;
  },
  setLoginPassword: function (password: string): void {
    this.loginPassword = password;
  },
  setSignupUsername: function (name: string): void {
    this.signupUsername = name;
  },
  setSignupPassword1: function (password: string): void {
    this.signupPassword1 = password;
  },
  setSignupPassword2: function (password: string): void {
    this.signupPassword2 = password;
  },
  login: function (): void {},
  signup: function (): void {},
};

export const loginDataContext = createContext<ILoginDataContext>(loginDataContextInit);
