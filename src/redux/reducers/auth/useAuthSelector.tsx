import { useAppSelector } from "@hooks/redux";

export const useAuthSelector = () => useAppSelector((state) => state.auth);
