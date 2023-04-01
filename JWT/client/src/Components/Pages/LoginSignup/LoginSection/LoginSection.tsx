import "./LoginSection.scss";
import React, { useContext, useState } from "react";
import { LoginSignupDataContext } from "../../../../App";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

interface ILoginSection {}

function LoginSection(props: ILoginSection) {
  let { loginUserName } = useContext(LoginSignupDataContext);

  const login = () => {
    console.log("Login pressed");
  };

  const signup = () => {
    console.log("signup pressed");
  };

  return (
    <div className="loginSection">
      <div className="gap"></div>
      <span className="loginTitle">Login</span>
      <Input
        isHidden={false}
        placeholderText="Enter username..."
        textUpdate={(name) => {
          loginUserName = name;
        }}
      />
      <Input isHidden={true} placeholderText="Enter password..." textUpdate={(pass) => {}} />
      <div className="buttons">
        <Button title="Login" onClick={login} />
        <Button title="Signup" onClick={signup} />
      </div>
    </div>
  );
}

export default LoginSection;
