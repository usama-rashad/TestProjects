import React from "react";
import "./App.scss";
import Form from "./Components/Form/Form";
import WindowUtils from "./Components/Utils/WindowUtils";

function App() {
  return (
    <div className="App">
      <span className="title">Welcome</span>
      <WindowUtils />
      <Form />
    </div>
  );
}

export default App;
