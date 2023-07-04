import { createSlice } from "@reduxjs/toolkit";
import {
  ProfileChangeAccessTokenAction,
  TInitialState,
  UserData,
} from "./profile.types";
import { getUserDataThunk } from "./profile.thunk";

import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";

const initialState: TInitialState = {
  userData: {} as UserData,
  accessToken: "",
  loading: false,
  success: false,
  isSetFromReducer: false,
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
      Cookies.set("accessToken", payload, {
        // expires: new Date(jwtDecode(payload).exp * 1000),
      });
      state.accessToken = payload;
      state.isSetFromReducer = true;
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
