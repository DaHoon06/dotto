import styled from "styled-components";

export const Button = styled.button`
  max-width: 200px;
  max-height: 44px;
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

  &.black000 {
    background-color: ${({ theme }) => theme.colors.button.black000};

    span {
      color: #fff;
    }
  }

  &.gray000 {
    background-color: ${({ theme }) => theme.colors.button.gray000};

    span {
      color: #fff;
    }
  }

  &.white000 {
    background-color: ${({ theme }) => theme.colors.button.white000};

    span {
      color: #222;
    }
  }

  &.white100 {
    background-color: ${({ theme }) => theme.colors.button.white100};
    border-color: #bdbdbd;
    span {
      color: #222;
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
