import { profileService } from "@api/profileService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getUserDataThunk = createAsyncThunk(
  "profile/getUserDataThunk",
  async (_, { rejectWithValue }) => {
    try {
      const response = await profileService.getUserData();
      return response;
    } catch (_err) {
      const err = _err as AxiosError;
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
