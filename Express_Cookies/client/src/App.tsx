import "./App.scss";
import React from "react";

// Components
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="mainApp">
      <p>Cookie App</p>
      <Signup />
    </div>
  );
}

export default App;
