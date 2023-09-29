import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import data from "./Components/App/data";
import AnimalCard from "./Components/AnimalCard/AnimalCard";

function App() {
  return (
    <div className="mainApp">
      {data.map((animal) => {
        return <AnimalCard {...animal} />;
      })}
    </div>
  );
}

export default App;
