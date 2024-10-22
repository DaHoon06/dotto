import styled from "styled-components";
import React from "react";

interface TagsProps {
  tags: string[];
}

const TagsLayout = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

const Tag = styled.span`
  background-color: #f3f3f3;
  border: 1px solid transparent;
  padding: 4px 8px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #ff5831;
`;

const Tags = ({ tags }: TagsProps) => {
  return (
    <TagsLayout>
      {tags.map((tag, index) => (
        <Tag key={`dotto_form_tag_${index}`}>{tag}</Tag>
      ))}
    </TagsLayout>
  );
};

export default React.memo(Tags);
