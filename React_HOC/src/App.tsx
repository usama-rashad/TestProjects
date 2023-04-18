import React from "react";
import "./App.scss";
import Form from "./Components/Form/Form";
import FormWithTitle from "./Components/FormWithTitle/FormWithTitle";

function App() {
  return (
    <div className="App">
      <span className="title">Welcome</span>
      <FormWithTitle master={<Form />} />
    </div>
  );
}

export default App;
