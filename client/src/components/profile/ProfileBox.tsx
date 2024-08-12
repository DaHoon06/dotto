import { Avatar } from "@components/common/avatar/Avatar";
import {
  DropDown,
  DropDownItem,
  DropDownMenu,
} from "@components/common/buttons";
import { IoIosArrowDown } from "react-icons/io";
import { Toast } from "@components/common/toast";
import { Typography } from "@components/common/typograhpy";
import styled from "styled-components";
import { useState } from "react";
import { GoCheckCircle } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import { BsPinAngle } from "react-icons/bs";

const ProfileBoxLayout = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  .profileBox-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProfileBox = () => {
  const [show, setShow] = useState(false);

  return (
    <ProfileBoxLayout>
      <div className={"profileBox-container"} onClick={() => setShow(!show)}>
        <Avatar />

        <DropDown
          direction={"right"}
          isOpen={show}
          onClickDropDown={() => setShow(!show)}
          icon={<IoIosArrowDown color={"#696969"} size={20} />}
          variant={"icon"}
          type={"icon"}
        >
          <DropDownMenu>
            <DropDownItem
              onClick={() => {
                Toast.success("TOAST");
              }}
            >
              <GoCheckCircle size={20} />
              <Typography $fontType={"nanumSquare"}>내 예약목록</Typography>
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                Toast.success("TOAST");
              }}
            >
              <BiCommentDetail size={20} />
              <Typography $fontType={"nanumSquare"}>내 댓글 / 리뷰</Typography>
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                Toast.success("TOAST");
              }}
            >
              <BsPinAngle size={20} />
              <Typography $fontType={"nanumSquare"}>찜한 목록</Typography>
            </DropDownItem>

            <hr />

            <DropDownItem
              onClick={() => {
                Toast.success("TOAST");
              }}
            >
              <Typography $fontType={"nanumSquare"}>보안 / 계정</Typography>
            </DropDownItem>

            <DropDownItem
              onClick={() => {
                Toast.success("TOAST");
              }}
            >
              <Typography $fontType={"nanumSquare"}>로그아웃</Typography>
            </DropDownItem>
          </DropDownMenu>
        </DropDown>
      </div>
    </ProfileBoxLayout>
  );
};
