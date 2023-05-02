import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, createSlice } from "@reduxjs/toolkit";

import { AppThunk } from "@store/index";

import { signInThunk } from "./auth.thunk";
import { FetchAuthActionType, TInitialState } from "./auth.types";

const initialState: TInitialState = {
  user: "",
  loading: false,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, { payload }: FetchAuthActionType) {
      // console.log("Before:", state.user);
      state.user = payload;
      // console.log("After:", state.user);
    },
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
    builder.addCase(signInThunk.rejected, (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.success = false;
    });
  },
});

export const fetchRandomName = (): AppThunk => async (dispatch) => {
  const response = await fetch(
    `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
  );
  const { data } = await response.json();
  dispatch(addUser(`${data.first_name} ${data.last_name}`));
};

export const { addUser, resetSuccessState } = authSlice.actions;
export default authSlice.reducer;
