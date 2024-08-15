import { FlexBox } from "@components/common/boxes";
import { Typography } from "@components/common/typograhpy";
import { TagContainer } from "./styles/TagGroup.styled";

interface TagGroupProps {
  tags: string[];
}

export const TagGroup = ({ tags }: TagGroupProps) => {
  return (
    <TagContainer>
      <Typography variant={"h3"}># 태그</Typography>

      <FlexBox
        className={"mt-24"}
        $flexDirection={"row"}
        $justifyContent={"flex-start"}
        $gap={8}
      >
        {tags.map((tag, index) => {
          return (
            <div className={"tag"} key={`tag_${tag}_${index}`}>
              {tag}
            </div>
          );
        })}
      </FlexBox>
    </TagContainer>
  );
};
