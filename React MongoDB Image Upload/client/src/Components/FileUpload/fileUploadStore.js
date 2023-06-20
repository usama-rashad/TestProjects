import { configureStore } from "@reduxjs/toolkit";
import fileUploadReducer from "./fileUploadReducer.js";

export const fileUploadStore = configureStore({
  reducer: {
    fileUpload: fileUploadReducer,
  },
});
