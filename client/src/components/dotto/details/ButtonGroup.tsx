import { FlexBox } from "@components/common/boxes";
import { ReactElement } from "react";
import { BsPinAngle } from "react-icons/bs";
import styled from "styled-components";

type ButtonGroupProps = {
  postId: string;
};

const ButtonGroupLayout = styled.section`
  height: 68px;
  padding: 10px 0;

  .button-group {
    display: flex;
    gap: 16px;
  }
`;

const PickButton = styled.button`
  border: 1px solid #ff5831;
  color: #ff5831;
  border-radius: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 130px;
  height: 44px;
  padding: 12px 20px;
`;

const RequestButton = styled.button`
  border: 1px solid transparent;
  color: #fff;
  border-radius: 30px;
  background-color: #ff5831;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
`;

export const ButtonGroup = ({ postId }: ButtonGroupProps): ReactElement => {
  return (
    <ButtonGroupLayout>
      <FlexBox $flexDirection="row" $justifyContent="space-between">
        <p>이 제품이 맘에 드시나요?</p>
        <div className="button-group">
          <PickButton type={"button"}>
            <BsPinAngle color={"#ff5831"} size={20} />
            찜하기
          </PickButton>
          <RequestButton type={"button"}>의뢰하기</RequestButton>
        </div>
      </FlexBox>
    </ButtonGroupLayout>
  );
};
