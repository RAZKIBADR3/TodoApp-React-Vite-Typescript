import { forwardRef } from "react"
import type { InputCardProps } from "../../types/InputCardProps"

const InputCard = forwardRef<HTMLInputElement, InputCardProps>(
  ({title, value}, ref) => {
    return (   
      <div className="w-5/6">
        <input 
          ref={ref}
          placeholder={title}
          defaultValue={value}

          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
          placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"

          type="text"
          />
      </div>
    );
  }
);

export default InputCard;