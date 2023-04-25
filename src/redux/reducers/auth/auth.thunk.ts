import { authService } from "@api/authService";
import { ILogin } from "@customTypes/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const signInThunk = createAsyncThunk(
  "auth/signInThunk",
  async (data: ILogin, { rejectWithValue }) => {
    try {
      const response = await authService.signIn(data);
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
