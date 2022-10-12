
interface reducerState {
    state : number;
}


interface reducerAction {
    type : string;
    payload : number;
}

const initialState : reducerState = {state : 0}


function CounterReducer (state : reducerState , action : reducerAction) {
    switch(action.type)
    {
        case 'Add':
            return {...state,state:state.state + action.payload}
            break;
        case 'Sub':
            return {...state,state:state.state - action.payload}
            break;
        default:
            return {state}
    }
}



export default CounterReducer;