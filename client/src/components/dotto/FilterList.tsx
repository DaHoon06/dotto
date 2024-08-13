import styled from "styled-components";
import {FlexBox} from "@components/common/boxes";
import {Typography} from "@components/common/typograhpy";

export const FilterListLayout = styled.aside`
    background-color: white;
    width: 296px;
    height: 600px;
    //display: flex;
    //flex-direction: column;
    
    .filter_list {
        //position: sticky;
        //top: 100px;
        padding: 40px 48px;
    }

    ${({theme}) => theme.media.mobile} {
        display: none;
    }
`;

export const TagContainer = styled.section`
    min-height: 292px;
    width: 224px;
    
    .tag {
        border: 1px solid black;
        padding: 8px 12px;
        background-color: ${({theme}) => theme.colors.white000};
        width: fit-content;
    }
`;

export const SearchContainer = styled.section``;

const TAGS = ["블랙앤그레이", "레터링", "트라이벌", "올드스쿨", "뉴스쿨", "두들", "라인워크", "수채화", "포트레이트", '이레즈미', '이퀄라이트']

export const FilterList = () => {
  return (
    <FilterListLayout>
      <FlexBox className={'filter_list'} $justifyContent={"flex-start"} $alignItems={"flex-start"}>
        <TagContainer>
          <Typography variant={'h3'}># 태그</Typography>

          <FlexBox className={'mt-24'} $flexDirection={'row'} $justifyContent={"flex-start"} $gap={8} >
            {TAGS.map(tag => {
              return (
                <div className={'tag'}>
                  {tag}
                </div>
              )
            })}
          </FlexBox>

        </TagContainer>

        <hr />

        <SearchContainer>
          <Typography variant={'h3'}>지역</Typography>

          <input type={'text'} />
          <button>검색버튼</button>
          <div>
            가로 스크롤
            <span>서울</span>
            <span>부산</span>
          </div>
        </SearchContainer>

        <div>
          <button>초기화</button>
          <button>검색하기</button>
        </div>

      </FlexBox>
    </FilterListLayout>
  )
}
