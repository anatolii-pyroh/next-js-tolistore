import { useAppSelector } from "@hooks/index";

export const useProfileCartSelector = () =>
  useAppSelector((state) => state.profileCart);
