import type { InputCardProps } from "../../types/InputCardProps"

function InputCard({title, ref}: InputCardProps) {
    return (   
      <div className="w-full">
        <input 
          ref={ref}
          placeholder={title}

          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
          placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-500 sm:text-sm/6"

          type="text"
          // name="first-name"
          />
      </div>
    )
}

export default InputCard