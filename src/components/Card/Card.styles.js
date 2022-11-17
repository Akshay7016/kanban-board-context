import styled from "styled-components";

export const CardContainer = styled.div`
    min-height: 50px;
    padding: 10px;
    border: 1px solid #A9A9A9;
    box-shadow: 0.5px 0.5px 5px #E8E8E8;
    margin-top: 10px;

    &:last-child{
        margin-bottom: 10px;
    }
`

export const CardTitle = styled.h5`
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.875rem;
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 10px;
  margin-bottom: 0;
`
export const LeftArrowListContainer = styled.li`
  opacity: ${props => props.boardId === 0 ? 0.1 : 1};

  &:hover{
    cursor: pointer;
  }
`

export const RightArrowListContainer = styled.li`
  opacity: ${props => props.boardId === 3 ? 0.1 : 1};

  &:hover{
    cursor: pointer;
  }
`

export const ListContainer = styled.li`
  opacity: 1;

  &:hover{
    cursor: pointer;
  }
`

