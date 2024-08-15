import { SortGroup } from "@components/dotto/SortGroup";
import { FilterIcon } from "@components/common/icons";
import { Typography } from "@components/common/typograhpy";
import * as S from "./styles/MobileOptionGroup.styled";
import { ReactElement } from "react";

export const MobileOptionGroup = (): ReactElement => {
  return (
    <S.MobileOptionGroupLayout>
      <SortGroup />
      <S.FilterButtonLayout type={"button"}>
        <Typography>FILTER</Typography>
        <FilterIcon />
      </S.FilterButtonLayout>
    </S.MobileOptionGroupLayout>
  );
};
