import React from "react";
import { wrapper } from "@store/index";
import { getUserProductsCartThunk } from "@reducers/profile/profileCart/profileCart.thunk";

import { UserProductsCartPage } from "@views/UserProductsCartPage";

const Cart = () => {
  return <UserProductsCartPage />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const userId = context.req.cookies.userId;
    if (!userId) {
      return {
        notFound: true,
      };
    }

    await store.dispatch(getUserProductsCartThunk(Number(userId)));
    return {
      props: {},
    };
  }
);

export default Cart;
