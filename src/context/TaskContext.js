import { createContext } from "react";

export const TaskContext = createContext({
    boards: [],
    addCardToBacklog: () => null,
    removeCard: () => null,
    goForward: () => null,
    goBackward: () => null
});
