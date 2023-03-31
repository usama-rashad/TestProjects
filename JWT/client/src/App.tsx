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
  // Signup
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPass1, setSignupPass1] = useState("");
  const [signupPass2, setSignupPass2] = useState("");
  const [returnFlag, setReturnFlag] = useState(false);

  const resetState = () => {
    setTimeout(() => {
      setAuthState("");
    }, 2000);
  };

  const signOnAction = async () => {
    await axios
      .post("http://localhost:5000/login", { username: userName, password: pass })
      .then((res) => {
        const { message, error } = res.data;
        if (error == "1") {
          setAuthState("error");
          setServerMessage(message.response.data);
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

  const signupAction = async () => {
    let errResponse: any = null;
    await axios
      .post("http://localhost:5000/createUser", { username: signupUsername, password: signupPass1, reenteredPassword: signupPass2 })
      .then((res) => {
        const { message, error } = res.data;
        if (error == "1") {
          setAuthState("error");
          setServerMessage(message.response.data);
          resetState();
        } else {
          setAuthState("pass");
          setServerMessage("");
          setInterval(() => {
            setReturnFlag(true);
          }, 1000);
        }
      })
      .catch((err) => {
        errResponse = err;
        console.log(`${err}`);
        setAuthState("error");
        setServerMessage(err.response.data.message);
        resetState();
      })
      .finally(() => {
        console.log(errResponse);
      });
  };

  return (
    <div className="App">
      <div className={`container ${authState}`}>
        <div className="loginSignup">
          <LoginSignupPage
            serverMessage={serverMessage}
            loginAction={signOnAction}
            signupAction={signupAction}
            updateUsername={(a) => {
              setUserName(a);
            }}
            updatePassword={(b) => {
              setPass(b);
            }}
            updateSignupUsername={(name) => {
              setSignupUsername(name);
            }}
            updateSignupPass1={(pass1) => {
              setSignupPass1(pass1);
            }}
            updateSignupPass2={(pass2) => {
              setSignupPass2(pass2);
            }}
            bReturn={returnFlag}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
