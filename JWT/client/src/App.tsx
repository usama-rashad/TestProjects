import { useEffect, useState } from "react";
import { ACCESS_TOKEN_SECRET } from "./../secrets";
import axios from "axios";
import { SignJWT } from "jose";
import "./App.scss";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";

function App() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [authState, setAuthState] = useState("");

  const resetState = () => {
    setTimeout(() => {
      setAuthState("");
    }, 2000);
  };

  const signOnAction = async () => {
    await axios
      .post("http://localhost:5000/checkUser", { username: userName, password: pass })
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
        <div className="top">
          <span className="title">JWT</span>
        </div>
        <div className="middle">
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
          <Button onClick={signOnAction} title="Login" />
        </div>
        <div className="bottom">{serverMessage != "" && <span className="messages">{serverMessage}</span>}</div>
      </div>
    </div>
  );
}

export default App;
