import TodoCard from "./TodoCard";
import { useTodo } from "../context/useTodo";

function TodosCard() {
    const { todos } = useTodo();

    return(
        <div className="py-2 px-10 flex flex-col w-full gap-3">
            {todos.map((todo, i) => <TodoCard todo={todo} key={i} />)}
        </div>
    )
}

export default TodosCard