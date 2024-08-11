import Image from "next/image";
import styled from "styled-components";
import {ReactElement} from "react";

const DottoLogoLayout = styled.span`
    display: inline-block;
    width: 103px; /* Default width */

    /* Responsive styles */
    @media (max-width: 768px) {
        width: 80px; /* Adjust width for tablets and small screens */
    }

    @media (max-width: 480px) {
        width: 60px; /* Adjust width for mobile screens */
    }
`;

export const DottoLogo = (): ReactElement => {
  return (
    <DottoLogoLayout>
      <Image src={'/images/logo.svg'} priority={true} alt={'dotto-logo'} width={103} height={40} />
    </DottoLogoLayout>
  )
}
