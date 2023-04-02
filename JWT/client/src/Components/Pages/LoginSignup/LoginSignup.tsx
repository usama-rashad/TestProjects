import "./LoginSignup.scss";

import React, { useContext, useEffect, useState } from "react";

// Components
import LoginSection from "./LoginSection/LoginSection";
import SignupSection from "./SignupSection/SignupSection";

// Contexts

function LoginSignup() {
  return (
    <div className="loginSignup">
      <LoginSection />
      <SignupSection />
    </div>
  );
}

export default LoginSignup;
