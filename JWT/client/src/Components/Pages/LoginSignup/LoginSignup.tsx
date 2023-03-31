import "./LoginSignup.scss";

import React, { useContext, useEffect, useState } from "react";
import LoginSection from "./LoginSection/LoginSection";
import { IUserData, LoginSignupDataContext } from "../../../App";

interface ILoginSignup {}

function LoginSignup(props: ILoginSignup) {
  const userData = useContext<IUserData>(LoginSignupDataContext);

  return <div className="loginSignup"></div>;
}

export default LoginSignup;
