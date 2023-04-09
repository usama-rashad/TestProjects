import "./Login.scss";

// Imports
import React, { useContext, useState } from "react";
import { loginDataContext } from "./loginDataContext";

// Components
import Input from "../Input/Input";
import Button from "../Button/Button";

/*
This component will contain
1) Login and signup titles
2) Input fields
3) Buttons
4) Server response message
*/

function Login() {
  // User login context
  const {
    loginUsername,
    loginPassword,
    signupUsername,
    signupPassword1,
    signupPassword2,
    setLoginUsername,
    setLoginPassword,
    setSignupUsername,
    setSignupPassword1,
    setSignupPassword2,
    login,
    signup,
  } = useContext(loginDataContext);
  // Login states
  // const [loginUsername, setLoginUsername] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // // Signup states
  // const [signupUsername, setSignupUsername] = useState("");
  // const [signupPassword1, setSignupPassword1] = useState("");
  // const [signupPassword2, setSignupPassword2] = useState("");
  // Animation state
  const [loginSignupState, setLoginSignupState] = useState(false);
  // Server states
  const [serverResponse, setServerResponse] = useState("");

  // Button actions
  const loginAction = () => {
    login();
  };
  const signupAction = () => {};
  const changeToSignupAction = () => {
    setLoginSignupState(true);
  };
  const changeToLoginAction = () => {
    setLoginSignupState(false);
  };

  return (
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
            isHidden={false}
          />
          <div className="buttons">
            <Button title="Login" onClick={loginAction} />
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
            isHidden={false}
          />
          <Input
            placeholderText="Re-enter password..."
            textUpdate={(pass) => setSignupPassword2(pass)}
            isDisabled={!loginSignupState}
            isHidden={false}
          />

          <div className="buttons">
            <Button title="Signup" onClick={signupAction} />
            <Button title="Login" onClick={changeToLoginAction} />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="message">
          <span className="messageTitle">{serverResponse}</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
