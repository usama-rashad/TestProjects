import {useState, useEffect} from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timeoutIndex = setTimeout(() => setCount(count + 1), 1);
		console.log(timeoutIndex);
		return () => {
			console.log("Clearing timer index " + timeoutIndex);
			clearTimeout(timeoutIndex);
		};
	}, [count]);

	return <main>{count}</main>;
};

export default Counter;
