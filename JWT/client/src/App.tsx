import "./App.scss";

// Third party imports
import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

// Components
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import Login from "./Components/Login/Login";

// Contexts

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
