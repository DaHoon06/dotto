import styled from "styled-components";

export const BannerLayout = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black000};
  display: inline-block;

  div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    height: auto;
    max-height: 300px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  // 모바일 대응
  ${({ theme }) => theme.media.mobile} {
    div {
      max-width: 100%;
    }
  }
`;
