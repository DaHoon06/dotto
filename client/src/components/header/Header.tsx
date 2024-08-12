import { HeaderLayout } from "@layouts/HeaderLayout";
import { ReactElement } from "react";
import { DottoLogo } from "@components/common/logo/DottoLogo";
import styled from "styled-components";
import { MenuList } from "@components/header/MenuList";
import { MobileHeader } from "@components/header/MobileHeader";
import { SearchBar } from "@components/search/SearchBar";
import FlexBox from "@components/common/boxes/FlexBox";
import { ProfileBox } from "@components/profile/ProfileBox";

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

export const Header = (): ReactElement => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        <FlexBox
          $justifyContent={"flex-start"}
          $alignItems={"flex-start"}
          $flexDirection={"row"}
        >
          <DottoLogo />
          <SearchBar onAddKeyword={() => {}} />
        </FlexBox>
        <ProfileBox />
        <MenuList />
      </HeaderContainer>
      <MobileHeader />
    </HeaderLayout>
  );
};
