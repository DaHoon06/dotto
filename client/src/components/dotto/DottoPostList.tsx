import { Fragment, ReactElement } from "react";
import * as S from "./styles/DottoPostList.styled";
import { DottoPostCard } from "@components/dotto/DottoPostCard";
import { postListMockData } from "@components/dotto/mock/postListData";

export const DottoPostList = (): ReactElement => {
  return (
    <S.DottoPostListLayout>
      {postListMockData.map((post, index) => (
        <Fragment key={post.postId}>
          <DottoPostCard post={post} />
        </Fragment>
      ))}
    </S.DottoPostListLayout>
  );
};
