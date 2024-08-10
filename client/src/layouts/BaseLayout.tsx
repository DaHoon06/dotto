import {PropsWithChildren} from "react";
import * as S from './styles/BaseLayout.styled';
import {Header} from "@components/header/Header";
import {Footer} from "@components/footer/Footer";

interface BaseLayout extends PropsWithChildren {}

export const BaseLayout = ({children}: BaseLayout) => {
  return (
    <>
      <Header />
      <S.Main>
        {children}
      </S.Main>
      <Footer />
    </>

  )
}
