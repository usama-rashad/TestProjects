import { configureStore } from "@reduxjs/toolkit";
import { UploadReducer } from "./fileUploadReducer";

const fileUploadStore = configureStore({
  reducer: {
    upload: UploadReducer,
  },
});

export default fileUploadStore;
