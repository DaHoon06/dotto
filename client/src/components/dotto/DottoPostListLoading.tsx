import { ReactElement } from "react";
import { DottoPostCardSkeleton } from "./DottoPostCardSkeleton";

export const DottoPostListLoading = (): ReactElement => {
  return (
    <>
      {Array.from({ length: 16 }, (_, index) => (
        <DottoPostCardSkeleton key={`post_skeleton_${index}`} />
      ))}
    </>
  );
};
