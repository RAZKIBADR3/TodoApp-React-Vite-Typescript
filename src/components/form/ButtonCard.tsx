import type { ButtonCardProps } from "../../types/ButtonCardProps";

export default function ButtonCard({title, buttonType}: ButtonCardProps) {
    return(
    <button
        type={buttonType}
        className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold capitalize text-white transition hover:bg-blue-400 active:scale-95 cursor-pointer"
    >
      {title}
    </button>
    )
}