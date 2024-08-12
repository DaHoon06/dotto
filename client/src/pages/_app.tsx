import type { AppProps } from "next/app";
import { ReactElement, useState } from "react";
import { queryClient } from "@lib/tanstack";
import { GlobalStyle, theme } from "@styles/styled-components";
import { ThemeProvider } from "styled-components";
import {
  dehydrate,
  HydrationBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ToastHandler } from "@components/common/toast";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { BaseLayout } from "@layouts/BaseLayout";
import "@styles/sass/index.scss";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const [queryState] = useState(() => queryClient);
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryState}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </ThemeProvider>
        </HydrationBoundary>
      </QueryClientProvider>
      <div id="modal" />
      <ToastHandler />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default App;
