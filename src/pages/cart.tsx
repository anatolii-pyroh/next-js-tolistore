// import { wrapper } from "@store/index";
import React from "react";

const Cart = () => {
  return <div>User cart with products</div>;
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const { profile } = store.getState();
//     store.dispatch(getUserProductsCartThunk(profile.id));

//     return {
//       props: {},
//     };
//   }
// );

export default Cart;
