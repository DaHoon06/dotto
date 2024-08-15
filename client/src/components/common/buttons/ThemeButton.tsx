import classNames from "classnames";
import { CSSProperties, ComponentProps, ReactElement } from "react";
import { Button } from "./styles/ThemeButton.styled";

export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant = "black" | "gray" | "navy" | "icon";

interface ThemeButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  type?: ButtonType;
  width?: string | number;
  height?: string | number;
}

export const ThemeButton = (props: ThemeButtonProps): ReactElement => {
  const {
    variant = "black",
    className,
    type = "button",
    children,
    disabled,
    width = 200,
    height = 44,
    ...rest
  } = props;

  const style: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <Button
      className={classNames(variant, className)}
      type={type}
      disabled={disabled}
      {...rest}
      style={style}
    >
      {children}
    </Button>
  );
};
