import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { TCartProduct, TInitialState } from "./profileCart.types";
import { HYDRATE } from "next-redux-wrapper";
import { getUserProductsCartThunk } from "./profileCart.thunk";

const initialState: TInitialState = {
  loading: true,
  success: false,
  cartData: {} as TCartProduct,
  profileCartError: {
    status: false,
    message: "",
  },
};

const profileCartSlice = createSlice({
  name: "profileCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.profile,
      };
    });

    builder.addCase(getUserProductsCartThunk.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.profileCartError = {
        status: false,
        message: "",
      };
    });
    builder.addCase(
      getUserProductsCartThunk.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.profileCartError = {
          status: false,
          message: "",
        };
        // console.log(payload);
        state.cartData = payload;
      }
    );
    builder.addCase(getUserProductsCartThunk.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.profileCartError = {
        status: true,
        message: payload as unknown as string,
      };
    });
  },
});

export default profileCartSlice.reducer;
