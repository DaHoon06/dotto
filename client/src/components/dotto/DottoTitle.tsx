import {Typography} from "@components/common/typograhpy";
import Link from "next/link";
import {RedirectArrow} from "@components/common/icons";
import styled from "styled-components";


const DottoTitleLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-height: 96px;
  padding: 2em 0;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  .title_section {
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    align-items: center;
  }
    
    .redirect_link {
        display: flex;
        gap: 8px;
        
    }

  ${({ theme }) => theme.media.mobile} {
    .title_section {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const DottoTitle = () => {
  return (
    <DottoTitleLayout>
      <div className={"title_section"}>
        <Typography variant={"h2"} $fontWeight={700}>
          닷투 게시판
        </Typography>
        <Typography>
          타투이스트가 올린 다양한 작품 중 내 취향을 찾아보세요!
        </Typography>
      </div>
      <Link href={"/design"} className={'redirect_link'}>
        <Typography>전체보기</Typography>
        <RedirectArrow />
      </Link>
    </DottoTitleLayout>
  );
};
