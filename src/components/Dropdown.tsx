import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

interface option{
    label:string,
    value:string
}

interface DropdownProps{
    label:string,
    value:string,
    options:option[],
    onCustomChange: (val:string)=>void
}

export default function DropDown({label, value, options, onCustomChange}:DropdownProps){

    const [isOpen, setIsOpen]=useState(false);
    const selectedOption=options.find(option=>option.value==value);

    return (
        <div className="relative">
            <label className="absolute bg-primary px-1 left-1 -top-2 text-xs font-medium">{label}</label>
            <button value={value} onClick={()=>setIsOpen(!isOpen)} className="p-2 border border-white flex items-center w-full">
                <span>{selectedOption?.label??label}</span>
                <FiChevronDown
                            className={`ml-2 text-white transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                            }`}
                            size={18}
                        />
            </button>
            {isOpen && (
                <ul className="absolute bg-white shadow-lg rounded-sm border w-full mt-1">
                    {options.map(option=>(
                        <li 
                            key={option.value}
                            value={option.value}
                            onClick={()=>{onCustomChange(option.value); setIsOpen(!isOpen)}}
                            className={`cursor-pointer px-3 py-2 text-sm hover:bg-blue-100
                            ${option.value==value 
                                ? 'bg-blue-50 text-blue-700 font-medium'
                                : 'text-gray-900'
                            }`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>)
            }
        </div>
    )
}