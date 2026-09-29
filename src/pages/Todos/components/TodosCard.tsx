import TodoCard from "./TodoCard";
import { useTodo } from "../context/useTodo";

function TodosCard() {
    const { todos } = useTodo();

    return(
        <div className="py-2 px-10 flex flex-col w-full gap-3">
            {
                todos.length === 0 
                ? 
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
                        <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                            ✓
                        </div>

                        <h2 className="text-lg font-semibold text-gray-800">
                            No tasks yet
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Add your first task and start getting things done.
                        </p>
                    </div>

                :
                    todos.map((todo, i) => 
                        <TodoCard todo={todo} key={i} />
                )
            }
        </div>
    )
}

export default TodosCard