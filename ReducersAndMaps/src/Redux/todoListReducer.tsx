import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface TodoListInterface {
    item : string[];
}

export interface  TodoListItemInterface {
    item : string;
}

const initialState : TodoListInterface = {
    item : [""]
}

const todoListSlice = createSlice({
    name : 'todoList',
    initialState,
    reducers:{
        addToList(state : TodoListInterface, action : PayloadAction<TodoListItemInterface>)
        {
            console.log("Item " + action.payload.item + " add to list");
            state.item.push(action.payload.item);
        },
        clearList(state: TodoListInterface)
        {
            console.log("List cleared.")
            state.item = [""];
        }
    }
})

// Exports 
export  const {addToList,clearList} = todoListSlice.actions;
export  const todoListReducer = todoListSlice.reducer;