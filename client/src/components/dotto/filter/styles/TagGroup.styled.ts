import { styled } from "styled-components";

export const TagContainer = styled.section`
  min-height: 292px;
  width: 224px;

  .tag {
    border: 1px solid black;
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.colors.white000};
    width: fit-content;
  }
`;
