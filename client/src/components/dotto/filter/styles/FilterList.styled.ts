import styled from "styled-components";

export const FilterListLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white000};
  min-height: 100vh;
  position: sticky;
  top: 100px;
  height: 100%;
  /* padding-left: 4vw; */
`;

export const FilterListContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.white000};
  width: 296px;
  height: 600px;

  .filter_list {
    padding: 40px 0px;
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const SearchContainer = styled.section``;
