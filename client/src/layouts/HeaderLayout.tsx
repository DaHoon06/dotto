import styled from "styled-components";
import { PropsWithChildren } from "react";

const Header = styled.header`
  height: 144px;
  background-color: ${({ theme }) => theme.colors.white000};
  display: flex;
  align-items: center;
  padding: 28px 56px;
  //box-shadow: 0 10px 10px rgb(50 50 50 / 12%);
  border-bottom: 1px solid #ededed;

  ${({ theme }) => theme.media.tablet} {
  }

  ${({ theme }) => theme.media.mobile} {
    height: 100px;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 99;
  }
`;

interface HeaderProps extends PropsWithChildren {}

export const HeaderLayout = ({ children }: HeaderProps) => {
  return <Header>{children}</Header>;
};
