import styled from "styled-components";
import {PropsWithChildren} from "react";

const Header = styled.header`
    height: 144px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 28px 56px; 

    @media screen and (max-width: 767px) {
        height: 100px;
        padding: 20px;
    }
`;

interface HeaderProps extends PropsWithChildren {}

export const HeaderLayout = ({children}: HeaderProps) => {
  return (
    <Header>
      {children}
    </Header>
  )
}
