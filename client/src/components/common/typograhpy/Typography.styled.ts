export type LetterSpacing = "-2" | "-1.5" | "-1" | "-0.5" | "1";

export type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type FontType =
  | "pretendard"
  | "nanumSquare"
  | "nanumGothic"
  | "montserrat";
export type FontWeight = 300 | 400 | 500 | 700 | 600;

export type FontColor = "default" | "white000";

export const FontColor = {
  default: "var(--textDefault)",
  black000: "var(--textBlack000)",
  black100: "var(--textBlack100)",
  black200: "var(--textBlack200)",
  white000: "var(--textWhite000)",
  gray000: "var(--textGray000)",
  gray100: "var(--textGray100)",
  gray200: "var(--textGray200)",
  gray300: "var(--textGray300)",
  gray400: "var(--textGray400)",
  gray500: "var(--textGray500)",
  red000: "var(--textRed000)",
};
