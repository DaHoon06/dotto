import { FlexBox } from "@components/common/boxes";
import { ThemeButton } from "@components/common/buttons";
import { Typography } from "@components/common/typograhpy";
import { ReactElement } from "react";

interface FilterButtonGroupProps {}

export const FilterButtonGroup = (): ReactElement => {
  return (
    <FlexBox $flexDirection="row" $flexWrap="nowrap" $gap={12}>
      <ThemeButton variant="white100" width={80}>
        <Typography as={"span"}>초기화</Typography>
      </ThemeButton>
      <ThemeButton variant="black000">
        <Typography as={"span"}>검색하기</Typography>
      </ThemeButton>
    </FlexBox>
  );
};
