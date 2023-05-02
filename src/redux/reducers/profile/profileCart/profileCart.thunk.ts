import { profileService } from "@api/profileService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getUserProductsCartThunk = createAsyncThunk(
  "profileCart/getUserProductsCartThunk",
  async (id: number, { rejectWithValue }) => {
    try {
      console.log("getUserProductsCartThunk run");
      const response = await profileService.getUserProductsCart(id);
      console.log(response);
      return response;
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: AxiosError = err as any;
      if (!error.response) {
        throw err;
      }
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
