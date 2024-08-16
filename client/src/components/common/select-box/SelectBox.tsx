import { ReactElement, useMemo, useState } from "react";
import Select, { StylesConfig } from "react-select";
import styled from "styled-components";

export type SelectOptions = {
  value: string;
  label: string;
};

interface SelectBoxProps {
  options: SelectOptions[];
  value: SelectOptions;
  onChange: (e: SelectOptions) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const CustomSelect = styled(Select)`
  width: max-content;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray300};
`;

export const SelectBox = (props: SelectBoxProps): ReactElement => {
  const { options, onChange, placeholder, value, disabled = false } = props;
  const [defaultValue, setDefaultValue] = useState<SelectOptions>(value);

  const customStyles: StylesConfig = useMemo(
    () => ({
      option: (provided: any, state: any) => ({
        ...provided,
        border: "1px border transparent",
        color: state.isSelected ? "#fff" : state.data.color,
        backgroundColor: state.isSelected ? "#222" : "#fff",
        opacity: 0.8,
        padding: 10,
        fontFamily: "Pretendard",
        borderRadius: 2,
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#e8e8e8",
          color: "#858585",
        },
      }),
      menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
      control: (provided: any, state: any) => ({
        ...provided,
        borderColor: state.isFocused ? "transparent" : "transparent",
        boxShadow: state.isFocused ? "transparent" : "transparent",
        backgroundColor: "transparent",
        color: "#222",
        fontFamily: "Pretendard",
        caretColor: "transparent",
        borderRadius: 6,
        height: 28,

        "& svg": {
          fill: state.isFocused ? "#606060" : "currentColor",
        },
        "&:hover": {
          cursor: "pointer",
        },
      }),
      indicatorSeparator: () => ({
        display: "none",
      }),
      placeholder: (provided: any) => ({
        ...provided,
        color: "#222",
        fontFamily: "Pretendard",
      }),
      singleValue: (provided: any, state: any) => ({
        ...provided,
        color: "#222",
        fontFamily: "Pretendard",
      }),
      menuList: (provided: any) => ({
        ...provided,
        "&:hover": {
          cursor: "pointer",
        },
      }),
      indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: "transparent",
        color: "#282828",
        padding: "0px",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }),
    }),
    []
  );

  /** @description react-select의 이벤트는 action에 따라 달라지므로 타입을 명시하기 어려움*/
  const handleChangeSelect = (e: any) => {
    onChange && onChange(e);
  };

  return (
    <CustomSelect
      options={options}
      isDisabled={disabled}
      onChange={handleChangeSelect}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      menuPortalTarget={document.body}
      styles={customStyles}
    />
  );
};
