import "./SignupSection.scss";
import React, { useState } from "react";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

interface ISignupSection {
  updateUsername: (name: string) => void;
  updatePassword1: (name: string) => void;
  updatePassword2: (name: string) => void;

  loginAction: () => void;
  signupAction: () => void;
}

function SignupSection(props: ISignupSection) {
  return (
    <div className="signupSection">
      <Input
        isHidden={false}
        placeholderText="Enter username..."
        textUpdate={(name) => {
          props.updateUsername(name);
        }}
      />
      <Input
        isHidden={true}
        placeholderText="Enter password..."
        textUpdate={(pass) => {
          props.updatePassword1(pass);
        }}
      />
      <Input
        isHidden={true}
        placeholderText="Re-Enter password..."
        textUpdate={(pass) => {
          props.updatePassword2(pass);
        }}
      />
      <div className="buttons">
        <Button title="Signup" onClick={props.signupAction} />
        <Button title="Login" onClick={props.loginAction} />
      </div>
    </div>
  );
}

export default SignupSection;
