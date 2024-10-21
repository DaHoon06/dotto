import styled from "styled-components";
import { DottoLogo } from "@components/common/logo/DottoLogo";
import { HamburgerButton } from "@components/common/buttons";
import {
  ModalAnimation,
  ModalHandler,
} from "@components/common/modal/ModalHandler";
import { ReactElement } from "react";
import useModalStore, {
  ModalType,
} from "@components/common/modal/store/modalStore";
import { IoSearchSharp } from "react-icons/io5";
import FlexBox from "@components/common/boxes/FlexBox";

const MobileHeaderLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const MobileHeader = (): ReactElement => {
  const { setIsOpen, setModalType } = useModalStore();
  const handleClickSideMenu = (): void => {
    setIsOpen(true);
    setModalType(ModalType.SIDE_MENU);
  };

  return (
    <MobileHeaderLayout>
      <DottoLogo />
      <FlexBox $flexDirection={"row"} $gap={10} $justifyContent={"flex-end"}>
        <button type={"button"}>
          <IoSearchSharp size={20} />
        </button>
        <HamburgerButton onClick={handleClickSideMenu} />
      </FlexBox>

      <ModalHandler
        modalType={ModalType.SIDE_MENU}
        animation={ModalAnimation.SLIDE}
      >
        <div>
          <ul>
            <li>HOME</li>
            <li>닷투 게시판</li>
            <li>고객지원</li>
          </ul>
        </div>
      </ModalHandler>
    </MobileHeaderLayout>
  );
};
