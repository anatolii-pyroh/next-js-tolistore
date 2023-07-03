import { PayloadAction } from "@reduxjs/toolkit";

export type TInitialState = {
  user: string;
  loading: boolean;
  success: boolean;
};

// actions
export type FetchAuthActionType = PayloadAction<string>;

// api
export type FetchAuthSignInResponse = { token: string };
