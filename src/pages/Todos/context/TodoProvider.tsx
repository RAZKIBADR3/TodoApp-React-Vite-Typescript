import { useState, type ReactNode } from "react";
import type { Todo } from "../types/Todo";
import { TodoContext } from "./TodoContext";

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (content: string) => {
      const newTodo: Todo = { content, completed: true, /*id: Date.now()*/ };
      setTodos((prev) => [...prev, newTodo]);
    };

    const deleteTodo = (todo: Todo) => {
      setTodos((prev) => prev.filter((t) => t !== todo));
    };

    const toggleTodo = (todo: Todo) => {
      setTodos((prev) =>
        prev.map((p) => p === todo ? { ...p, completed: !p.completed } : p )
      );
    };

    const updateTodo = (todo: Todo, content: string) => {
      setTodos((prev) =>
        prev.map((p) => p === todo ? { content, completed: true } : p)
      );
    }

    return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo, updateTodo}} >
      {children}
    </TodoContext.Provider>
  );
  
}