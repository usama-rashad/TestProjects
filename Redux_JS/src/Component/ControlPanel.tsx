import React from "react";

import {dispatch} from '../Redux/store'


import {add,sub} from '../Redux/counterReducer'

const ControlPanel = () => {
    const addCounter = () =>{
        dispatch(add(1));
    }
    const subCounter = () =>{
        dispatch(sub(1));      
    }
    return (
        <div className="ControlPanel_Main">
            <h4>Control Panel</h4>
            <button onClick={addCounter}>Add</button>
            <button onClick={subCounter}>Sub</button>
        </div>
    )
}

export default ControlPanel;