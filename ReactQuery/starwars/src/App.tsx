import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import People from "./components/People/People";
import Planets from "./components/Planets/Planets";

function App() {
  const [page, setPage] = useState<boolean>(false);

  return (
    <div className="appMain">
      <h1>Star Wars</h1>
      <Navbar setPage={(state) => setPage(state)} />
      <div className="content">{page ? <Planets /> : <People />}</div>
    </div>
  );
}

export default App;
