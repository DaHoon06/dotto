import { DottoPostListState } from "@interfaces/dotto/postList";
import { axiosInstance } from "@lib/axios";

/**
 * @description 홈 화면 닷투 리스트
 * 최근 작성 날짜 기준 최대 16개의 포스트를 가져온다.
 */
export const dottoRecentPostsListAPi = async (): Promise<
  DottoPostListState[]
> => {
  const url = `/dotto/recent/posts`;
  const { data } = await axiosInstance.get(url);
  return data.data;
};

interface dottoPostListProps {
  page: number; // 페이지 번호
  sort?: string; // 정렬 기준
  filter?: string[]; // 필터 옵션
}

/**
 * @description
 */
export const dottoPostListApi = async (
  page: number
): Promise<DottoPostListState[]> => {
  const url = `/dotto/posts?page=${page}`;
  const { data } = await axiosInstance.get(url);
  return data.data;
};
