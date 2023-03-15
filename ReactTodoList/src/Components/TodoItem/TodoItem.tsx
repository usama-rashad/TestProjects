import React, {useState} from "react";
import "./TodoItem.scss";

interface ITodoItem {
	id: number;
	name: string;
	deleteItemAction: (itemID: number) => void;
}

function TodoItem(props: ITodoItem) {
	const [itemName, setItemName] = useState<string>("");

	function deleteItem(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		props.deleteItemAction(props.id);
	}

	return (
		<div className="todoItemMain">
			<span className="itemName">{props.name}</span>
			<button
				onClick={e => {
					deleteItem(e);
				}}
			>
				Delete
			</button>
		</div>
	);
}

export default TodoItem;
