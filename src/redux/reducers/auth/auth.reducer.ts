import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "@store/index";
import { HYDRATE } from "next-redux-wrapper";
import { signInThunk } from "./auth.thunk";

type TInitialState = {
  isSetFromLocalStorage: boolean;
  user: string;
  token: string;
  loading: boolean;
  success: boolean;
};

const initialState: TInitialState = {
  isSetFromLocalStorage: false,
  user: "",
  token: "",
  loading: false,
  success: false,
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
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;

      state.token = payload;
      state.isSetFromLocalStorage = true;
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

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
