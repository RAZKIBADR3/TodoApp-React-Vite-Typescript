import { useRef } from "react"
import ButtonCard from "../../../components/form/ButtonCard"
import InputCard from "../../../components/form/InputCard"
import { useTodo } from "../context/useTodo";

export default function FormCard() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { dispatch } = useTodo();

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()

        const value = inputRef.current?.value.trim();
        if (!value) return;

        dispatch({ type: 'ADD_TODO', payload:{content: value} });        
        inputClear();
    }

    const inputClear = () =>
        inputRef.current!.value = "";

    return (
        <form 
            onSubmit={handleSubmit} 
            className="mx-auto flex w-full max-w-2xl items-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg shadow-gray-200/50"
        >
            <InputCard ref={inputRef} title="what's on your mind?" />
            <ButtonCard title="Add task" buttonType="submit" />
        </form>
    )
}