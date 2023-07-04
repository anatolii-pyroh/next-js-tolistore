import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, createSlice } from "@reduxjs/toolkit";

import { signInThunk } from "./auth.thunk";
import { TInitialState } from "./auth.types";

const initialState: TInitialState = {
  user: "",
  loading: false,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetSuccessState(state) {
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    });

    builder.addCase(signInThunk.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(signInThunk.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(signInThunk.rejected, (state) => {
      state.loading = false;
      state.success = false;
    });
  },
});

export const { resetSuccessState } = authSlice.actions;
export default authSlice.reducer;
