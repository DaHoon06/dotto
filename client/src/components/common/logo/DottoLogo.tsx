import Image from "next/legacy/image";
import styled from "styled-components";
import { ReactElement } from "react";

const DottoLogoLayout = styled.span`
  display: inline-block;
  width: 103px;

  .logo {
    min-width: 82px;
  }

  @media (max-width: 768px) {
    width: 90px;
  }
`;

export const DottoLogo = (): ReactElement => {
  return (
    <DottoLogoLayout>
      <Image
        className={"logo"}
        src={"/images/logo.svg"}
        layout={"responsive"}
        priority={true}
        alt={"dotto-logo"}
        width={103}
        height={40}
      />
    </DottoLogoLayout>
  );
};
