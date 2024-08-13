import styled from "styled-components";
import {SortGroup} from "@components/dotto/SortGroup";
import {FilterIcon} from "@components/common/icons";

const OptionGroupLayout = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    background-color: ${({theme}) => theme.colors.white000};
    display: flex;
    justify-content: flex-end;
    gap: 32px;
    padding: 1em;
    
    
    .filter {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    ${({theme}) => theme.media.mobile} {
        display: none;
    }
`;

export const OptionGroup = () => {
  return (
    <OptionGroupLayout >
      <SortGroup />
      <div className={'filter'}>
        FILTER
        <FilterIcon />
      </div>
    </OptionGroupLayout>
  )
}
