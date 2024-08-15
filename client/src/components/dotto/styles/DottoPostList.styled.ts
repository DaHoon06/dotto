import styled from "styled-components";

export const DottoPostListLayout = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;

  /* 기본적으로 4열 */
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    /* 태블릿에서는 2열 */
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* @media (max-width: 500px) {
    grid-template-columns: 1fr;
  } */
`;
