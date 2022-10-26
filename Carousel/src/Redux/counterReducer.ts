import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import react from 'react'
import { TestPromise } from '../Components/TestPromise';


export interface CounterType {
    value : number;
}

const initialState : CounterType = {
    value : 0
}

export const delayedAdd = createAsyncThunk('delayedAdd',async ()=>{
    let a = await TestPromise().then();
    return a;
})

console.log(delayedAdd);


const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        add(state : CounterType)
        {
            state.value +=1;
        }
    },
    extraReducers(builder){
        builder.addCase(delayedAdd.fulfilled,(state)=>{
            state.value +=1;
        })
    }
})


export const {add} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

