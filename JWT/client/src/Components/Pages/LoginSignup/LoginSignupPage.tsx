import "./LoginSignupPage.scss";

import React, { useEffect, useState } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

interface ILoginPage {
  bReturn: boolean;
  serverMessage: string;
  loginAction: () => void;
  signupAction: () => void;
  updateUsername: (username: string) => void;
  updatePassword: (password: string) => void;
  updateSignupUsername: (password: string) => void;
  updateSignupPass1: (password: string) => void;
  updateSignupPass2: (password: string) => void;
}

function loginSignupPage(props: ILoginPage) {
  const [serverMessage, setServerMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [menuState, setMenuState] = useState(0);

  // Signup
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPass1, setSignupPass1] = useState("");
  const [signupPass2, setSignupPass2] = useState("");

  useEffect(() => {
    setServerMessage((prev) => (prev = props.serverMessage));
  }, [props.serverMessage]);

  useEffect(() => {
    if (props.bReturn) setMenuState(0);
  }, [props.bReturn]);

  useEffect(() => {
    props.updateUsername(userName);
  }, [userName]);

  useEffect(() => {
    props.updatePassword(pass);
  }, [pass]);

  useEffect(() => {
    props.updateSignupUsername(signupUsername);
  }, [signupUsername]);

  useEffect(() => {
    props.updateSignupPass1(signupPass1);
  }, [signupPass1]);

  useEffect(() => {
    props.updateSignupPass2(signupPass2);
  }, [signupPass2]);

  const loginAction = () => {
    props.loginAction();
  };

  const signupAction = () => {
    setServerMessage("");
    setMenuState(1);
  };

  const returnToLogin = () => {
    setMenuState(0);
  };

  return (
    <div className="loginPage">
      <div className="top">
        <span className="title">JWT</span>
      </div>
      <div className="middleHelper"></div>
      <div className="middle" style={{ left: menuState == 1 ? "-300px" : "000px" }}>
        <div className="middleLogin">
          <Input
            placeholderText="Enter user name..."
            textUpdate={(username) => {
              setUserName(username);
            }}
          />
          <Input
            placeholderText="Enter password..."
            isHidden={true}
            textUpdate={(password) => {
              setPass(password);
            }}
          />
          <div className="buttons">
            <Button onClick={loginAction} title="Login" />
            <Button onClick={signupAction} title="Signup" />
          </div>
        </div>
        <div className="middleSignup">
          <Input
            placeholderText="Username..."
            textUpdate={(name) => {
              setSignupUsername(name);
            }}
          />
          <Input
            isHidden={true}
            placeholderText="Password..."
            textUpdate={(pass) => {
              setSignupPass1(pass);
            }}
          />
          <Input
            isHidden={true}
            placeholderText="Re-enter password..."
            textUpdate={(pass) => {
              setSignupPass2(pass);
            }}
          />

          <div className="buttons">
            <Button
              onClick={() => {
                props.signupAction();
              }}
              title="Signup"
            />
            <Button
              onClick={() => {
                returnToLogin();
              }}
              title="Login"
            />
          </div>
        </div>
      </div>
      <div className="bottom">{serverMessage != "" && <span className="messages">{serverMessage}</span>}</div>
    </div>
  );
}

export default loginSignupPage;
