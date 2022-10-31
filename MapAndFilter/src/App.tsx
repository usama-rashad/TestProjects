import "./App.css";
import Header, { DataParameters } from "./Components/Header";
import { HeaderContext } from "./Context";

function App() {
  const headerPars: DataParameters = { pars: ["one", "two", "three"] };

  return (
    <div>
      <h4>App</h4>
      <HeaderContext.Provider value={headerPars}>
        <Header />
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
