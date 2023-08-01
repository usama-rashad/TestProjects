import "./Signup.scss";

import React from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

function Signup() {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [isLoggingIn, setIsLogginIn] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      autoLogin();
    }, 2000);
  }, []);

  const loginAction = () => {
    let response = axios
      .post("http://localhost:2000/login", { username: "usama", password: 123 }, { withCredentials: true, timeout: 1000 })
      .then((result) => {
        setLoggedIn(true);
        setMessage(result.data.message);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Login failed");
      });
  };
  const logoutAction = () => {
    let response = axios
      .post("http://localhost:2000/logout", {}, { withCredentials: true, timeout: 1000 })
      .then((result) => {
        setLoggedIn(false);
        setMessage(result.data.message);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Logout failed");
      });
  };
  const autoLogin = () => {
    let response = axios
      .post("http://localhost:2000/checkLogin", {}, { withCredentials: true, timeout: 1000 })
      .then((result) => {
        setLoggedIn(true);
        setMessage(result.data.message);
        setErrorMessage("");
        setIsLogginIn(false);
      })
      .catch((error) => {
        setErrorMessage("Auto login failed");
        setIsLogginIn(false);
      });
  };
  return (
    <div className="mainSignup">
      <div className="authActions">
        {!loggedIn && <button onClick={loginAction}>Login</button>}
        {loggedIn && <button onClick={logoutAction}>Logout</button>}
        {isLoggingIn && <Spinner />}
      </div>
      <div className="statusPoints">
        <p className="error">{errorMessage}</p>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default Signup;
