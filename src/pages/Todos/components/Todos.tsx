import FormCard from "./FormCard";
import TodosCard from "./TodosCard";
import { TodoProvider } from "../context/TodoProvider";

export default function Todos(){
    // const appUrl = import.meta.env.VITE_APP_URL;
  return (
    <TodoProvider>
        <div className="min-h-screen lg:w-2/3 sm:w-3/4 mx-auto flex flex-col items-center justify-baseline gap-4 px-6 pt-24">
            <FormCard />
            <TodosCard />
        </div>

        {/* <div>app url : {appUrl}</div> */}
    </TodoProvider>
  )
}