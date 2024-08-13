import {ReactElement} from "react";
import styled from "styled-components";
import Link from "next/link";

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
        <li>
          <Link href={'/'}>
            HOME
          </Link>
        </li>
        <li>
          <Link href={'/design'}>
            닷투 게시판
          </Link>
        </li>
        <li>고객지원</li>
      </ul>
    </MenuLayout>

  )
}
