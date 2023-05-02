import { UserData } from "@reducers/profile/profile.types";
import { TCartProduct } from "@reducers/profile/profileCart/profileCart.types";
import { api } from ".";

export const profileService = {
  getUserData: (): Promise<UserData> => api.get("users/1"),
  getUserProductsCart: (id: number): Promise<TCartProduct[]> =>
    api.get(`carts/user/${id}`),
};
