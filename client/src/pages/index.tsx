import { Banner } from "@components/banner/Banner";
import { DottoView } from "@components/dotto/DottoView";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "@lib/tanstack";

export default function MainPage() {
  return (
    <>
      <Banner />
      <DottoView />
    </>
  );
}

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
