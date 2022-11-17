import { useContext } from "react";

import Board from "./components/Board/Board";
import InputBox from "./components/InputBox/InputBox";

import { TaskContext } from "./context/TaskContext";
import { BoardsContainer } from './App.styles'



const App = () => {
  const { boards } = useContext(TaskContext);

  return (
    <>
      <InputBox />

      <BoardsContainer>
        {
          boards.map((board) => {
            return <Board key={board.id} board={board} />
          })
        }
      </BoardsContainer>
    </>
  )
}

export default App;