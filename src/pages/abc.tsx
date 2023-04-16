import { NextPage } from "next";
import { wrapper } from "@store/index";

import { fetchRandomName } from "@reducers/auth/auth.reducer";
import { useAuthSelector } from "@reducers/auth/useAuthSelector";

const Abc: NextPage = () => {
  const { user } = useAuthSelector();
  return (
    <>
      Random user name while fetching it from SSR <br /> and storing in
      Redux-Toolkit: <b>{user}</b>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // await actually has effect and without it nothing works
    await store.dispatch(fetchRandomName());
    return {
      props: {},
    };
  }
);
export default Abc;
