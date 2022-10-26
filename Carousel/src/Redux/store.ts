import react from 'react'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {counterReducer, CounterType} from './counterReducer'
import {carouselReducer, CarouselType} from './carouselReducer'



const rootReducer = combineReducers({counter : counterReducer,carousel : carouselReducer})

export const store = configureStore({reducer:rootReducer
                                    
})

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;