import styled from "styled-components";

export const AutoTextareaLayout = styled.div`
  width: 100%;
  max-height: 70vh;
  height: auto;
`;

export const AutoTextarea = styled.textarea`
  all: unset;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.7em;
  max-height: 600px;
  background-color: ${({ theme }) => theme.colors.white000};
  border: none;
  resize: none;
  outline: none;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 1em;
  color: ${({ theme }) => theme.colors.black000};
  white-space: pre-wrap;

  // 스크롤 바 삭제
  &::-webkit-scrollbar {
    display: none;
  }
`;
