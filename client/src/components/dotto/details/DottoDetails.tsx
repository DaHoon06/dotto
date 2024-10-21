import { FlexBox } from "@components/common/boxes";
import styled from "styled-components";
import { ButtonGroup } from "./ButtonGroup";

const ImageWrapper = styled.div`
  max-width: 640px;
  width: 100%;
  max-height: 640px;
  height: 50vh;
`;

const NoImageLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    width: 100%;
    text-align: center;
    content: "No Image";
    color: #222;
  }
`;

const ContentsLayout = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const ContentBody = styled.div`
  max-width: 512px;
  padding: 8px 24px;

  .content-top {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;

    .title {
      font-weight: bold;
    }
  }

  .content-middle {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: auto;
    padding: 0.4em 0;

    .info-wrpper {
      display: flex;
      gap: 12px;

      .label {
        color: #919191;
        font-size: 14px;
      }

      .info {
        color: #222222;
        font-size: 14px;
      }
    }
  }

  .tag-container {
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;

    .tag {
      background-color: #fff;
      border: 1px solid #e2e2e2;
      padding: 8px 12px;
      color: #e2e2e2;
    }
  }
`;

export const DottoDetails = () => {
  return (
    <article>
      <ButtonGroup postId={""} />
      <section style={{ height: "100%" }}>
        <ContentsLayout>
          <ImageWrapper>
            <NoImageLayout />
          </ImageWrapper>
          <ContentBody>
            <div className="content-top">
              <p className="title">꽃과 레터링 할인 이벤트</p>
              <p>조회수 50회</p>
              <p>
                50,000 <span>100,000</span>
              </p>
            </div>

            <hr />

            <div className="content-middle">
              <div className="info-wrpper">
                <span className="label">위치</span>
                <p className="info">서울 마포구 (홍대)</p>
              </div>
              <div className="info-wrpper">
                <span className="label">장르</span>
                <p className="info">블랙워크</p>
              </div>
              <div className="info-wrpper">
                <span className="label">소요시간</span>
                <p className="info">2~3 시간</p>
              </div>
            </div>

            <hr />

            <div>
              두달동안 할인가에 진행되고 있는 인기 최고 꽃과 레터링 입니다. 꽃은
              손님의 탄생화로 수정해 드렸고 레터링은 기존 글씨체에 좋아 하시는
              글귀를 넣어 작업했습니다 꽃, 글씨체 수정 등 요청사항다
              반영해드립니다! 편하게 메세지 주세요!
            </div>

            <div className="tag-container">
              <span className="tag">블랙워크</span>
              <span className="tag">꽃</span>
              <span className="tag">레터링</span>
            </div>

            <div>
              <FlexBox $flexDirection="row" $justifyContent="space-between">
                <div>프로필</div>
                <div>
                  <FlexBox>
                    <p>타투아이디</p>
                    <p>팔로워 1000명</p>
                  </FlexBox>
                  <button>팔로우</button>
                </div>
              </FlexBox>
            </div>
          </ContentBody>
        </ContentsLayout>
        <div>
          <div>이미지1</div>
          <div>이미지2</div>
          <div>이미지3</div>
          <div>이미지4</div>
        </div>
      </section>
    </article>
  );
};
