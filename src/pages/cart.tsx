import React from "react";
import { wrapper } from "@store/index";
import { getUserProductsCartThunk } from "@reducers/profile/profileCart/profileCart.thunk";
import { useProfileCartSelector } from "@reducers/profile/profileCart/useProfileCartSelector";

const Cart = () => {
  const { cartData } = useProfileCartSelector();
  return <div>{JSON.stringify(cartData)}</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { profile } = store.getState();

    store.dispatch(getUserProductsCartThunk(profile.userData.id));

    return {
      props: {},
    };
  }
);

export default Cart;
