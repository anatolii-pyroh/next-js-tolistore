import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AppThunk } from "@store/index";

import { getUserDataThunk, signInThunk } from "./auth.thunk";
import { TInitialState } from "./auth.types";

const initialState: TInitialState = {
  isSetFromLocalStorage: false,
  user: "",
  accessToken: "",
  loading: false,
  success: false,
  userData: {} as TInitialState["userData"],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, { payload }: PayloadAction<string>) {
      // console.log("Before:", state.user);
      state.user = payload;
      // console.log("After:", state.user);
    },
    changeAccessToken(state, { payload }: PayloadAction<string>) {
      localStorage.setItem("accessToken", payload);
      state.accessToken = payload;
      state.isSetFromLocalStorage = true;
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

    builder.addCase(getUserDataThunk.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userData = payload;
      console.log(state.userData);
    });
    builder.addCase(getUserDataThunk.rejected, (state, { payload }) => {
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

export const { changeAccessToken, addUser, resetSuccessState } =
  authSlice.actions;
export default authSlice.reducer;
