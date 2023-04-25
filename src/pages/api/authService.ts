import { ILogin } from "@customTypes/index";
import { api } from ".";

export const authService = {
  signIn: (data: ILogin) =>
    api.post("auth/login", data).then((res) => res.data),
  getUserData: () => api.get("users/1").then((res) => res.data),
};
