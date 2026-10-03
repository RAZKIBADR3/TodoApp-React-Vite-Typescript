import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export function useTodo() {
    const context = useContext(TodoContext);

    if (!context)
        throw new Error("useTodo must be used inside TodoProvider");

    return context;
}