import { createContext } from "react";

interface ILoginDataContext {
  username: string;
  password: string;
}

let LoginDataContext = createContext();

// https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
