import { useAppSelector } from "@hooks/redux";

export const useProfileSelector = () =>
  useAppSelector((state) => state.profile);
