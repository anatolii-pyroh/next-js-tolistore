import React from "react";
import { wrapper } from "@store/index";
import { getUserProductsCartThunk } from "@reducers/profile/profileCart/profileCart.thunk";
import { useProfileCartSelector } from "@reducers/profile/profileCart/useProfileCartSelector";
// import Cookies from "js-cookie";

const Cart = () => {
  const { cartData } = useProfileCartSelector();
  return <div>{JSON.stringify(cartData)}</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const userId = context.req.cookies.userId;
    if (!userId) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    await store.dispatch(getUserProductsCartThunk(Number(userId)));
    return {
      props: {},
    };
  }
);

export default Cart;
