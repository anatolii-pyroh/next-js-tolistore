import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "@store/index";
import { HYDRATE } from "next-redux-wrapper";

type TInitialState = {
  isLoggedIn: boolean;
  user: string;
};

const initialState: TInitialState = {
  isLoggedIn: false,
  user: "",
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
