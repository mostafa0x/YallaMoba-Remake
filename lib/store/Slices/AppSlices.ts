import { AppSliceType } from "@/types/store/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  isLoadingHome: false,
  isLoadingProfile: false,
  isLoadingSearching: false,
};

const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setIsLoadingHome: (state, action) => {
      state.isLoadingHome = action.payload;
    },
    setIsLoadingProfile: (state, action) => {
      state.isLoadingProfile = action.payload;
    },
    setIsLoadingSearching: (state, action) => {
      state.isLoadingSearching = action.payload;
    },
  },
});

export const AppReducer = AppSlice.reducer;

export const { setIsLoadingHome, setIsLoadingProfile, setIsLoadingSearching } =
  AppSlice.actions;
