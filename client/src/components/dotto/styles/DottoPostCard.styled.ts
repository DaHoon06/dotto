import styled from "styled-components";

export const DottoPostCardLayout = styled.article`
  height: 442px;
  width: auto;
  border: none;
  overflow: hidden;
  padding-bottom: 0.8em;
  position: relative;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  .thumbnail_wrapper {
    width: 100%;
    height: 288px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      max-height: 288px;
      border-radius: 4px 4px 0 0;
    }
  }

  section {
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    gap: 4px;

    .nickname {
      font-size: 14px;
      color: #919191;
    }

    .title {
      font-weight: 700;
      font-size: 16px;
      color: #222;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-clamp: 2;
      -webkit-line-clamp: 2;
    }

    .originPrice {
      font-weight: 400;
      color: #919191;
    }

    .eventPrice {
      font-weight: 700;
      font-size: 16px;
      color: #222;
    }
    .percent {
      font-weight: 700;
      color: #ff533b;
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  span.tag {
    display: inline-block;
    color: #696969;
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 12px;
  }
`;
