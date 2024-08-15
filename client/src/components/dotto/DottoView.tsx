import { ReactElement, ReactNode } from "react";
import * as S from "./styles/DottoView.styled";
import { DottoPostList } from "@components/dotto/DottoPostList";

export const DottoView = ({ children }: ReactNode): ReactElement => {
  return (
    <S.DottoViewLayout>
      {children}
      <DottoPostList />
    </S.DottoViewLayout>
  );
};
