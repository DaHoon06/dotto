import { FlexBox } from "@components/common/boxes";
import styled from "styled-components";
import { ButtonGroup } from "./ButtonGroup";
import Description from "@components/dotto/details/Description";
import Profile from "@components/dotto/details/Profile";
import Tags from "@components/dotto/details/Tags";

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
  width: 100%;

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

            <Description
              content={
                "두달동안 할인가에 진행되고 있는 인기 최고 꽃과 레터링 입니다. <br /> 꽃은 손님의 탄생화로 수정해 드렸고 레터링은 기존 글씨체에 좋아 하시는 글귀를 넣어 작업했습니다. <br /> 꽃, 글씨체 수정 등 요청사항 다 반영해드립니다! <br />  편하게 메세지 주세요!"
              }
            />

            <Tags tags={["블랙워크", "꽃", "레터링"]} />

            <Profile
              user={{
                userId: "test",
                follow: 10,
                nickname: "전다훈",
              }}
            />
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
