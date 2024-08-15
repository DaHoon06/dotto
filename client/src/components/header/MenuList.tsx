import { ReactElement, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Typography } from "@components/common/typograhpy";
import classNames from "classnames";
import { useRouter } from "next/router";

const MenuLayout = styled.nav`
  width: 100%;

  ul {
    display: flex;
    flex: 1;
    list-style: none;
    gap: 30px;

    li {
      .item {
        color: #919191;

        &.active {
          color: #222;
        }
      }
    }
  }
`;

export const MenuList = (): ReactElement => {
  const router = useRouter();

  const isActive = useCallback(
    (path: string): boolean => {
      if (path === "/") {
        return router.pathname === path;
      }
      return router.pathname.startsWith(path);
    },
    [router.pathname]
  );
  return (
    <MenuLayout>
      <ul>
        <li>
          <Link href={"/"}>
            <Typography
              as={"span"}
              className={classNames("item", { active: isActive("/") })}
            >
              HOME
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={"/design"}>
            <Typography
              as={"span"}
              className={classNames("item", { active: isActive("/design") })}
            >
              닷투 게시판
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={"/faq"}>
            <Typography
              as={"span"}
              className={classNames("item", { active: isActive("/faq") })}
            >
              고객지원
            </Typography>
          </Link>
        </li>
      </ul>
    </MenuLayout>
  );
};
