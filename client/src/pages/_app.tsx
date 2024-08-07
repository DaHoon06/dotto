import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {ReactElement, useState} from "react";
import {queryClient} from "@lib/tanstack";
import {GlobalStyle} from "@styles/global.styled";
import {dehydrate, HydrationBoundary, QueryClientProvider} from "@tanstack/react-query";
import {ToastHandler} from "@components/common/toast";
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {BaseLayout} from "@layouts/BaseLayout";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const [queryState] = useState(() => queryClient);
  return (
    <>
      <GlobalStyle/>
      <QueryClientProvider client={queryState}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </HydrationBoundary>
      </QueryClientProvider>
      <div id="modal"/>
      <ToastHandler/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  try {
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return {
      props: {}
    }
  }
};

export default App;
