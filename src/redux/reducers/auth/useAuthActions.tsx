import { useAppDispatch } from "@hooks/index";
import { bindActionCreators } from "@reduxjs/toolkit";
import { addUser, changeAccessToken } from "./auth.reducer";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ addUser, changeAccessToken }, dispatch);
};
