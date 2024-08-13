import {ReactElement, ReactNode} from "react";
import * as S from "./styles/DottoView.styled";
import { DottoPostList } from "@components/dotto/DottoPostList";
import { Typography } from "@components/common/typograhpy";
import styled from "styled-components";
import Link from "next/link";
import {RedirectArrow} from "@components/common/icons";


export const DottoView = ({children}: ReactNode): ReactElement => {
  return (
    <S.DottoViewLayout>
      {children}
      <DottoPostList />
    </S.DottoViewLayout>
  );
};
