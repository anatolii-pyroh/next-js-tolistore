import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { wrapper } from "@store/index";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { Layout } from "@components/Common/Layout";
import { Loader } from "@components/Common/Loader";

import "@styles/index.scss";

export default function App({ Component, router, ...rest }: AppProps) {
  const [loading, setLoading] = useState(false);
  const { store, props } = wrapper.useWrappedStore(rest);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleStartRouteChanging = () => setLoading(true);
    const handleCompleteRouteChanging = () => setLoading(false);

    router.events.on("routeChangeStart", handleStartRouteChanging);
    router.events.on("routeChangeComplete", handleCompleteRouteChanging);

    return () => {
      router.events.off("routeChangeStart", handleStartRouteChanging);
      router.events.off("routeChangeComplete", handleCompleteRouteChanging);
    };
  }, []);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={router.pathname}
            classNames='pageTransition'
            timeout={300}
            nodeRef={nodeRef}
          >
            <Layout ref={nodeRef}>
              <Component {...props.pageProps} />
            </Layout>
          </CSSTransition>
        </SwitchTransition>

        <Loader loading={loading} />
      </Provider>
    </ThemeProvider>
  );
}
