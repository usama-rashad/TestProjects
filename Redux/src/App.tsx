import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import counterSlice, { incremented, decremented } from "./features/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function add() {
    dispatch(incremented());
  }

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
