import {configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './counterReducer';
import {Middleware} from 'redux'



export const store = configureStore({reducer:{
    counter : counterReducer
}})


export type RootState = ReturnType<typeof store.getState>;
export type appDispatch =typeof store.dispatch;

export const exampleMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = storeApi => next => action => {
  const state = storeApi.getState() // correctly typed as RootState
}