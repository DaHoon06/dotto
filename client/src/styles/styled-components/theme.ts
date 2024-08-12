import { DefaultTheme } from "styled-components";

export const colors = {
  white000: "var(--white000)",
  white100: "var(--white100)",
  white150: "var(--white150)",
  black000: "var(--black000)",
  black050: "var(--black050)",
};

export const zIndex = {
  DRAWER: 500,
  TOOLTIP_BOX: 400,
  HEADER: 300,
};

export type Colors = keyof typeof colors;

export interface MixinsTheme {
  flexRowsContainer: () => string;
  flexBox: (direction?: string, align?: string, justify?: string) => string;
}

const mixins: MixinsTheme = {
  flexRowsContainer: () => `
    display: flex;
    align-items: center;
    justify-content: center;

  `,
  // flex
  flexBox: (direction = "row", align = "center", justify = "center") => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};

export interface MediaQueryTheme {
  custom: (width: number) => string;
  mobile: string;
  tablet: string;
  pc: string;
}

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

const media: MediaQueryTheme = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(1000),
  mobile: customMediaQuery(767),
};

const scroll = {
  theme: () => `
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 12px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 8px;
        border: 1px solid #f1f1f1;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

    @media screen and (max-width: 769px) {
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  `,
};

export const theme: DefaultTheme = {
  colors,
  zIndex,
  media,
  mixins,
  scroll,
} as const;
