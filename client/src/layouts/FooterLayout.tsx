import styled from "styled-components";
import {PropsWithChildren} from "react";

const Footer = styled.footer`
    height: 100px;
    border: 1px solid black;
`;

interface FooterProps extends PropsWithChildren {}

export const FooterLayout = ({children}: FooterProps) => {
  return (
    <Footer>
      {children}
    </Footer>
  )
}
