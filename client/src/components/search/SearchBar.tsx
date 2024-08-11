import React, {useCallback, useState} from "react";
import {useRouter} from "next/router";
import * as S from "./styles/SearchBar.styled";
import {SearchForm} from "./styles/SearchBar.styled";

type Props = {
  onAddKeyword: (string: string) => void;
  keyword?: string;
};

export const SearchBar = ({onAddKeyword, keyword}: Props) => {
  const [searchValue, setSearchValue] = useState(keyword || "");

  const router = useRouter();

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      if (searchValue.length === 0) {
        alert("키워드를 입력해 주세요.");
        return;
      }
      await router.push(`/search/result?keyword=${encodeURIComponent(searchValue)}`);
      onAddKeyword(searchValue);
      setSearchValue("");
    },
    [searchValue, router, onAddKeyword]
  );
  return (
      <S.SearchForm onSubmit={onSubmit}>
        <S.SearchInputLabel >
          <S.SearchInput
            value={searchValue}
            onChange={onChangeSearch}
            placeholder={"Search"}
            type={"search"}
          />
        </S.SearchInputLabel>
      </S.SearchForm>
  );
};
