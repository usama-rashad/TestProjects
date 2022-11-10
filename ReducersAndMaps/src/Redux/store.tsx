import {configureStore} from '@reduxjs/toolkit'

import './todoListReducer'
import { todoListReducer } from './todoListReducer'


const store = configureStore({reducer:{
    todoList : todoListReducer
}})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;