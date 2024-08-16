import { SyncSpinner } from "@components/common/spinner/SyncSpinner";
import { BounceSpinner } from "@components/common/spinner/BounceLoader";

export type SpinnerProps = {
  color?: string;
  isLoading?: boolean;
  size?: number;
};

export { SyncSpinner, BounceSpinner };
