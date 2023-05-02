import { createSlice } from "@reduxjs/toolkit";
import {
  ProfileChangeAccessTokenAction,
  TInitialState,
  UserData,
} from "./profile.types";
import { getUserDataThunk } from "./profile.thunk";

import Cookies from "js-cookie";

const initialState: TInitialState = {
  userData: {} as UserData,
  accessToken: "",
  loading: false,
  success: false,
  isSetFromLocalStorage: false,
  profileError: {
    status: false,
    message: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeAccessToken(state, { payload }: ProfileChangeAccessTokenAction) {
      localStorage.setItem("accessToken", payload);
      state.accessToken = payload;
      state.isSetFromLocalStorage = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDataThunk.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userData = payload;
      Cookies.set("userId", state.userData.id.toString(), { expires: 7 });
      // console.log(state.userData);
    });
    builder.addCase(getUserDataThunk.rejected, (state, { payload }) => {
      state.profileError = {
        status: true,
        message: payload as string,
      };
      state.loading = false;
      state.success = false;
    });
  },
});

export const { changeAccessToken } = profileSlice.actions;
export default profileSlice.reducer;
