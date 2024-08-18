import styled from "styled-components";
import { PropsWithChildren } from "react";

const Header = styled.header`
  height: 144px;
  background-color: ${({ theme }) => theme.colors.white000};
  display: flex;
  align-items: center;
  padding: 28px 56px;
  border-bottom: 1px solid #ededed;

  ${({ theme }) => theme.media.tablet} {
  }

  ${({ theme }) => theme.media.mobile} {
    height: auto;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 99;
    padding: 4px 20px;
  }
`;

interface HeaderProps extends PropsWithChildren {}

export const HeaderLayout = ({ children }: HeaderProps) => {
  return <Header>{children}</Header>;
};
