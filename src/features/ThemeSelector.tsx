import Select from "../components/Select"
import { useDispatch } from "react-redux"
import {  useState } from "react";
import { setTheme } from './preferences/preferencesSlice';

export default function ThemeSelector(){

    const dispatch=useDispatch();
    const themes=[
        {label:'Main', value:'main'},
        {label:'dark', value:'dark'},
        {label:'beach', value:'beach'},
        {label:'summer', value:'summer'},
        {label:'winter', value:'winter'},
        // {label:'Telangana', value:'tg'}
    ]

    const [selectedTheme,setSelectedTheme]=useState<string>('main');
  
    const handleChange=(themeSelection:string)=>{
        setSelectedTheme(themeSelection);
        themes.map(theme=>document.body.querySelector('.main-layout')?.classList.remove(theme.value));
        document.body.querySelector('.main-layout')?.classList.add(themeSelection);
        dispatch(setTheme(themeSelection));
    }

    return <Select label='Themes' value={selectedTheme} options={themes} onChanger={handleChange} />
}