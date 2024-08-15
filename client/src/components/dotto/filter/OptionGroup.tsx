import { SortGroup } from "@components/dotto/filter/SortGroup";
import { FilterIcon } from "@components/common/icons";
import { Typography } from "@components/common/typograhpy";
import { ReactElement } from "react";
import * as S from "./styles/OptionGroup.styled";

interface OptionGroupProps {
  onClickFilter: () => void;
}

export const OptionGroup = ({
  onClickFilter,
}: OptionGroupProps): ReactElement => {
  return (
    <S.OptionGroupLayout>
      <SortGroup />
      <FilterButton onClickFilter={onClickFilter} />
    </S.OptionGroupLayout>
  );
};

export const FilterButton = ({
  onClickFilter,
}: OptionGroupProps): ReactElement => {
  return (
    <S.FilterButtonLayout
      type="button"
      className="filter"
      onClick={onClickFilter}
    >
      <Typography $fontWeight={600} $fontSize={14}>
        FILTER
      </Typography>
      <FilterIcon />
    </S.FilterButtonLayout>
  );
};
