import { createContext } from "react";
import type { Todo } from "../types/Todo";
import type { todoAction } from "./TodoProvider";

interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<todoAction>;
}

export const TodoContext = createContext<TodoContextType | null>(null);