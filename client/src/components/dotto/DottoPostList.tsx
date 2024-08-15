import { Fragment, ReactElement } from "react";
import * as S from "./styles/DottoPostList.styled";
import { DottoPostCard } from "@components/dotto/DottoPostCard";
import { DottoPostListState } from "@interfaces/dotto/postList";
import { DottoPostListLoading } from "./DottoPostListLoading";

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
        <Fragment key={post.postId}>
          <DottoPostCard post={post} />
        </Fragment>
      ))}
    </S.DottoPostListLayout>
  );
};
