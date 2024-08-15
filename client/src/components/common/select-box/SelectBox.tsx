import { ReactElement } from "react";
import Select from "react-select";

export type SelectOptions = {
  value: string;
  label: string;
};

interface SelectBoxProps {
  options: SelectOptions[];
}

export const SelectBox = ({ options }: SelectBoxProps): ReactElement => {
  return <Select options={options} />;
};
