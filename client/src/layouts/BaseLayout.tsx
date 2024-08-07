import {PropsWithChildren} from "react";

export * as S from './styles/BaseLayout.styled';

interface BaseLayout extends PropsWithChildren {}

export const BaseLayout = ({children}: BaseLayout) => {
  return (
    <S.Main>
      {children}
    </S.Main>
  )
}
