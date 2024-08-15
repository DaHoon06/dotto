import { FlexBox } from "@components/common/boxes";
import { Typography } from "@components/common/typograhpy";
import { AnimatePresence, motion } from "framer-motion";
import * as S from "./styles/FilterList.styled";
import { FilterButtonGroup } from "./FilterButtonGroup";
import { TagGroup } from "./TagGroup";

const TAGS = [
  "블랙앤그레이",
  "레터링",
  "트라이벌",
  "올드스쿨",
  "뉴스쿨",
  "두들",
  "라인워크",
  "수채화",
  "포트레이트",
  "이레즈미",
  "이퀄라이트",
];

interface FilterListProps {
  isOpen: boolean;
}

export const FilterList = ({ isOpen }: FilterListProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <S.FilterListLayout>
          <motion.div
            key="filter-comp"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ stiffness: 300 }}
          >
            <S.FilterListContainer>
              <FlexBox
                className={"filter_list"}
                $justifyContent={"flex-start"}
                $alignItems={"flex-start"}
              >
                <TagGroup tags={TAGS} />

                <hr />

                <S.SearchContainer>
                  <Typography variant={"h3"}>지역</Typography>

                  <input type={"text"} />
                  <button>검색버튼</button>
                  <div>
                    가로 스크롤
                    <span>서울</span>
                    <span>부산</span>
                  </div>
                </S.SearchContainer>

                <FilterButtonGroup />
              </FlexBox>
            </S.FilterListContainer>
          </motion.div>
        </S.FilterListLayout>
      )}
    </AnimatePresence>
  );
};
