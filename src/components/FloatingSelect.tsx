import { FiChevronDown } from 'react-icons/fi';
// import { useState } from 'react';

// interface FloatingSelectProps{
//     label:string,
//     value?:string,
//     options:{
//         label:string,
//         value:string,
//     }[],
//     onChanger:(value:string)=>void
// }

// export default function FloatingSelect({label, value, options, onChanger}:FloatingSelectProps){
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="relative">
//             <div className="absolute text-xs bg-primary left-2 -top-2 px-1 rounded-sm">{label}</div>
//             <select value={value} onClick={()=>setIsOpen(!isOpen)} onBlur={()=>setIsOpen(false)} onChange={(e)=>onChanger(e.target.value)} className="bg-transparent py-2 pl-4 pr-8  border-white border-2 outline-0 appearance-none">
//                 {options.map(option=>(
//                     <option key={option.value} value={option.value} className='appearance-none bg-blue-900 text-white outline-0 hover:bg-blue-900 hover:cursor-pointer'>
//                         {option.label}
//                     </option>
//                 ))}
//             </select>
//             <div className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white transition-transform duration-200 ${
//     isOpen ? 'rotate-180' : ''}`}>
//                 <FiChevronDown size={18} />
//             </div>
//         </div>
//     )
// }

// components/ui/SelectMenu.tsx
import { useState, useRef } from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  label: string;
  value: string;
  options: Option[];
  onChanger: (val: string) => void;
}

export default function SelectMenu({ label, value, options, onChanger }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-40 max-w-xs">
      <label className="text-xs font-medium px-2 text-white absolute left-1 -top-2 bg-primary rounded-xs dark:text-gray-200 mb-1 block">
        {label}
      </label>

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between text-white w-full border border-white dark:border-gray-600 bg-primary dark:bg-gray-800 px-3 py-2 text-left text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected?.label || `Select ${label.toLowerCase()}`}</span>

        <FiChevronDown
            className={`ml-2 text-white transition-transform duration-200 ${
            open ? 'rotate-180' : ''
            }`}
            size={18}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute z-10 mt-1 w-full rounded-md border bg-white dark:bg-gray-900 shadow-lg focus:outline-none"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              onClick={() => {
                onChanger(opt.value);
                setOpen(false);
              }}
              className={`cursor-pointer px-3 py-2 text-sm hover:bg-blue-100 dark:hover:bg-blue-800 ${
                value === opt.value
                  ? 'bg-blue-50 dark:bg-blue-700 text-blue-700 dark:text-blue-200 font-medium'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
