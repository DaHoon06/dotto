import { ReactElement } from "react";
import * as S from "./styles/DottoPostList.styled";
import { DottoPostCard } from "@components/dotto/DottoPostCard";
import { DottoPostListState } from "@interfaces/dotto/postList";
import { DottoPostListLoading } from "./DottoPostListLoading";
import Link from "next/link";

interface DottoPostListProps {
  posts: DottoPostListState[];
  isLoading?: boolean;
}

export const DottoPostList = ({
  posts,
  isLoading,
}: DottoPostListProps): ReactElement => {
  return (
    <S.DottoPostListLayout>
      {isLoading && <DottoPostListLoading />}
      {posts.map((post) => (
        <Link href={`/design/${post.postId}`} key={post.postId}>
          <DottoPostCard post={post} />
        </Link>
      ))}
    </S.DottoPostListLayout>
  );
};
