import {DottoView} from "@components/dotto/DottoView";
import {OptionGroup} from "@components/dotto/OptionGroup";
import {MobileOptionGroup} from "@components/dotto/MobileOptionGroup";
import {FilterList} from "@components/dotto/FilterList";
import styled from "styled-components";
import { useState} from "react";

export const DesignPageLayout = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    
    
`;

const DesignPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DesignPageLayout>
      <FilterList isOpen={isOpen}/>
      <div>
        <OptionGroup onClickFilter={() => setIsOpen(!isOpen)}/>
        <MobileOptionGroup />
        <DottoView />
      </div>
    </DesignPageLayout>
  )
}
export default DesignPage;
