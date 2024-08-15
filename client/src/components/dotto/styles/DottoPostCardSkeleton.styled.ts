import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

export const DottoPostCardSkeletonLayout = styled.article`
  height: 442px;
  width: auto;
  border: none;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 50%, #f5f5f5 75%);
  background-size: 200% 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  .thumbnail_wrapper {
    width: 100%;
    height: 288px;
    background-color: #e0e0e0;
    border-radius: 4px 4px 0 0;
    animation: ${loading} 1.5s infinite linear;
  }

  section {
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;

    .nickname,
    .title,
    .originPrice,
    .eventPrice,
    .percent {
      background-color: #e0e0e0;
      height: 16px;
      margin-bottom: 8px;
      border-radius: 4px;
      background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 50%, #f5f5f5 75%);
      background-size: 200% 100%;
      animation: ${loading} 1.5s infinite linear;
    }

    .nickname {
      width: 40%;
    }

    .title {
      width: 70%;
      height: 20px;
    }

    .originPrice {
      width: 30%;
    }

    .eventPrice {
      width: 30%;
      height: 20px;
    }

    .percent {
      width: 20%;
    }
  }

  div {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }

  span.tag {
    display: inline-block;
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 12px;
    width: 50px;
    height: 16px;
    background: linear-gradient(90deg, #f5f5f5 25%, #e0e0e0 50%, #f5f5f5 75%);
    background-size: 200% 100%;
    animation: ${loading} 1.5s infinite linear;
  }
`;
