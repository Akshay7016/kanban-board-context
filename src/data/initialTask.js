import { v4 } from "uuid";

export const initialTask = [
    {
        id: 0,
        title: "Backlog",
        cards: [
            {
                id: v4(),
                name: "Task 1",
                stage: 0
            },
            {
                id: v4(),
                name: "Task 2",
                stage: 0
            },
        ]
    },
    {
        id: 1,
        title: "To Do",
        cards: []
    },
    {
        id: 2,
        title: "Inprogress",
        cards: []
    },
    {
        id: 3,
        title: "Done",
        cards: []
    }
];