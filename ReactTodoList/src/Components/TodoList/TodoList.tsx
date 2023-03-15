import React, {useState} from "react";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
	const [newItemName, setNewItemName] = useState<string>("");
	const [listOfItems, setListOfItems] = useState<string[]>([]);

	function addNewItemToList(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		if (newItemName.length > 0) {
			listOfItems.push(newItemName);
			setListOfItems(list => [...list]);
		}
	}

	function deleteItem(itemID: number) {
		listOfItems.splice(itemID, 1);
		setListOfItems(list => [...list]);
	}

	return (
		<div className="todoListMain">
			<div className="addNewItem">
				<input
					className="newItemInput"
					onChange={e => {
						setNewItemName(e.target.value);
					}}
					type="text"
					placeholder="Enter new item..."
				/>
				<button
					onClick={e => {
						addNewItemToList(e);
					}}
				>
					Add
				</button>
			</div>
			<div className="itemsList">
				{listOfItems.map((item, index) => {
					return <TodoItem name={item} key={index} id={index} deleteItemAction={n => deleteItem(n)} />;
				})}
			</div>
		</div>
	);
}

export default TodoList;
