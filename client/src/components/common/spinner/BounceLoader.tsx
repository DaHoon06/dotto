import { BounceLoader } from "react-spinners";
import { ReactElement } from "react";
import { SpinnerProps } from "@components/common/spinner/index";

const color = "#222";

export const BounceSpinner = (props: SpinnerProps): ReactElement => {
  const { isLoading = true, size = 8 } = props;
  return (
    <BounceLoader
      color={color}
      loading={isLoading}
      size={size}
      speedMultiplier={0.8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
