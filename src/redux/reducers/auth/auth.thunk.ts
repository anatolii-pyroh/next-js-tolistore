import { authService } from "@api/authService";
import { ILogin } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { changeAccessToken } from "./auth.reducer";

export const signInThunk = createAsyncThunk(
  "auth/signInThunk",
  async (data: ILogin, { dispatch, rejectWithValue }) => {
    try {
      const response = await authService.signIn(data);
      dispatch(changeAccessToken(response.token));
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: AxiosError = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserDataThunk = createAsyncThunk(
  "auth/getUserDataThunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.getUserData();
      return response;
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: AxiosError = err as any;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
