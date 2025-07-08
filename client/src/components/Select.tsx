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
    <div className="select" ref={selectContainerRef}>
      <label className="select-label">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="select-btn text-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{ renderLabel 
          ? renderLabel(selected?.label || `Select ${label.toLowerCase()}`, selected?.value || '')
          : selected?.label || `Select ${label.toLowerCase()}`}
        </span>

        <FiChevronDown
            className={`select-icon ${
            open ? 'rotate-180' : ''
            }`}
            size={18}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="options-container"
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
              className={`select-option ${
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
