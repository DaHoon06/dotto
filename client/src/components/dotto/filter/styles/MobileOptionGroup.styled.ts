import { styled } from "styled-components";

export const MobileOptionGroupLayout = styled.div`
  display: none;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  position: sticky;
  top: 69px; // header 높이
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.white000};
  padding: 1em;

  ${({ theme }) => theme.media.mobile} {
    display: flex;
    justify-content: flex-end;
  }
`;

export const FilterButtonLayout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
