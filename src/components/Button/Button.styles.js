import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 120px;
  height:50px;
  padding: 0 35px;
  font-size: 14px;
  background-color: #1e90ff;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: #1f75fe;
    border: 1px solid black;
  }
`;