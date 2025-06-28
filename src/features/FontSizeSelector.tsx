import Select from "../components/Select"
import { useDispatch } from "react-redux"
import {  useState } from "react";
import { setFontSize } from './preferences/preferencesSlice';

export default function FontSizeSelector(){

    const dispatch=useDispatch();
    const fontSizes=[
        {label:'Extra small', value:'font-size-extra-small'},
        {label:'small', value:'font-size-small'},
        {label:'normal', value:'font-size-normal'},
        {label:'Large', value:'font-size-large'},
        {label:'Extra large', value:'font-size-extra-large'},
    ]

    const [selectedFontSize,setselectedFontSize]=useState<string>('font-size-normal');
  
    const handleChange=(fontSizeSelection:string)=>{
        setselectedFontSize(fontSizeSelection);
        fontSizes.map(fontSize=>document.body.querySelector('.main-layout')?.classList.remove(fontSize.value));
        document.body.querySelector('.main-layout')?.classList.add(fontSizeSelection);
        dispatch(setFontSize(fontSizeSelection));
    }

    return <Select label='Font size' value={selectedFontSize} options={fontSizes} onChanger={handleChange} />
}