import { useRef, type RefObject } from "react";
import { useTodo } from "../context/useTodo";
import type { Todo } from "../types/Todo";
import InputCard from "../../../components/form/InputCard";

interface TodoCardProps {
  todo: Todo;
}

function TodoCard({ todo }: TodoCardProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { deleteTodo, toggleTodo, updateTodo } = useTodo();

    const handleUpdate = (todo: Todo, inputRef: RefObject<HTMLInputElement | null>, e?: React.SubmitEvent) => {
        if(e) e.preventDefault()

        const value = inputRef.current?.value.trim();
        if (!value) return;

        updateTodo(todo, value);
    }

    const handleDelete = (todo: Todo) => {
        const confirm = window.confirm(`Are you sure you want to delete "${todo.content}"?`);
        if (!confirm) return;

        deleteTodo(todo);
    }

    return(
        <div className="w-full py-2 px-3 border rounded-md border-blue-500 flex justify-between items-center">
            { todo.completed
                ? <h1 className="capitalize text-black font-medium text-xl">{todo.content}</h1>

                : <form className="w-full" onSubmit={(event) => handleUpdate(todo, inputRef, event)}>
                    <InputCard ref={inputRef} value={todo.content} />
                  </form>
            }

            <div className="flex gap-3">
                { todo.completed 
                    ?   <i className="cursor-pointer bg-gray-700 rounded-sm text-white p-1" onClick={() => toggleTodo(todo)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </i>

                    :   <i className="cursor-pointer bg-green-500 rounded-sm text-white p-1" onClick={() => handleUpdate(todo, inputRef)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </i>
                }

                <i className="cursor-pointer bg-red-700 rounded-sm text-white p-1" onClick={() => handleDelete(todo)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </i>
            </div>
        </div>
    )
}

export default TodoCard