import { useAppSelector } from "@hooks/index";

export const useAuthSelector = () => useAppSelector((state) => state.auth);
