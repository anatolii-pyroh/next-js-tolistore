import { useAppDispatch } from "@hooks/index";
import { bindActionCreators } from "@reduxjs/toolkit";
import { changeAccessToken } from "./profile.reducer";

export const useProfileActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ changeAccessToken }, dispatch);
};
