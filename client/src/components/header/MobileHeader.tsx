import styled from "styled-components";
import {DottoLogo} from "@components/common/logo/DottoLogo";
import {IoMenuOutline} from "react-icons/io5";

const MobileHeaderLayout = styled.div`
    display: none;
    width: 100%;
    
    .hamburger-button {
        border: none;
        padding: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const MobileHeader = () => {
  return (
      <MobileHeaderLayout>
        <DottoLogo />
        <button className={'hamburger-button'} type={'button'}>
          <IoMenuOutline size={30} />
        </button>
      </MobileHeaderLayout>
  )
}
