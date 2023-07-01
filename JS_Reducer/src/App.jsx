import React from "react";
import "./App.scss";

// Redux
import { Provider } from "react-redux";

//Components
import Selection from "./Components/Selection/Selection";
import ModeStore from "./Components/Selection/redux/rootStore";

function App() {
  return (
    <div className="mainApp">
      <div className="top"></div>
      <div className="center">
        <div className="left">
          <Provider store={ModeStore}>
            <Selection />
          </Provider>
        </div>
        <div className="middle"></div>
        <div className="right"></div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
