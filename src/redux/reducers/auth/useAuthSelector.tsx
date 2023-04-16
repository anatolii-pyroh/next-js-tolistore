import { useAppSelector } from "@hooks/hooks";

export const useAuthSelector = () => useAppSelector((state) => state.auth);
