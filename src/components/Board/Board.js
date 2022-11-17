import Card from '../Card/Card'

import { OuterContainer, BoardContainer, BoardTitle } from './Board.styles'


const Board = ({ board }) => {
    return (
        <>
            <OuterContainer>
                <BoardTitle>{board.title}</BoardTitle>
                <BoardContainer>
                    {
                        board?.cards?.map((task) => {
                            return <Card key={task.id} card={task} boardId={board.id}/>
                        })
                    }
                </BoardContainer>
            </OuterContainer>
        </>
    )
}

export default Board