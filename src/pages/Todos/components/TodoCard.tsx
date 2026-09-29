import { useEffect, useRef } from "react";
import { useTodo } from "../context/useTodo";
import type { Todo } from "../types/Todo";
import InputCard from "../../../components/form/InputCard";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import CheckIcon from "../../../components/icons/CheckIcon";
import EditIcon from "../../../components/icons/EditIcon";

interface TodoCardProps {
  todo: Todo;
}

function TodoCard({ todo }: TodoCardProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { deleteTodo, toggleTodo, updateTodo } = useTodo();

    useEffect(() => {
        if (!todo.completed) 
            inputRef.current?.focus();
    }, [todo.completed]);

    const handleUpdate = (todo: Todo, e?: React.SubmitEvent) => {
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

    return (
    <div
      className={`group flex w-full items-center gap-4 rounded-2xl border p-4 transition-all duration-200 ${
        todo.completed
          ? "border-gray-200 bg-gray-50"
          : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md"
      }`}
    >

      {/* Content */}
      <div className="min-w-0 flex-1">
        { todo.completed 
            ?   <h1 className="text-base font-medium text-gray-800">
                    {todo.content}
                </h1>
            
            :   <form className="w-full" onSubmit={(event) => handleUpdate(todo, event)}>
                    <InputCard ref={inputRef} value={todo.content}/>
                </form>
        }
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">
        {/* Update */}
        { todo.completed 
            ?   <button
                    type="button" onClick={() => toggleTodo(todo)}
                    className="flex size-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition hover:bg-gray-200 cursor-pointer"
                >
                    <EditIcon />
                </button>

            :   <button
                    type="submit" onClick={() => handleUpdate(todo)}
                    className="flex size-9 items-center justify-center rounded-lg bg-green-500 text-white transition hover:bg-green-600 cursor-pointer"
                >
                    <CheckIcon />
                </button>
        }

        {/* Delete */}
        <button
            type="button" onClick={() => handleDelete(todo)}
            className="flex size-9 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-100 hover:text-red-600 cursor-pointer"
        >
          <DeleteIcon />
        </button>

      </div>
    </div>
  );
}

export default TodoCard