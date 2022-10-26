import react from 'react'


import {AppDispatch,AppRootState} from './store'
import {useSelector,useDispatch, TypedUseSelectorHook} from 'react-redux'


export const appDispatch : () => AppDispatch = useDispatch;
export const appSelector : TypedUseSelectorHook<AppRootState> = useSelector