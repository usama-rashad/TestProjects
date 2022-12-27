import "./App.scss";
import axios from "axios";

import React, { useState } from "react";
import AirlineDataReader from "./components/AirlineDataReader";

// This application will load data from the API

function App() {
  return (
    <div className="app">
      <AirlineDataReader />
    </div>
  );
}

export default App;
