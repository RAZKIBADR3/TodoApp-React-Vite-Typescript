import type { ButtonCardProps } from "../../types/ButtonCardProps";

export default function ButtonCard({title, buttonType}: ButtonCardProps) {
    return(
        <button
            type={buttonType}
            className="flex capitalize justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm/6 font-semibold cursor-pointer w-30
            text-white hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
        >
            {title}
        </button>
    )
}