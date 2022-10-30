import {RootState,appDispatch} from './store'
import {TypedUseSelectorHook, useDispatch,useSelector} from 'react-redux'


export const appState : TypedUseSelectorHook<RootState> = useSelector;
export const dispatch : ()=> appDispatch = useDispatch;