import {HeaderLayout} from "@layouts/HeaderLayout";
import {ReactElement} from "react";
import {DottoLogo} from "@components/common/logo/DottoLogo";
import styled from "styled-components";
import {MenuList} from "@components/header/MenuList";
import {Avatar} from "@components/common/avatar/Avatar";
import {MobileHeader} from "@components/header/MobileHeader";

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const ProfileBox = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

export const Header = (): ReactElement => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        <DottoLogo />
        <ProfileBox>
          <div>
            <Avatar />
          </div>
        </ProfileBox>
        <MenuList />
      </HeaderContainer>
      <MobileHeader />
    </HeaderLayout>
  )
}
