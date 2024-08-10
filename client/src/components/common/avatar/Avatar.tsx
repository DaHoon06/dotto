import React, { ReactElement } from "react";
import Image from "next/image";
import styled from "styled-components";

const AvatarLayout = styled.div`
    .image {
        
    }
`;

interface AvatarProp {
  src?: string;
  alt?: string;
}

const defaultImage = "/images/profile.png";

export const Avatar = React.memo((props: AvatarProp): ReactElement => {
  const { src, alt } = props;

  return (
    <AvatarLayout>
      <Image
        className={'image'}
        src={src || defaultImage}
        alt={alt || 'profile-image'}
        width={40}
        height={40}
        priority={true}
      />
    </AvatarLayout>
  );
});

Avatar.displayName = "Avatar";
