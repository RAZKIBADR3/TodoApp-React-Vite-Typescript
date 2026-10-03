import { useReducer, type ReactNode } from "react";
import type { Todo } from "../types/Todo";
import { TodoContext } from "./TodoContext";

const initialTodoState:Todo[] = [];

export type todoAction =
  | { type: "ADD_TODO"; payload: {content: string} }
  | { type: "DELETE_TODO"; payload: {todo: Todo} }
  | { type: "TOGGLE_TODO"; payload: {todo: Todo} }
  | { type: "UPDATE_TODO"; payload: {content: string, todo: Todo} }

const todoReducer = (state: Todo[], action: todoAction) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, { content: action.payload.content, completed: true}]
    
    case 'DELETE_TODO':
      return state.filter((todo) => todo !== action.payload.todo)

    case 'TOGGLE_TODO':
      return state.map((todo) => todo === action.payload.todo 
        ? { ...todo, completed: !todo.completed } : todo )
    
    case 'UPDATE_TODO':
      return state.map((todo) => todo === action.payload.todo 
        ? { content: action.payload.content, completed: true } : todo)

    default:
      return state;
  }
}

export function TodoProvider({ children }: {children: ReactNode}) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);

  return (
    <TodoContext.Provider value={{ todos, dispatch }} >
      {children}
    </TodoContext.Provider>
  );
  
}