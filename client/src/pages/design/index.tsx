import { DottoView } from "@components/dotto/DottoView";
import { FilterList } from "@components/dotto/filter/FilterList";
import styled from "styled-components";
import { Fragment, useState } from "react";
import { OptionGroup } from "@components/dotto/filter/OptionGroup";
import { MobileOptionGroup } from "@components/dotto/filter/MobileOptionGroup";
import { usePostsListInfinitScroll } from "@services/queries/hooks/dotto/postQuery";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { queryClient } from "@lib/tanstack";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { dottoPostListApi } from "@services/api/dotto.api";
import { dottoQueryKeys } from "@services/queries/keys";
import { dehydrate } from "@tanstack/react-query";

export const DesignPageLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const DesignPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: listQueryData,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = usePostsListInfinitScroll();

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <DesignPageLayout>
      <FilterList isOpen={isOpen} />
      <div>
        <OptionGroup onClickFilter={() => setIsOpen(!isOpen)} />
        <MobileOptionGroup />
        {listQueryData?.pages.map((page, index) => {
          return (
            <Fragment key={`dotto_post_list_page_${index + 1}`}>
              <DottoView posts={page || []} isLoading={isLoading || false} />
            </Fragment>
          );
        })}

        {isFetchingNextPage ? <div /> : <div ref={setTarget} />}
      </div>
    </DesignPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    queryClient.prefetchInfiniteQuery({
      queryKey: [dottoQueryKeys.postsLists],
      queryFn: ({ pageParam = 1 }) => dottoPostListApi(pageParam),
      initialPageParam: 1,
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

export default DesignPage;
