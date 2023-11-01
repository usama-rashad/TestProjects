import "./App.scss";

import AppIcon from "./assets/Icon.png";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="app">
      <div className="left">
        <Navigation />
      </div>
      <div className="right"></div>
      <div className="top">
        <img id="appIcon" src={AppIcon} />
        <p id="appTitle">Generator Monitoring System</p>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
