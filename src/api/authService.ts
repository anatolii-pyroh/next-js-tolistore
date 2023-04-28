import { ILogin } from "@customTypes/index";
import { api } from ".";
import { FetchAuthSignInResponse } from "@reducers/auth/auth.types";

export const authService = {
  signIn: (data: ILogin): Promise<FetchAuthSignInResponse> =>
    api.post("auth/login", data).then((res) => res.data),
};
