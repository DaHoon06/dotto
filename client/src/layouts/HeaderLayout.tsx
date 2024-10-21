import styled from "styled-components";
import React, { forwardRef, PropsWithChildren } from "react";

const Header = styled.header<{ $isScrolled: boolean }>`
  background-color: ${({ theme }) => theme.colors.white000};
  display: flex;
  align-items: center;
  padding: 28px 56px;
  border-bottom: 1px solid #ededed;
  z-index: 99;
  position: ${({ $isScrolled }) => ($isScrolled ? "sticky" : "relative")};
  top: ${({ $isScrolled }) => ($isScrolled ? 0 : "inherit")};
  height: ${({ $isScrolled }) => ($isScrolled ? 60 : 144)}px;
  transition: ease 0.3s;

  ${({ theme }) => theme.media.mobile} {
    height: 60px;
    padding: 0 1rem;
    position: sticky;
    top: 0;
  }
`;

interface HeaderProps extends PropsWithChildren {
  isScrolled: boolean;
}

export const HeaderLayout = forwardRef<any, HeaderProps>((props, ref) => {
  const { isScrolled, children } = props;
  return (
    <Header ref={ref} $isScrolled={isScrolled}>
      {children}
    </Header>
  );
});

HeaderLayout.displayName = "HeaderLayout";
