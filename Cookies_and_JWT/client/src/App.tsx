import React from "react";
import "./App.scss";
import Login from "./components/login/Login";
import Session from "./components/session/Session";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <div className="mainApp">
      <Login />
      <Session />
      <Logout />
    </div>
  );
}

export default App;
