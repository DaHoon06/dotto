import { ReactElement } from "react";
import * as S from "./styles/DottoPostCard.styled";
import Image from "next/image";

interface DottoPostCardProps {
  imageIndex: number;
}

export const DottoPostCard = ({
  imageIndex,
}: DottoPostCardProps): ReactElement => {
  return (
    <S.DottoPostCardLayout>
      <div>
        <Image
          src={`/images/sample/sample${imageIndex}.png`}
          alt={"sample"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>하위 내용</div>
    </S.DottoPostCardLayout>
  );
};
