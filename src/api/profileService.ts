import { UserData } from "@reducers/profile/profile.types";
import { TCartProduct } from "@reducers/profile/profileCart/profileCart.types";
import { api } from ".";

export const profileService = {
  getUserData: (): Promise<UserData> =>
    api.get("users/1").then((res) => res.data),
  getUserProductsCart: (id: number): Promise<TCartProduct> =>
    api.get(`carts/user/${id}`).then((res) => res.data),
};
