import { useRef } from "react"
import ButtonCard from "../../../components/form/ButtonCard"
import InputCard from "../../../components/form/InputCard"
import type { DataCardProps } from "../types/DataCardProps";

export default function FormCard({setData, data}: DataCardProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        const value = inputRef.current?.value;
        if (!value) return;
        
        addPost(value);
    }

    const addPost = (value: string) => {
        setData([...data, {content: value.trim(), editOpen: false}]);
    }


    return (
        <form className="min-h-10 w-130 p-3 flex gap-1 rounded-xl shadow-sm" onSubmit={event => handleClick(event)}>
            <InputCard title="what's on your mind" ref={inputRef} />
            <ButtonCard title="submit" buttonType="submit"/>
        </form>
    )
}