import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import {
  SelectBox,
  SelectOptions,
} from "@components/common/select-box/SelectBox";

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
  const [sort, setSort] = useState("최신순");

  const handleChangeSortSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSort(e.target.value);
  };

  return (
    <SortGroupLayout>
      {/* <select value={sort} onChange={handleChangeSortSelect}>
        <option value={"최신순"}>최신순</option>
        <option value={"오래된순"}>오래된순</option>
      </select> */}
      <SelectBox options={SORT} />
    </SortGroupLayout>
  );
};
