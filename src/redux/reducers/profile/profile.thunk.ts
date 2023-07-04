import { profileService } from "@api/profileService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getUserDataThunk = createAsyncThunk(
  "profile/getUserDataThunk",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await profileService.getUserData(id);
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
