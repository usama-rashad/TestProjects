import {useEffect} from "react";
import "../CustomButton/CustomButton.scss";

interface ICustomButton {
	buttonAction: () => number;
}

export const CustomButton = (props: ICustomButton) => {
	const clickAction = () => {
		console.log(props.buttonAction());
	};

	const mouseMoveEvent = (event: MouseEvent) => {
		console.log(event);
	};

	useEffect(() => {
		document.addEventListener("mousemove", mouseMoveEvent);
		return () => {
			document.removeEventListener("mousemove", mouseMoveEvent);
		};
	}, []);

	return (
		<div className="button-15" onClick={clickAction}>
			<h2>Reset</h2>
		</div>
	);
};
