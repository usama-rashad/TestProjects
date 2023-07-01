import React from "react";
import "./App.scss";
import usePeopleData from "./Hooks/usePeopleData/usePeopleData";
import User from "./Components/User/User";
import Navbar from "./Components/Navbar/Navbar";
import { NavbarContext } from "./Contexts/NavbarProvider";

function App() {
  const [recordCount] = React.useState(0);
  const { userData, selectedData, applyDataCount } = usePeopleData();

  const navbarContext = React.useContext(NavbarContext);

  const updateCount = (count: number) => {
    console.log(count);
    applyDataCount(count);
  };

  return (
    <div className="mainApp">
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCount(parseInt(e.target.value))} />
      <div className="dataNavbar">
        <Navbar maxPageLimit={5} />
      </div>
      <div className="dataDisplay">
        {selectedData.map((user, index) => {
          return <User key={index} {...user} />;
        })}
      </div>
    </div>
  );
}

export default App;
