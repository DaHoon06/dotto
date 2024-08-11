import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const SearchInputLabel = styled.label`
    position: relative;
    display: inline-block;
    //width: 100%;
    width: 300px;
    height: auto;
`

export const SearchInput = styled.input`
    box-sizing: border-box;
    background-color: #F5F5F5;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    color: #696969;
    width: 100%;
    height: 38px;
    outline: none;
    padding: 0.2em 0.8em;

    &:focus {
        border-color: #222;
        background-color: #fff;
    }
    
    &::placeholder {
        color: #BDBDBD;
    }

    &::-webkit-search-cancel-button {
        position: relative;
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        color: #fff;
        background-size: 50%;
        background: #fff url("/images/x-icon.png") no-repeat center center;
        cursor: pointer;
    }
`;
