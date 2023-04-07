import "./Login.scss";

// Imports
import React, { useContext, useEffect, useState } from "react";

// Components
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";

/*
This component will contain
1) Login and signup titles
2) Input fields
3) Buttons
4) Server response message
*/

function Login() {
  // Animation state
  const [loginSignupState, setLoginSignupState] = useState(false);
  const [authState, setAuthState] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  // User data
  const [loginUserName, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUserName, setSignupUsername] = useState("");
  const [signupPassword1, setSignupPassword1] = useState("");
  const [signupPassword2, setSignupPassword2] = useState("");

  // Button actions
  const loginButtonAction = () => {
    signOnAction();
  };
  const signupButtonAction = () => {
    signupAction();
  };
  const changeToSignupAction = () => {
    setLoginSignupState(true);
  };
  const changeToLoginAction = () => {
    setLoginSignupState(false);
  };

  const resetState = () => {
    setTimeout(() => {
      setAuthState("");
    }, 2000);
  };

  const signOnAction = async () => {
    await axios
      .post("http://localhost:5000/login", { username: loginUserName, password: loginPassword })
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
        setAuthState("error");
        setServerMessage(err.response.data.message);
        resetState();
      });
  };

  const signupAction = async () => {
    let errResponse: any = null;
    await axios
      .post("http://localhost:5000/createUser", {
        username: signupUserName,
        password: signupPassword1,
        reenteredPassword: signupPassword2,
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
        setAuthState("error");
        setServerMessage(err.response.data.message);
        resetState();
      })
      .finally(() => {});
  };

  return (
    <div className={`container ${authState}`}>
      <div className="loginMain">
        <div className="top"></div>
        <div className="centerHelper" />
        <div style={{ left: loginSignupState ? "-300px" : "0px" }} className="center">
          <div className="left">
            <span className="loginTitle">Login</span>
            <Input
              placeholderText="Username..."
              textUpdate={(name) => setLoginUsername(name)}
              isDisabled={loginSignupState}
              isHidden={false}
            />
            <Input
              placeholderText="Password..."
              textUpdate={(pass) => setLoginPassword(pass)}
              isDisabled={loginSignupState}
              isHidden={true}
            />
            <div className="buttons">
              <Button title="Login" onClick={loginButtonAction} />
              <Button title="Signup" onClick={changeToSignupAction} />
            </div>
          </div>
          <div className="right">
            <span className="signupTitle">Sign Up</span>
            <Input
              placeholderText="Username..."
              textUpdate={(name) => setSignupUsername(name)}
              isDisabled={!loginSignupState}
              isHidden={false}
            />
            <Input
              placeholderText="Password..."
              textUpdate={(pass) => setSignupPassword1(pass)}
              isDisabled={!loginSignupState}
              isHidden={true}
            />
            <Input
              placeholderText="Re-enter password..."
              textUpdate={(pass) => setSignupPassword2(pass)}
              isDisabled={!loginSignupState}
              isHidden={true}
            />

            <div className="buttons">
              <Button title="Signup" onClick={signupButtonAction} />
              <Button title="Login" onClick={changeToLoginAction} />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="message">
            <span className="messageTitle">{serverMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
