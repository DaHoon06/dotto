import styled from "styled-components";
import {DottoLogo} from "@components/common/logo/DottoLogo";
import {HamburgerButton} from "@components/common/buttons/HamburgerButton";
import {ModalAnimation, ModalHandler} from "@components/common/modal/ModalHandler";
import {ReactElement} from "react";
import useModalStore, {ModalType} from "@components/common/modal/store/modalStore";

const MobileHeaderLayout = styled.div`
    display: none;
    width: 100%;
    
    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const MobileHeader = (): ReactElement => {
  const {setIsOpen, setModalType} = useModalStore();
  const handleClickSideMenu = (): void => {
    setIsOpen(true);
    setModalType(ModalType.SIDE_MENU);
  }

  return (
      <MobileHeaderLayout>
        <DottoLogo />
        <HamburgerButton onClick={handleClickSideMenu} />
        <ModalHandler modalType={ModalType.SIDE_MENU} animation={ModalAnimation.SLIDE}>
          <div>
            TEST
          </div>
        </ModalHandler>
      </MobileHeaderLayout>
  )
}
