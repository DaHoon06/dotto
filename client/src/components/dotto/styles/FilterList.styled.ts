import styled from "styled-components";

export const FilterListLayout = styled.div`
    background-color: ${({theme}) => theme.colors.white000};
    min-height: 100vh;
    position: sticky;
    top: 100px;
    height: 100%;
`

export const FilterListContainer = styled.aside`
    background-color: white;
    width: 296px;
    height: 600px;
    
    .filter_list {
        padding: 40px 48px;
    }

    ${({theme}) => theme.media.mobile} {
        display: none;
    }
`;

export const TagContainer = styled.section`
    min-height: 292px;
    width: 224px;
    
    .tag {
        border: 1px solid black;
        padding: 8px 12px;
        background-color: ${({theme}) => theme.colors.white000};
        width: fit-content;
    }
`;

export const SearchContainer = styled.section``;
