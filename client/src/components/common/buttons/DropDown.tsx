import styled from "styled-components";
import {
  Children,
  cloneElement,
  Fragment,
  ReactElement,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Typography } from "@components/common/typograhpy";

type DropDownType = "icon" | "button";
type Variant = "black" | "default" | "icon";
type Direction = "left" | "right";

interface DropDownProps {
  $width?: string | number;
  $height?: string | number;
  $direction?: Direction;
  $type?: DropDownType;
}

// 버튼 스타일
export const DropDownButton = styled.button<DropDownProps>``;
// 메뉴 박스
export const DropDownMenu = styled.ul``;
// 드랍다운 아이템 스타일
export const DropDownItem = styled.li``;

// 스타일 구성
export const DropDownLayout = styled.div<DropDownProps>`
  position: relative;
  width: ${({ $width, $type }) =>
    $type === "button" ? ($width ? `${$width}px` : "169px") : "fit-content"};
  display: inline-block;
  z-index: 99;

  ${DropDownButton} {
    border: none;
    border-radius: 4px;
    padding: 0.6em 1em;
    background-color: #1976d2;
    color: white;
    font-size: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background-color 0.3s ease;
    z-index: 99;

    &:hover {
      background-color: #115293;
    }

    &:focus {
      outline: none;
    }

    // 테마 구현
    &.black {
      background-color: #333333;
      color: white;

      &:hover {
        background-color: #424242;
      }
    }

    &.icon {
      background-color: transparent;
      padding: 0;
    }
  }

  ${DropDownMenu} {
    width: ${({ $width }) => ($width ? $width : 169)}px;
    height: ${({ $height }) => ($height ? `${$height}px` : "auto")};
    list-style: none;
    padding: 0.5em 0;
    margin: 0;
    position: absolute;
    top: calc(100% + 0.5em);
    ${({ $direction }) => ($direction === "left" ? "left" : "right")}: 0px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 99;

    hr {
      border: none;
      border-top: 1px solid #d1d1d1;
      margin: 0.5em 0;
    }

    ${DropDownItem} {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      padding: 0.6em 1em;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;

interface DropDownProps {
  isOpen: boolean; // 아이템 박스 보여주기 여부
  onClickDropDown: () => void; // 버튼 이벤트
  label?: string; // 버튼 라벨
  icon?: ReactNode; // 아이콘
  children: ReactNode; // 드랍다운 메뉴 아이템
  variant?: Variant; // 버튼 타입
  width?: string | number; // 버튼 크기
  height?: string | number; // 버튼 높이
  direction?: Direction; // 박스 위치
  type?: DropDownType;
}

export const DropDown = ({
  children,
  isOpen,
  onClickDropDown,
  label,
  icon,
  variant = "default",
  width,
  height,
  direction = "left",
  type = "button",
}: DropDownProps): ReactElement => {
  const buttonLabel = label ? label : "";

  const handleItemClick = () => {
    onClickDropDown(); // 드롭다운 메뉴 닫기
  };

  return (
    <DropDownLayout>
      <DropDownButton
        $width={width}
        $height={height}
        $direction={direction}
        $type={type}
        type={"button"}
        onClick={onClickDropDown}
        className={classNames({
          [variant]: variant,
        })}
      >
        {!!icon && icon}
        {buttonLabel && (
          <Typography
            $fontColor={"white000"}
            $fontType={"nanumSquare"}
            $fontWeight={500}
          >
            {buttonLabel}
          </Typography>
        )}
      </DropDownButton>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen && (
          <Fragment>
            {Children.map(children, (child) =>
              cloneElement(child as ReactElement, {
                onClick: handleItemClick,
              })
            )}
          </Fragment>
        )}
      </motion.div>
    </DropDownLayout>
  );
};
