import { FiChevronDown } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  label: string;
  value: string;
  options: Option[];
  onChanger: (val: string) => void;
  renderLabel?:(label:string, value:string)=>React.ReactNode;
  renderOption?:(label:string, value:string)=>React.ReactNode;
}

export default function Select({ label, value, options, onChanger,renderLabel,renderOption }: Props) {

  const [open, setOpen] = useState(false);
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const selected = options.find((opt) => opt.value === value);

  useEffect(()=>{
    const handleMouseDown=(event:MouseEvent)=>{
       if(selectContainerRef.current && !selectContainerRef.current.contains(event.target as Node)){
        setOpen(false);
       }
    }

    document.addEventListener('mousedown',handleMouseDown);
    return ()=> document.removeEventListener('mousedown',handleMouseDown);
  },[])

  return (
    <div className="relative max-w-xs" ref={selectContainerRef}>
      <label className="text-xs font-medium px-2 text-white absolute left-1 -top-2 bg-primary rounded-xs dark:text-gray-200 mb-1 block">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center justify-between text-white w-full border border-white dark:border-gray-600 bg-primary dark:bg-gray-800 px-3 py-2 text-left text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{ renderLabel 
          ? renderLabel(selected?.label || `Select ${label.toLowerCase()}`, selected?.value || '')
          : selected?.label || `Select ${label.toLowerCase()}`}
        </span>

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
          className="absolute z-10 mt-1 w-full rounded-xs border bg-white dark:bg-gray-900 shadow-lg focus:outline-none"
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
              { renderOption
                ? renderOption(opt.label,opt.value)
                : opt.label
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
