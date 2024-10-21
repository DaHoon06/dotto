import { SortGroup } from "@components/dotto/filter/SortGroup";
import { FilterIcon } from "@components/common/icons";
import { Typography } from "@components/common/typograhpy";
import * as S from "./styles/MobileOptionGroup.styled";
import { ReactElement } from "react";
import useUtilityStore from "../../../state/store/utilityStore";

export const MobileOptionGroup = (): ReactElement => {
  const { isScrolled } = useUtilityStore();
  return (
    <S.MobileOptionGroupLayout $isScrolled={isScrolled}>
      <SortGroup />
      <S.FilterButtonLayout type={"button"}>
        <Typography>FILTER</Typography>
        <FilterIcon />
      </S.FilterButtonLayout>
    </S.MobileOptionGroupLayout>
  );
};
