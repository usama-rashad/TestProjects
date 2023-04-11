import { useEffect, useState } from "react";
import { RootState, appDispatch, store } from "./store";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { IPokemonData, getPokemonData, reset } from "./registerSlice";
import { addDoc } from "@firebase/firestore";
import { useAppSelector } from "./hooks";

function App() {
  const storeState = useAppSelector((store) => store.pokemon);
  const dispatch = useDispatch<appDispatch>();

  useEffect(() => {
    console.log("State updated" + JSON.stringify(storeState));
  }, [storeState]);

  const addDataAction = () => {
    dispatch(getPokemonData());
  };
  return (
    <div className="App">
      <div className="buttons">
        <button onClick={addDataAction}>Add Data</button>
      </div>
      <div className="results">
        <span>Results</span>
        <div className="page">
          <>
            {storeState.data.map((item, index) => {
              return <span className="item">{item.pokemon.name}</span>;
            })}
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
