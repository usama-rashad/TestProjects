import { TypedUseSelectorHook, useDispatch,useSelector } from 'react-redux'
import { RootState,appDispatch} from './store'

export const dispatch : ()=> appDispatch = useDispatch;
export const appState : TypedUseSelectorHook<RootState> = useSelector;

