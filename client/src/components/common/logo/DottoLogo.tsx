import Image from "next/image";
import styled from "styled-components";
import {ReactElement} from "react";

const DottoLogoLayout = styled.span`
    display: inline-block;
`;

export const DottoLogo = (): ReactElement => {
  return (
    <DottoLogoLayout>
      <Image src={'/images/logo.svg'} alt={'dotto-logo'} width={103} height={40} />
    </DottoLogoLayout>
  )
}
