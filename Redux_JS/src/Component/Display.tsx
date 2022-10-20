import React from 'react'
import { useSelector } from 'react-redux'

import {appSelector} from '../Redux/store'

function Display() {
    let counterValue = appSelector.counterReducer.value;
    return (
        <div className='Display_Main'>
            <h3>{`Counter value is : ${counterValue}`}</h3>
        </div>
  )
}

export default Display