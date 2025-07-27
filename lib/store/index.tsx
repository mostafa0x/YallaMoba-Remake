import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./Slices/AppSlices";
import { UserReducer } from "./Slices/UserSlice";

export const store = configureStore({
  reducer: {
    UserReducer,
    AppReducer,
  },
});
