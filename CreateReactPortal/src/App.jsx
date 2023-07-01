import React, { createContext } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";

export const PortalContext = createContext({
  portalState: false,
  setPortalState: null,
});

function App() {
  const [portalState, setPortalState] = React.useState(false);
  return (
    <div className="mainApp">
      <PortalContext.Provider
        value={{ portalState: portalState, setPortalState: setPortalState }}
      >
        <Navbar />
        <Content />
      </PortalContext.Provider>
    </div>
  );
}

export default App;
