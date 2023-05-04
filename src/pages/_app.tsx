import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { wrapper } from "@store/index";

import { Layout } from "@components/Common/Layout";
import { Loader } from "@components/Common/Loader";

import "@styles/index.scss";

export default function App({ Component, router, ...rest }: AppProps) {
  const [loading, setLoading] = useState(false);
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    const handleRouteComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
      <Loader loading={loading} />
    </Provider>
  );
}
