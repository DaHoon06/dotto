import { FlexBox } from "@components/common/boxes";
import styled from "styled-components";
import React from "react";
import Image from "next/image";

type User = {
  userId: string;
  image?: string;
  nickname: string;
  follow: number;
};

interface ProfileProps {
  user: User;
}

const ProfileLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr;
  padding: 26px 8px;
  background-color: #fff;
  gap: 10px;

  .image-box {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .info-box {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .nickname {
      color: #222222;
    }

    .follow {
      color: #696969;
    }
  }
`;

const FollowButton = styled.button`
  padding: 0.4em 1em;
  background-color: #ffeeeb;
  color: #ff533b;
  height: 32px;
  width: 70px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 600;
`;

const Profile = ({ user }: ProfileProps) => {
  return (
    <ProfileLayout>
      <div className={"image-box"}>
        <Image
          src={user?.image ? user.image : "/images/profile.png"}
          alt={user.nickname}
          width={40}
          height={40}
        />
      </div>
      <FlexBox
        $flexWrap={"nowrap"}
        $flexDirection={"row"}
        $justifyContent={"space-between"}
      >
        <div className={"info-box"}>
          <p className={"nickname"}>타투아이디</p>
          <p className={"follow"}>팔로워 1,000명</p>
        </div>
        <FollowButton>팔로우</FollowButton>
      </FlexBox>
    </ProfileLayout>
  );
};

export default React.memo(Profile);
