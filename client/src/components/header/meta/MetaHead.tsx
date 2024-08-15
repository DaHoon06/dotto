import { ReactElement } from "react";
import Head from "next/head";

export const MetaHead = (): ReactElement => {
  return (
    <Head>
      <title>닷투 | Dotto</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=0"
      />
      <meta httpEquiv="Subject" content="닷투 | Dotto." />
      <meta httpEquiv="Title" content="닷투 | Dotto." />
      <meta httpEquiv="Author" content="닷투 | Dotto." />
      <meta httpEquiv="Other Agent" content="*/*" />
      <meta httpEquiv="Copyright" content="닷투 | Dotto." />
      <meta httpEquiv="Distribution" content="닷투 | Dotto." />
      <meta
        name="keywords"
        content="닷투, Dotto, 타투, 도안, 디자인, 타투이스트, 타투 견적, 타투 문의, 타투 도안, 타투 시안"
      />
      <meta name="description" content={"타투 플랫폼 - 닷투 Dotto."} />
      <meta httpEquiv="Imagetoolbar" content="no" />
      <meta
        httpEquiv="Page-Enter"
        content="revealtrans(Duration=1,Transition=12)"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-web-app-capable" content="yes" />

      {/*<meta property="og:url" content="https://unisurvey.co.kr" />*/}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="닷투 | Dotto." />
      <meta property="og:description" content="타투 플랫폼 - 닷투 Dotto." />
      <meta name="color-scheme" content="dark light" />
      <meta
        name={"theme-color"}
        content={"#fff"}
        media={"(prefers-color-scheme: light)"}
      />
      <meta
        name={"theme-color"}
        content={"#fff"}
        media={"(prefers-color-scheme: dark)"}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
