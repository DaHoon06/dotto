import { PropsWithChildren, useEffect, useRef } from "react";
import * as S from "./styles/BaseLayout.styled";
import { Header } from "@components/header/Header";
import { Footer } from "@components/footer/Footer";
import { MetaHead } from "@components/header/meta/MetaHead";
import useUtilityStore from "../state/store/utilityStore";

interface BaseLayout extends PropsWithChildren {}

export const BaseLayout = ({ children }: BaseLayout) => {
  const { isScrolled, setIsScrolled } = useUtilityStore();
  const introRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = ({ target }: any) => {
    const scrollTop = target.scrollTop;
    if (window.innerWidth <= 767) {
      setIsScrolled(true);
    } else {
      if (introRef.current && scrollTop > introRef.current?.clientHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    handleScroll({ target: document.body });
    document.body.addEventListener("scroll", handleScroll);
    document.body.addEventListener("resize", handleResize);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MetaHead />
      <Header ref={introRef} isScrolled={isScrolled} />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
};
