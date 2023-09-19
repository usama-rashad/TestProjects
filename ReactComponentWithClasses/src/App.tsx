import { useState } from "react";
import "./App.scss";
import MessageButton from "./components/MessageButton/MessageButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mainApp">
      <MessageButton name="usama" />
      <MessageButton name="ayesha" />
    </div>
  );
}

export default App;
