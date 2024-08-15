import { ReactElement, ReactNode } from "react";
import * as S from "./styles/DottoView.styled";
import { DottoPostList } from "@components/dotto/DottoPostList";
import { DottoPostListState } from "@interfaces/dotto/postList";

interface DottoViewProps {
  children?: ReactNode;
  posts: DottoPostListState[];
  isLoading?: boolean;
}

export const DottoView = ({
  children,
  posts,
  isLoading,
}: DottoViewProps): ReactElement => {
  return (
    <S.DottoViewLayout>
      {children}
      <DottoPostList posts={posts || []} isLoading={isLoading || false} />
    </S.DottoViewLayout>
  );
};
