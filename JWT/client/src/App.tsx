import { useEffect, useState } from "react";
import { ACCESS_TOKEN_SECRET } from "./../secrets";
import axios from "axios";
import { SignJWT } from "jose";
import "./App.scss";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import LoginSignupPage from "./Components/Pages/LoginSignup/LoginSignupPage";

function App() {
  const [serverMessage, setServerMessage] = useState("");
  const [authState, setAuthState] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const resetState = () => {
    setTimeout(() => {
      setAuthState("");
    }, 2000);
  };

  const signOnAction = async () => {
    console.log(userName + pass);
    await axios
      .post("http://localhost:5000/login", { username: userName, password: pass })
      .then((res) => {
        const { message, error } = res.data;
        if (error == "1") {
          setAuthState("error");
          setServerMessage(message);
          resetState();
        } else {
          setAuthState("pass");
          setServerMessage("");
        }
      })
      .catch((err) => {
        console.log(`${err}`);
        setAuthState("error");
        setServerMessage("A system error has occured.");
        resetState();
      });
  };

  return (
    <div className="App">
      <div className={`container ${authState}`}>
        <div className="loginSignup">
          <LoginSignupPage
            serverMessage={serverMessage}
            loginAction={signOnAction}
            updateUsername={(a) => {
              setUserName(a);
            }}
            updatePassword={(b) => {
              setPass(b);
            }}
            signupAction={() => console.log("Signup pressed")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
