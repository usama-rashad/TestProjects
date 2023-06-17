import React, { ChangeEvent } from "react";
import axios from "axios";
import { produce } from "immer";
import "./Login.scss";

interface IUserLoginData {
  username: string;
  password: string;
}

function Login() {
  const [loginData, setLoginData] = React.useState<IUserLoginData>({ username: "", password: "" });
  const [response, setResponse] = React.useState<string>("");

  const updateUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData(
      produce((draft) => {
        draft.username = e.target.value;
      })
    );
  };

  const updatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData(
      produce((draft) => {
        draft.password = e.target.value;
      })
    );
  };

  const loginAction = async () => {
    await axios
      .post("http://localhost:4000/api/login", { username: loginData.username, password: loginData.password }, { withCredentials: true })
      .then((result) => {
        setResponse(JSON.stringify(result.data));
      })
      .catch((error) => {
        setResponse(error.response.data);
      });
  };

  return (
    <div className="mainLogin">
      <input
        id="username"
        autoComplete="off"
        type="text"
        value={loginData.username}
        placeholder="Enter username..."
        onChange={(e) => updateUserName(e)}
      />
      <input
        id="password"
        autoComplete="off"
        type="password"
        value={loginData.password}
        placeholder="Enter password..."
        onChange={(e) => updatePassword(e)}
      />
      <button className="loginButton" onClick={loginAction}>
        Login
      </button>
      <p className="response">{response}</p>
    </div>
  );
}

export default Login;
