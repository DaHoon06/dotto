import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white000};
`;
