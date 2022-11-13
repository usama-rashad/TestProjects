import "./App.css";
import Basic from "./Basic";

import axios from 'axios'


function App() {




  const postData =()=>{
    console.log("Love u.")
  }

  return (
    <div className="App">
        <button onClick = {postData}>Post</button>
    </div>
  );
}

export default App;
