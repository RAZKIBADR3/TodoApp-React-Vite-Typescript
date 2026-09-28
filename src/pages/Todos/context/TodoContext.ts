import { createContext } from "react";
import type { Todo } from "../types/Todo";

interface TodoContextType {
  todos: Todo[];
  addTodo: (content: string) => void;
  deleteTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo, content: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);