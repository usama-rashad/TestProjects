import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { fileUploadReducer } from "./components/FileUploadManager/fileUploadManagerReducer";
import { fileStatusCheckReducer } from "./components/FileUploadManager/fileStatusCheckReducer";
import { fileNameUpdateReducer } from "./components/FileUploadManager/fileNameUpdateReducer";
import { useDispatch } from "react-redux";

const fileManagementReducer = combineReducers({ fileUploadReducer, fileStatusCheckReducer, fileNameUpdateReducer });

export const rootStore = configureStore({
  reducer: {
    fileUpload: fileManagementReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
