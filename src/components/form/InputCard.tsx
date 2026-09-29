import { forwardRef } from "react"
import type { InputCardProps } from "../../types/InputCardProps"

const InputCard = forwardRef<HTMLInputElement, InputCardProps>(
  ({title, value}, ref) => {
    return (   
      <div className="flex-1">
        <input
          ref={ref}
          type="text"
          placeholder={title}
          defaultValue={value}
          
          className="w-full border-0 bg-transparent px-4 py-3 text-base text-gray-900 outline-none placeholder:text-gray-400"
        />
      </div>
    );
  }
);

export default InputCard;