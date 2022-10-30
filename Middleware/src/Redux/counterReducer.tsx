import {createSlice} from '@reduxjs/toolkit'


interface CounterType {
    value : number;
}

const initialState : CounterType = {
    value : 0
}

const  counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        add(state : CounterType){
            state.value ++;
        },
        sub(state:CounterType){
            state.value --;
        }
    }
})


export const {add,sub} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;