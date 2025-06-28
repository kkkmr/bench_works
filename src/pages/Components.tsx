import { useState } from "react"
import Select from "../components/Select"

export default function Components(){

    const [selectValue, setSelectValue]=useState('roboto');

    const englishFonts=[
        {label:'Roboto', value:'bw-roboto'},
        {label:'Open Sans', value:'bw-open-sans'},
        {label:'Montserrat', value:'bw-montserrat'},
        {label:'Inter', value:'bw-inter'},
        {label:'Dancing Script', value:'bw-dancing-script'},
        {label:'Orbitron', value:'bw-orbitron'}
    ]

    function handleChange(val:string){
        setSelectValue(val);
    }

    return (
        <div className="components">
            <Select label='Dropdown' value={selectValue} options={englishFonts} onChanger={handleChange}/>
        </div>
    )
}