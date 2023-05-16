import { useAppDispatch } from "@hooks/redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { addUser, resetSuccessState } from "./auth.reducer";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ addUser, resetSuccessState }, dispatch);
};
