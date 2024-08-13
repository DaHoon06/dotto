import type { AppProps } from "next/app";
import { ReactElement, useState } from "react";
import { queryClient } from "@lib/tanstack";
import { GlobalStyle, theme } from "@styles/styled-components";
import { ThemeProvider } from "styled-components";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { ToastHandler } from "@components/common/toast";
import { BaseLayout } from "@layouts/BaseLayout";
import "@styles/sass/index.scss";

const DottoApp = ({ Component, pageProps }: AppProps): ReactElement => {
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

export default DottoApp;
