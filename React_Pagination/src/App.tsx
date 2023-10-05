import "./App.scss";
import DataColumn from "./Components/DataColumn/DataColumn";
import DataRow from "./Components/DataRow/DataRow";
import Paginate from "./Components/Paginate/Paginate";

const listOfNumberData: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const listOfLetterData: string[][] = [
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
];

function App() {
  return (
    <div className="mainApp">
      <h3>Paginate</h3>
      <Paginate<string> dataSource={listOfLetterData} renderRow={DataColumn} />
    </div>
  );
}

export default App;
