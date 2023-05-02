import { authService } from "@api/authService";
import { ILogin } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeAccessToken } from "@reducers/profile/profile.reducer";
import axios from "axios";

export const signInThunk = createAsyncThunk(
  "auth/signInThunk",
  async (data: ILogin, { dispatch, rejectWithValue }) => {
    try {
      const response = await authService.signIn(data);
      dispatch(changeAccessToken(response.token));
    } catch (err) {
      if (!axios.isAxiosError(err)) {
        return;
      }
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
