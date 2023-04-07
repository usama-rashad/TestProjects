import "./App.scss";
import React, { FormEventHandler, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

interface IFormFields {
  username: string;
  password: string;
}

function App() {
  const [data, setData] = useState<IFormFields>({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [signInError, setSignInError] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Try Firebase signup
    signInWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        setSignInError(false);
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSignInError(true);
      });
  };

  return (
    <div className="appMain">
      <div className="container">
        <div className="top">
          <span className="mainTitle">Login</span>
        </div>
        <div className="middle">
          <div className="loginSection">
            <form onSubmit={handleSubmit}>
              <input
                id="username"
                placeholder="Username"
                type="email"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              <input
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              <button formAction="submit">Go!</button>
            </form>
          </div>
        </div>
        <div className="bottom">
          <span className="error">{signInError ? errorMessage : ""}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
