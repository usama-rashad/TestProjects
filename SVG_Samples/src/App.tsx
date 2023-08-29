import "./App.scss";
import DataRow, { IDataChangePar } from "./components/DataRow/DataRow";
import useStorageInfo from "./hooks/useStorageInfo";

// Hooks

function App() {
  const { array, push, remove, length, updateRow } = useStorageInfo([]);

  const pushButtonAction = () => {
    push({ serialnumber: length, aisle: "" });
  };
  const removeButtonAction = () => {
    remove();
  };
  const updateButtonAction = () => {
    updateRow({ serialnumber: 999, aisle: "1A" }, 2);
  };
  const onRowDataChange = (e: IDataChangePar, index: number) => {
    updateRow({ serialnumber: e.serialNumber, aisle: e.aisle }, index);
  };

  return (
    <div className="mainApp">
      <div className="buttons">
        <button onClick={pushButtonAction}>Push</button>
        <button onClick={removeButtonAction}>Remove</button>
        <button onClick={updateButtonAction}>Update</button>
      </div>
      <div className="list">
        {array.map((row, index) => {
          return (
            <DataRow
              initialValue={{ serialNumber: 1, aisle: "A" }}
              index={index}
              source={{ serialNumber: row.serialnumber, aisle: row.aisle }}
              onDataChange={(e) => onRowDataChange(e, index)}
            />
          );
        })}
      </div>
      <div className="dataDisplay">
        <p>Data display</p>
        {array.map((row, index) => {
          return (
            <div className="row">
              <p>{row.serialnumber}</p>
              <p>{row.aisle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
