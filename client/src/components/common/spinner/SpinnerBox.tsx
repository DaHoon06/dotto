import styled from "styled-components";
import { ReactElement } from "react";
import { SyncSpinner } from "@components/common/spinner/SyncSpinner";

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  justify-content: center;
  border: none;
  padding: 0.4em 0.8em;
  height: 30px;
`;

export const SpinnerBox = (): ReactElement => {
  return (
    <SpinnerWrapper>
      <SyncSpinner />
    </SpinnerWrapper>
  );
};
