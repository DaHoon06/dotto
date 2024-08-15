import { ReactElement } from "react";
import { FlexBox } from "@components/common/boxes";
import { DottoPostCardSkeletonLayout } from "./styles/DottoPostCardSkeleton.styled";

export const DottoPostCardSkeleton = (): ReactElement => {
  return (
    <DottoPostCardSkeletonLayout>
      <div className={"thumbnail_wrapper"} />

      <section>
        <div className={"nickname"} />
        <div className={"title"} />

        <FlexBox $flexDirection={"row"} $justifyContent={"flex-start"}>
          <div className={"eventPrice"} />
          <div className={"originPrice"} />
          <div className={"percent"} />
        </FlexBox>

        <FlexBox $flexDirection={"row"} $justifyContent={"flex-start"}>
          <div className={"tag"} />
        </FlexBox>
      </section>
    </DottoPostCardSkeletonLayout>
  );
};
