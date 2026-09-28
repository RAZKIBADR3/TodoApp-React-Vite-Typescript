import { useRef } from "react"
import ButtonCard from "../../../components/form/ButtonCard"
import InputCard from "../../../components/form/InputCard"
import { useTodo } from "../context/useTodo";

export default function FormCard() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { addTodo } = useTodo();

    const handleClick = (e: React.SubmitEvent) => {
        e.preventDefault()

        const value = inputRef.current?.value.trim();
        if (!value) return;

        addTodo(value);
        
        inputRef.current!.value = "";
    }

    return (
        <form className="min-h-10 w-130 p-3 flex gap-1 rounded-xl shadow-sm" onSubmit={handleClick}>
            <InputCard title="what's on your mind" ref={inputRef} />
            <ButtonCard title="add" buttonType="submit"/>
        </form>
    )
}