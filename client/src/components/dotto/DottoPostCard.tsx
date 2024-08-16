import { ReactElement } from "react";
import * as S from "./styles/DottoPostCard.styled";
import Image from "next/image";
import { DottoPostListState } from "@interfaces/dotto/postList";
import { Typography } from "@components/common/typograhpy";
import FlexBox from "@components/common/boxes/FlexBox";
import styled from "styled-components";

interface DottoPostCardProps {
  post: DottoPostListState;
}

const NoImageLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;

  &::after {
    width: 100%;
    text-align: center;
    content: "No Image";
    color: #222;
  }
`;

export const NoImage = (): ReactElement => {
  return <NoImageLayout />;
};

export const DottoPostCard = ({ post }: DottoPostCardProps): ReactElement => {
  const { thumbnails, nickname, title, originPrice, tags } = post;

  const priceConvert = (price: number): string => {
    const unit = 10000;
    return `${price / unit} 만원`;
  };

  return (
    <S.DottoPostCardLayout>
      <div className={"thumbnail_wrapper"}>
        {thumbnails.length > 0 && (
          <Image
            src={thumbnails[0].path}
            alt={thumbnails[0].name}
            width={288}
            height={288}
          />
        )}
        {thumbnails.length === 0 && <NoImage />}
      </div>

      <section>
        <Typography className={"nickname"}>{nickname}</Typography>
        <Typography className={"title"}>{title}</Typography>

        <FlexBox $flexDirection={"row"} $justifyContent={"flex-start"} $gap={8}>
          {post?.eventPrice && (
            <Typography className={"eventPrice"}>
              {priceConvert(post.eventPrice)}
            </Typography>
          )}
          <Typography className={"originPrice"}>
            {priceConvert(originPrice)}
          </Typography>
          {post?.salePercent && (
            <Typography className={"percent"}>{post.salePercent} %</Typography>
          )}
        </FlexBox>

        <FlexBox $flexDirection={"row"} $justifyContent={"flex-start"} $gap={4}>
          {tags.length > 0 &&
            tags.map((tag, index) => (
              <span className={"tag"} key={`${tag}_hash_tag_${index}`}>
                {tag}
              </span>
            ))}
        </FlexBox>
      </section>
    </S.DottoPostCardLayout>
  );
};
