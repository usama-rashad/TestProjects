import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import {airlineDataReducer} from "../slices/data/airlineFetchSlice";
import {fetchDataSliceReducer} from "../slices/data/dataFetchSlice";

// Import reducers
import {adminModeReducer} from "./../slices/adminpage/modeSelectionSlice";

// Create a root reducer
const rootReducer = combineReducers({
	adminModeReducer,
	fetchDataSliceReducer,
	airlineDataReducer,
});

// Create a store
export const store = configureStore({reducer: rootReducer});
