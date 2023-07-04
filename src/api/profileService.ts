import { UserData } from "@reducers/profile/profile.types";
import { TCartProduct } from "@reducers/profile/profileCart/profileCart.types";
import { api } from ".";

export const profileService = {
  getUserData: (id: number): Promise<UserData> => api.get(`users/${id}`),
  getUserProductsCart: (id: number): Promise<TCartProduct[]> =>
    api.get(`carts/user/${id}`),
};
