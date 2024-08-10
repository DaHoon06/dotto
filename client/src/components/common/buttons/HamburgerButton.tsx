import {IoMenuOutline} from "react-icons/io5";
import {ReactElement} from "react";
import styled from "styled-components";

const HamburgerButtonLayout = styled.button`
    border: none;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface HamburgerButtonProps {
  onClick?: () => void;
}

export const HamburgerButton = ({onClick}: HamburgerButtonProps): ReactElement => {

  const handleClick = () => {
    onClick && onClick();
  }

  return (
    <HamburgerButtonLayout className={'hamburger-button'} type={'button'} onClick={handleClick}>
      <IoMenuOutline size={30}/>
    </HamburgerButtonLayout>
  )
}
