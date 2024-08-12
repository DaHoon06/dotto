import styled from "styled-components";
import { PropsWithChildren } from "react";

const Footer = styled.footer`
  height: 100px;
  border: none;
  background-color: ${({ theme }) => theme.colors.black000};
`;

interface FooterProps extends PropsWithChildren {}

export const FooterLayout = ({ children }: FooterProps) => {
  return <Footer>{children}</Footer>;
};
