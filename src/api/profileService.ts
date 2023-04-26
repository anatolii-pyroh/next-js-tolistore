import { api } from ".";

export const profileService = {
  getUserData: () => api.get("users/1").then((res) => res.data),
};
