import { AppSliceType } from "@/types/store/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  isLoadingPage: true,
};

const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setIsLoadingPage: (state, action) => {
      state.isLoadingPage = action.payload;
    },
  },
});

export const AppReducer = AppSlice.reducer;

export const { setIsLoadingPage } = AppSlice.actions;
