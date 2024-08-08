import {PropsWithChildren} from "react";
import * as S from './styles/BaseLayout.styled';

interface BaseLayout extends PropsWithChildren {}

export const BaseLayout = ({children}: BaseLayout) => {
  return (
    <S.Main>
      {children}
    </S.Main>
  )
}
