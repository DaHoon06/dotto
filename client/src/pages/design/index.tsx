import {DottoView} from "@components/dotto/DottoView";
import {OptionGroup} from "@components/dotto/OptionGroup";
import {MobileOptionGroup} from "@components/dotto/MobileOptionGroup";
import FlexBox from "@components/common/boxes/FlexBox";
import {FilterList} from "@components/dotto/FilterList";
import styled from "styled-components";

export const DesignPageLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    
    .filter_container {
        background-color: ${({theme}) => theme.colors.white000};
        min-height: 100vh;
        position: sticky;
        top: 100px;
        height: 100%;
    }
`;

const DesignPage = () => {
  return (
    <DesignPageLayout>
        <div className={'filter_container'}>
          <FilterList />
        </div>
        <div>
          <OptionGroup />
          <MobileOptionGroup />
          <DottoView />
        </div>
    </DesignPageLayout>
  )
}
export default DesignPage;
