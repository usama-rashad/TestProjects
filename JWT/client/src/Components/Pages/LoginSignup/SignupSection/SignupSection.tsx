import "./SignupSection.scss";
import React, { useState } from "react";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

interface ISignupSection {}

function SignupSection(props: ISignupSection) {
  const updateUsername = (name: string) => {};
  const updatePassword1 = (pass: string) => {};
  const updatePassword2 = (pass: string) => {};
  const returnToLogin = () => {};
  const signup = () => {};

  return (
    <div className="signupSection">
      <div className="gap"></div>
      <span className="signUpTitle">Sign Up</span>

      <Input
        isHidden={false}
        placeholderText="Enter username..."
        textUpdate={(name) => {
          updateUsername(name);
        }}
      />
      <Input
        isHidden={true}
        placeholderText="Enter password..."
        textUpdate={(pass) => {
          updatePassword1(pass);
        }}
      />
      <Input
        isHidden={true}
        placeholderText="Re-Enter password..."
        textUpdate={(pass) => {
          updatePassword2(pass);
        }}
      />
      <div className="buttons">
        <Button title="Signup" onClick={signup} />
        <Button title="Login" onClick={returnToLogin} />
      </div>
    </div>
  );
}

export default SignupSection;
