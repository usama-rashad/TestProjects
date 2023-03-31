import "./App.scss";

import { useEffect, useState, createContext } from "react";
import axios from "axios";

import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import LoginSignup from "./Components/Pages/LoginSignup/LoginSignup";

export interface IUserData {
  loginUserName: string;
  loginUserPassword: string;
  signupUsername: string;
  signupPassword1: string;
  signupPassword2: string;
}

// Login and signup context
export const LoginSignupDataContext = createContext<IUserData>({ loginUserName: "", loginUserPassword: "", signupUsername: "", signupPassword1: "", signupPassword2: "" });

function App() {
  const [serverMessage, setServerMessage] = useState("");
  const [authState, setAuthState] = useState("");
  const [returnFlag, setReturnFlag] = useState(false);

  const [userData, setUserData] = useState<IUserData>({ loginUserName: "", loginUserPassword: "", signupUsername: "", signupPassword1: "", signupPassword2: "" });

  const resetState = () => {
    setTimeout(() => {
      setAuthState("");
    }, 2000);
  };

  const signOnAction = async () => {
    await axios
      .post("http://localhost:5000/login", { username: "", password: "" })
      .then((res) => {
        const { message, error } = res.data;
        if (error == "1") {
          setAuthState("error");
          setServerMessage(message.response.data);
          resetState();
        } else {
          setAuthState("pass");
          setServerMessage("");
        }
      })
      .catch((err) => {
        console.log(`${err}`);
        setAuthState("error");
        setServerMessage("A system error has occured.");
        resetState();
      });
  };

  const signupAction = async () => {
    let errResponse: any = null;
    await axios
      .post("http://localhost:5000/createUser", { username: "", password: "", reenteredPassword: "" })
      .then((res) => {
        const { message, error } = res.data;
        if (error == "1") {
          setAuthState("error");
          setServerMessage(message.response.data);
          resetState();
        } else {
          setAuthState("pass");
          setServerMessage("");
          setInterval(() => {
            setReturnFlag(true);
            resetState();
          }, 2000);
        }
      })
      .catch((err) => {
        errResponse = err;
        console.log(`${err}`);
        setAuthState("error");
        setServerMessage(err.response.data.message);
        resetState();
      })
      .finally(() => {
        console.log(errResponse);
      });
  };

  return (
    <div className="App">
      <div className={`container ${authState}`}>
        <LoginSignupDataContext.Provider value={userData as IUserData}>
          <div className="loginSignup">
            <LoginSignup />
          </div>
        </LoginSignupDataContext.Provider>
      </div>
    </div>
  );
}

export default App;
