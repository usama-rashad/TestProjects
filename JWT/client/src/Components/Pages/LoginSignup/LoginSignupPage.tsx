import "./LoginSignupPage.scss";

import React, { useEffect, useState } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

interface ILoginPage {
  serverMessage: string;
  loginAction: () => void;
  signupAction: () => void;
  updateUsername: (username: string) => void;
  updatePassword: (password: string) => void;
}

function loginSignupPage(props: ILoginPage) {
  const [serverMessage, setServerMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    setServerMessage((prev) => (prev = props.serverMessage));
  }, [props.serverMessage]);

  useEffect(() => {
    props.updateUsername(userName);
  }, [userName]);

  useEffect(() => {
    props.updatePassword(pass);
  }, [pass]);

  const loginAction = () => {
    props.loginAction();
  };

  const signupAction = () => {
    props.signupAction();
  };

  return (
    <div className="loginPage">
      <div className="top">
        <span className="title">JWT</span>
      </div>
      <div className="middle">
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
          <Input placeholderText="Enter your new user name..." textUpdate={() => {}} />
          <Input placeholderText="Enter your unique password..." textUpdate={() => {}} />
          <div className="buttons">
            <Button onClick={() => {}} title="Signup" />
          </div>
        </div>
      </div>
      <div className="bottom">{serverMessage != "" && <span className="messages">{serverMessage}</span>}</div>
    </div>
  );
}

export default loginSignupPage;
