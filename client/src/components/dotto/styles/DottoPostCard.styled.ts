import styled from "styled-components";

export const DottoPostCardLayout = styled.article`
  height: 442px;
  border: none;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  background-color: #fff;

  & > div:first-child {
    position: relative;
    width: 100%;
    height: calc(100% - 50px);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 4px 4px 0 0;
  }
`;
