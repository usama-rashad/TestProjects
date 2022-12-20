import React, {useEffect, useState} from "react";
import "./App.scss";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import useStatusFlag from "./CustomHooks/useStatusFlag";

function App() {
	const [delayedflag, setDelayedFlag] = useStatusFlag();
	const [data, setData] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			console.log("Changing component...");
			setData(true);
		}, 5000);
	}, []);

	return (
		<div className="app">
			<span>This is a test App</span>
			{data ? <Component1 /> : <Component2 />}
		</div>
	);
}

export default App;
