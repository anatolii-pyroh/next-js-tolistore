import { FetchProfileUserDataResponse } from "@reducers/profile/profile.types";
import { api } from ".";

export const profileService = {
  getUserData: (): Promise<FetchProfileUserDataResponse> =>
    api.get("users/1").then((res) => res.data),
  getUserProductsCart: (id: number) =>
    api.get(`carts/user/${id}`).then((res) => res.data),
};
