import { useState } from "react"
import { v4 } from "uuid"

import { initialTask } from '../data/initialTask'
import { TaskContext } from "./TaskContext"

const TaskProvider = ({ children }) => {
    const [boards, setBoards] = useState(initialTask)

    // Function to add card in first board(i.e in Backlog)
    const addCardToBacklog = (newTask) => {
        const tempBoards = [...boards];
        tempBoards[0].cards = [...tempBoards[0].cards, {
            id: v4(),
            name: newTask,
            stage: 0
        }]
        setBoards(tempBoards);
    }

    // Function to remove card from particular board
    const removeCard = (bid, cid) => {
        const tempBoards = [...boards];
        tempBoards[bid].cards = tempBoards[bid].cards.filter((item) => item.id !== cid);
        setBoards(tempBoards)
    };

    // Function to move card to next board
    const goForward = (bid, cid) => {
        const next_board_id = bid + 1;

        if (next_board_id <= 3) {
            const tempBoards = [...boards];
            const cardIndex = tempBoards[bid].cards.findIndex((item) => item.id === cid);

            // To store card that gets deleted
            const removed_card = tempBoards[bid].cards[cardIndex];

            //Deletion of card
            tempBoards[bid].cards.splice(cardIndex, 1);

            // Adding card to next board (i.e board + 1)
            tempBoards[next_board_id].cards = [...tempBoards[next_board_id].cards, removed_card]
            setBoards(tempBoards);
        }
        else {
            return;
        }
    }

    // Function to move card to previous board
    const goBackward = (bid, cid) => {
        const prev_board_id = bid - 1;

        if (prev_board_id >= 0) {
            const tempBoards = [...boards];
            const cardIndex = tempBoards[bid].cards.findIndex((item) => item.id === cid);

            // To store card that gets deleted
            const removed_card = tempBoards[bid].cards[cardIndex];

            //Deletion of card
            tempBoards[bid].cards.splice(cardIndex, 1);

            // Adding card to previous board (i.e board - 1)
            tempBoards[prev_board_id].cards = [...tempBoards[prev_board_id].cards, removed_card];
            setBoards(tempBoards);
        }
        else {
            return;
        }
    }

    const value = { boards, addCardToBacklog, removeCard, goForward, goBackward };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    )
}

export default TaskProvider