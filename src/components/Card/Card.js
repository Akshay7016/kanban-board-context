import { useContext } from 'react'

import { TaskContext } from '../../context/TaskContext';
import { ArrowLeftCircle, ArrowRightCircle, Trash2 } from "react-feather";

import {
    CardContainer,
    CardTitle,
    ButtonContainer,
    ListContainer,
    LeftArrowListContainer,
    RightArrowListContainer
} from './Card.styles'


const Card = ({ boardId, card }) => {
    const { id, name } = card;
    const { removeCard, goForward, goBackward } = useContext(TaskContext)

    return (
        <>
            <CardContainer >
                <CardTitle>{name}</CardTitle>

                <ButtonContainer>
                    <LeftArrowListContainer boardId={boardId} onClick={() => goBackward(boardId, id)}>
                        {<ArrowLeftCircle />}
                    </LeftArrowListContainer>

                    <RightArrowListContainer boardId={boardId} onClick={() => goForward(boardId, id)}>
                        {<ArrowRightCircle />}
                    </RightArrowListContainer>

                    <ListContainer onClick={() => removeCard(boardId, id)}>
                        {<Trash2 />}
                    </ListContainer>
                </ButtonContainer>
            </CardContainer>
        </>
    )
}

export default Card