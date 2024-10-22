import styled from "styled-components";
import React from "react";

interface DescriptionProps {
  content: string;
}

const DescriptionLayout = styled.div`
  width: 100%;
  margin: 1em 0;
`;

const Description = ({ content }: DescriptionProps) => {
  return (
    <DescriptionLayout>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </DescriptionLayout>
  );
};

export default React.memo(Description);
