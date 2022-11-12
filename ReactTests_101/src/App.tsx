import "./App.css";
import Basic from "./Basic";

import {Person} from './Basic'
import Basic2 from "./Basic2";

const peopleData : Person[] = [{id:1,name:"John",age:22},{id:2,name:"Sasha",age:23}]

function App() {
  return (
    <div className="App">
        <Basic data={peopleData}/>
        <Basic2/>
    </div>
  );
}

export default App;
