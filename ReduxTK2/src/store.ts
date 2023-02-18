import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./Slices/counterSlice";

export const mainStore = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

export type RootState = ReturnType<typeof mainStore.getState>;
export type rootDispatch = typeof mainStore.dispatch;
