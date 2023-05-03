import { useProfileCartSelector } from "@reducers/profile/profileCart/useProfileCartSelector";

export const UserProductsCartPageComponent = () => {
  const { cartData } = useProfileCartSelector();
  return <div>{JSON.stringify(cartData)}</div>;
};

UserProductsCartPageComponent.displayName = "UserProductsCartPage";
