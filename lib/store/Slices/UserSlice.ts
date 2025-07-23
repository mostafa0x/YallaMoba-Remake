import { UserSliceType } from "@/types/store/UserSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserSliceType = {
  userToken: null,
  userData: null,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {},
});

export const UserReducer = UserSlice.reducer;
