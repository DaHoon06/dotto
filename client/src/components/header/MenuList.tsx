import {ReactElement} from "react";
import styled from "styled-components";

const MenuLayout = styled.nav`
    width: 100%;
    
    ul {
        display: flex;
        flex: 1;
        list-style: none;
        gap: 30px;
    }
`;

export const MenuList = (): ReactElement => {
  return (
    <MenuLayout>
      <ul>
        <li>HOME</li>
        <li>닷투 게시판</li>
        <li>고객지원</li>
      </ul>
    </MenuLayout>

  )
}
