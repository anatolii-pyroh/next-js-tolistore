import { authService } from "@api/authService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

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
