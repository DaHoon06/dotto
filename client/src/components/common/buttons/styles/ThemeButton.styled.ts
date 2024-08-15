import styled from "styled-components";

export const Button = styled.button`
  max-width: 200px;
  max-height: 44px;
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(95%);
  }

  &:disabled {
    cursor: default;
    background-color: #f5f5f5;
    color: #bdbdbd;

    span {
      color: #bdbdbd;
    }
  }

  &.black {
    background-color: ${({ theme }) => theme.colors.button.black000};

    span {
      color: #fff;
    }
  }

  &.gray {
    background-color: ${({ theme }) => theme.colors.button.gray000};

    span {
      color: #fff;
    }
  }

  &.navy {
    background-color: ${({ theme }) => theme.colors.button.navy000};

    span {
      color: #fff;
    }
  }

  &.icon {
    background-color: transparent;
    width: fit-content;
    height: auto;
    box-shadow: inherit;
    padding: 0;
  }
`;
