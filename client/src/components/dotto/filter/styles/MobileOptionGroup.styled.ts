import { styled } from "styled-components";

export const MobileOptionGroupLayout = styled.div<{ $isScrolled: boolean }>`
  display: ${({ $isScrolled }) => ($isScrolled ? "flex" : "none")};
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  position: sticky;
  top: 60px; // header 높이
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.white000};
  padding: 0.8em 1em;

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
