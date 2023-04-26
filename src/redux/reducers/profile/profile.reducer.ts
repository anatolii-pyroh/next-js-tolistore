import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TInitialState } from "./profile.types";
import { getUserDataThunk } from "./profile.thunk";
import { HYDRATE } from "next-redux-wrapper";

const initialState: TInitialState = {
  userData: {} as TInitialState["userData"],
  accessToken: "",
  loading: false,
  success: false,
  isSetFromLocalStorage: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeAccessToken(state, { payload }: PayloadAction<string>) {
      localStorage.setItem("accessToken", payload);
      state.accessToken = payload;
      state.isSetFromLocalStorage = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.profile,
      };
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

export const { changeAccessToken } = profileSlice.actions;
export default profileSlice.reducer;
