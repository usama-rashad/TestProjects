import {useState} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, reset} from "../src/Slices/counterSlice";
import {RootState} from "../src/store";
import {CustomButton} from "./Components/CustomButton/CustomButton";

function App() {
	const [index, setIndex] = useState(0);
	const counterValue = useSelector((state: RootState) => {
		return state.counter.value;
	});
	const dispatch = useDispatch();

	const incAction = () => {
		dispatch(increment());
	};

	const devAction = () => {
		dispatch(decrement());
	};

	const button1Action = (): number => {
		console.log("External button action triggered.");
		setIndex(n => n + 1);
		dispatch(reset());
		return index;
	};

	return (
		<div className="App">
			<button onClick={incAction}>Increment</button>
			<button onClick={devAction}>Decrement</button>
			<h1>{counterValue}</h1>

			<div className="controls">
				<CustomButton buttonAction={button1Action} />
			</div>
		</div>
	);
}

export default App;
