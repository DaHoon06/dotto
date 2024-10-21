import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white000};
  padding: 0 2em;

  @media screen and (max-width: 767px) {
    padding: 0 0.8em;
  }
`;
