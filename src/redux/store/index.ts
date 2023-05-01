import authReducer from "@reducers/auth/auth.reducer";
import profileReducer from "@reducers/profile/profile.reducer";
import profileCartReducer from "@reducers/profile/profileCart/profileCart.reducer";
import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  profileCart: profileCartReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
