import { profileService } from "@api/profileService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getUserProductsCartThunk = createAsyncThunk(
  "profileCart/getUserProductsCartThunk",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await profileService.getUserProductsCart(id);
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
