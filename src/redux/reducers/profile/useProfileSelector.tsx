import { useAppSelector } from "@hooks/index";

export const useProfileSelector = () =>
  useAppSelector((state) => state.profile);
