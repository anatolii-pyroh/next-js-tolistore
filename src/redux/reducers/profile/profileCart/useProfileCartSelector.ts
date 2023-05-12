import { useAppSelector } from "@hooks/redux";

export const useProfileCartSelector = () =>
  useAppSelector((state) => state.profileCart);
