import { configureStore } from "@reduxjs/toolkit";
import { ModeReducer } from "./selectionReducer";

const ModeStore = configureStore({
  reducer: {
    mode: ModeReducer,
  },
});

export default ModeStore;
