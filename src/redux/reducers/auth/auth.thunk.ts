import { authService } from "@api/authService";
import { ILogin } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeAccessToken } from "@reducers/profile/profile.reducer";
import { AxiosError } from "axios";

export const signInThunk = createAsyncThunk(
  "auth/signInThunk",
  async (data: ILogin, { dispatch, rejectWithValue }) => {
    try {
      const response = await authService.signIn(data);
      dispatch(changeAccessToken(response.token));
    } catch (_err) {
      const err = _err as AxiosError;
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
