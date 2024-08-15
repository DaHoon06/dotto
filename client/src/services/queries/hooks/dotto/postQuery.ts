import { DottoPostListState } from "@interfaces/dotto/postList";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { dottoPostListApi, dottoRecentPostsListAPi } from "@services/api/dotto.api";
import { dottoQueryKeys } from "@services/queries/keys";

/**
 * 
 * @description 최근 게시글 16개
 */
export const useRecentPostsQuery = () => {
  return useQuery<
    DottoPostListState[],
    unknown,
    DottoPostListState[],
    [string]
  >({
    queryKey: [dottoQueryKeys.recentPosts],
    queryFn: () => dottoRecentPostsListAPi(),
    gcTime: 1000 * 60 * 5,
    staleTime: 60 * 1000,
    placeholderData: (previousData) => previousData,
  });
};

export const usePostsListInfinitScroll = () => {
  return useInfiniteQuery({
    queryKey: [],
    queryFn: ({page}) => dottoPostListApi(page) 
  })
}