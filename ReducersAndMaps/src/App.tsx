import { useState } from 'react';
import {appState,dispatch} from './Redux/hooks'
import {addToList,clearList, TodoListItemInterface} from './Redux/todoListReducer'

function App() {
  const todoList = appState((state)=>state.todoList);
  const [newItem,setNewItem] = useState("");


  const actionDispatch = dispatch();

  const addItemToList = () => {   
    actionDispatch(addToList({item:newItem}));
  }

  const clearTodoList = () => {
    actionDispatch(clearList());
  }

  const updateItem =(e)=>{
    console.log(e.target.value);
    setNewItem(e.target.value);
  }




  return (
    <div className="App">
      <input onChange={updateItem}/>
      <button onClick={clearTodoList}>Clear</button>
      <button onClick={addItemToList}>Add Item</button>
      {todoList.item.map((i)=>(<div>{i},</div>))}
    </div>
  )
}

export default App
