import styled from "styled-components";

export const MobileHeaderLayout = styled.div`
  display: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white000};

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
`;
