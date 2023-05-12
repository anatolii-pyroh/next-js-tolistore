import { useAppDispatch } from "@hooks/redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { changeAccessToken } from "./profile.reducer";

export const useProfileActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ changeAccessToken }, dispatch);
};
