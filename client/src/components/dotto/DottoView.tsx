import { ReactElement } from "react";
import * as S from "./styles/DottoView.styled";
import { DottoPostList } from "@components/dotto/DottoPostList";
import { Typography } from "@components/common/typograhpy";

export const DottoView = (): ReactElement => {
  return (
    <S.DottoViewLayout>
      <Typography variant={"h2"} $fontWeight={700}>
        닷투 게시판
      </Typography>

      <DottoPostList />
    </S.DottoViewLayout>
  );
};
