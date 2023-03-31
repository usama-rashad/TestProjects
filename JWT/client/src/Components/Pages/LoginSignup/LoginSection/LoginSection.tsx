import "./LoginSection.scss";
import React, { useState } from "react";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

interface ILoginSection {}

function LoginSection(props: ILoginSection) {
  return (
    <div className="loginSection">
      <Input isHidden={false} placeholderText="Enter username..." textUpdate={(name) => {}} />
      <Input isHidden={true} placeholderText="Enter password..." textUpdate={(pass) => {}} />
      <div className="buttons">
        <Button title="Login" onClick={} />
        <Button title="Signup" onClick={} />
      </div>
    </div>
  );
}

export default LoginSection;
