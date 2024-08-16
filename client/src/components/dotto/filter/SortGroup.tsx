import styled from "styled-components";
import React, { useState } from "react";
import { SelectOptions } from "@components/common/select-box/SelectBox";
import dynamic from "next/dynamic";

const SelectBox = dynamic(
  () =>
    import("../../common/select-box/SelectBox").then((mod) => mod.SelectBox),
  {
    ssr: false,
  }
);

const SortGroupLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SORT: SelectOptions[] = [
  { label: "최신순", value: "최신순" },
  { label: "오래된순", value: "오래된순" },
];

export const SortGroup = () => {
  const [sort, setSort] = useState<SelectOptions>(SORT[0]);

  const handleChangeSortSelect = (e: SelectOptions): void => {
    setSort(e);
  };

  return (
    <SortGroupLayout>
      <SelectBox
        options={SORT}
        onChange={handleChangeSortSelect}
        value={sort}
      />
    </SortGroupLayout>
  );
};
