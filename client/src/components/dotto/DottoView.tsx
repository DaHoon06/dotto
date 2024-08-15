import { ReactElement, ReactNode } from "react";
import * as S from "./styles/DottoView.styled";
import { DottoPostList } from "@components/dotto/DottoPostList";
import { useRecentPostsQuery } from "@services/queries/hooks/dotto/postQuery";

interface DottoViewProps {
  children?: ReactNode;
}

export const DottoView = ({ children }: DottoViewProps): ReactElement => {
  const recentPostQuery = useRecentPostsQuery();

  return (
    <S.DottoViewLayout>
      {children}
      {recentPostQuery.isLoading && <div>TEEST</div>}
      <DottoPostList
        posts={recentPostQuery?.data || []}
        isLoading={recentPostQuery.isLoading || false}
      />
    </S.DottoViewLayout>
  );
};
