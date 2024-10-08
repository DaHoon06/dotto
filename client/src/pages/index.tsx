import { Banner } from "@components/banner/Banner";
import { DottoView } from "@components/dotto/DottoView";
import { DottoTitle } from "@components/dotto/DottoTitle";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "@lib/tanstack";
import { dottoRecentPostsListAPi } from "@services/api/dotto.api";
import { dottoQueryKeys } from "@services/queries/keys";
import { useRecentPostsQuery } from "@services/queries/hooks/dotto/postQuery";

export default function MainPage() {
  const recentPostQuery = useRecentPostsQuery();

  return (
    <>
      <Banner />
      <DottoView
        posts={recentPostQuery?.data || []}
        isLoading={recentPostQuery.isLoading || false}
      >
        <DottoTitle />
      </DottoView>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    queryClient.prefetchQuery({
      queryKey: [dottoQueryKeys.recentPosts],
      queryFn: () => dottoRecentPostsListAPi(),
    });

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
