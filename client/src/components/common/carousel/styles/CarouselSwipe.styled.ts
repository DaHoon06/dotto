import styled from "styled-components";

export const CarouselSwipeLayout = styled.div`
  width: 100%;
  height: auto;
  max-height: 300px;
  background-color: ${({ theme }) => theme.colors.white100};

  .carouselCountWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    .carouselCount {
      position: relative;
      bottom: 38px;
      right: 4px;
      z-index: 1;
      background-color: rgba(79, 79, 79, 0.61);
      width: 46px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 24px;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: -0.3px;
    }
  }

  .carouselContainer {
    width: 100%;
    height: 100%;

    .carouselBanner {
      width: 100%;
      height: 100%;

      .carouselBannerImage {
        display: block;
        width: 100%;
        max-width: 100%;
        height: auto;
        object-fit: cover;
        z-index: 1;
      }
    }
  }
`;
