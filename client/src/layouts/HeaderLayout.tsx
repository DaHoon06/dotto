import styled from "styled-components";
import { PropsWithChildren } from "react";

const Header = styled.header`
  height: 144px;
  background-color: ${({ theme }) => theme.colors.white000};
  border: none;
  box-shadow: 0 0 10px 0 #ddd;
  display: flex;
  align-items: center;
  padding: 28px 56px;

  ${({ theme }) => theme.media.tablet} {
  }

  ${({ theme }) => theme.media.mobile} {
    height: 100px;
    padding: 20px;
  }
`;

interface HeaderProps extends PropsWithChildren {}

export const HeaderLayout = ({ children }: HeaderProps) => {
  return <Header>{children}</Header>;
};
