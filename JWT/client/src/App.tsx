import "./App.scss";

import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import Login from "./Components/Login/Login";
import { ILoginDataContext, loginDataContext } from "./Components/Login/loginDataContext";

function App() {
  const [serverMessage, setServerMessage] = useState("");
  const [authState, setAuthState] = useState("");

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
      .post("http://localhost:5000/createUser", {
        username: "",
        password: "",
        reenteredPassword: "",
      })
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

  // User login context
  const loginDataContextValue: ILoginDataContext = {
    login: signOnAction,
    signup: signupAction,
    loginUsername: "",
    loginPassword: "",
    signupUsername: "",
    signupPassword1: "",
    signupPassword2: "",
    setLoginUsername: function (name: string): void {},
    setLoginPassword: function (password: string): void {},
    setSignupUsername: function (name: string): void {},
    setSignupPassword1: function (password: string): void {},
    setSignupPassword2: function (password: string): void {},
  };

  return (
    <div className="App">
      <div className={`container ${authState}`}>
        <loginDataContext.Provider value={loginDataContextValue}>
          <Login />
        </loginDataContext.Provider>
      </div>
    </div>
  );
}

export default App;
