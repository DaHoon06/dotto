import { FooterLayout } from "@layouts/FooterLayout";
import { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import { FlexBox } from "@components/common/boxes";
import { Typography } from "@components/common/typograhpy";

const NaivationSection = styled.section`
  width: 100%;
  min-height: 324px;
  height: auto;
  display: flex;
  color: #bdbdbd;
  border-bottom: 1px solid #9e9e9e;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 50px;

  .menu-navigation {
    display: flex;
    gap: min(10vw, 80px);

    legend {
      font-weight: 600;
      color: #f5f5f5;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    ${({ theme }) => theme.media.mobile} {
      flex-wrap: wrap;
      padding: 0 2em;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    color: #f5f5f5;

    .contact_email {
      color: #9e9e9e;
    }
    ${({ theme }) => theme.media.mobile} {
      padding: 2em;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

const CopyRightSection = styled.section`
  width: 100%;
  min-height: calc(100% - 324px);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Footer = (): ReactElement => {
  return (
    <FooterLayout>
      <NaivationSection>
        <div className="menu-navigation">
          <ul>
            <legend>HOME</legend>
            <li>내 예약 목록</li>
            <li>작성한 리뷰</li>
            <li>찜한 목록</li>
            <li>보안 / 계정</li>
            <li>로그아웃</li>
          </ul>
          <ul>
            <legend>try DOTTO</legend>
            <li>도안 만들기</li>
          </ul>
          <ul>
            <legend>COMMUNITY</legend>
            <li>닷투</li>
            <li>닷찿사</li>
          </ul>
          <ul>
            <legend>고객지원</legend>
            <li>공지사항</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="information">
          <Image
            src={"/images/logo-white.svg"}
            priority={true}
            alt={"dotto-logo"}
            width={103}
            height={40}
          />
          <FlexBox $alignItems="flex-start" $gap={16}>
            <Typography $fontColor="white000">개인 정보 처리 방침</Typography>
            <Typography $fontColor="white000">이용약관</Typography>
          </FlexBox>
          <FlexBox $alignItems="flex-start" $gap={16}>
            <Typography className="contact_email">문의메일</Typography>
            <Typography $fontColor="white000">dahoon226@gmail.com</Typography>
          </FlexBox>
        </div>
      </NaivationSection>
      <CopyRightSection>
        <Typography $fontColor="white000">
          Copyright 2024. Dotto All Rights Reserved.
        </Typography>
      </CopyRightSection>
    </FooterLayout>
  );
};
