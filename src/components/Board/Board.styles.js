import styled from "styled-components";

export const OuterContainer = styled.div`
    width: 25%;
    height: 420px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    &:last-child{
        margin-right: 30px;
    }
`;

export const BoardTitle = styled.h3`
    text-align: center;
    color: green;
`;

export const BoardContainer = styled.div`
    padding: 0 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px #C0C0C0;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        border: 1px solid #ccc;
        background-color: 	#D8D8D8;
    }

    &::-webkit-scrollbar-thumb:hover {
        border: 1px solid grey;
    }
`

