import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import { BookData } from "./Components/App/BookData";
import { DrugData } from "./Components/App/DrugData";
import DataRow from "./Components/DataRow/DataRow";
import Paginate from "./Components/Paginate/Paginate";

function App() {
  return (
    <div className="mainApp">
      <Paginate dataSource={BookData} renderItem={(item) => <DataRow data={item} />} />
      <Paginate dataSource={DrugData} renderItem={(item) => <DataRow data={item} />} />
    </div>
  );
}

export default App;
