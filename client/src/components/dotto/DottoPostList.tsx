import { ReactElement } from "react";
import * as S from "./styles/DottoPostList.styled";
import { DottoPostCard } from "@components/dotto/DottoPostCard";

const getRandomImageIndex = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const DottoPostList = (): ReactElement => {
  const numCards = 15;

  return (
    <S.DottoPostListLayout>
      {Array.from({ length: numCards }).map((_, index) => (
        <DottoPostCard key={index} imageIndex={getRandomImageIndex(1, 7)} />
      ))}
    </S.DottoPostListLayout>
  );
};
