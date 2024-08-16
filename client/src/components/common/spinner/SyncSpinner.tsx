import { SyncLoader } from "react-spinners";
import { ReactElement } from "react";
import { SpinnerProps } from "@components/common/spinner/index";

const color = "#1e1e1e";

export const SyncSpinner = (props: SpinnerProps): ReactElement => {
  const { isLoading = true, size = 8 } = props;

  return (
    <SyncLoader
      color={color}
      loading={isLoading}
      size={size}
      speedMultiplier={0.8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
