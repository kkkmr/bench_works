import Select from "../components/Select"
import { useDispatch } from "react-redux"
import {  useState } from "react";
import { setTheme } from './preferences/preferencesSlice';
import { useTranslation } from 'react-i18next';

export default function ThemeSelector(){

    const dispatch=useDispatch();
    const {t}=useTranslation();
    const themes=t('preferences.theme.types', {returnObjects:true}) as {label:string, value:string}[];
    const [selectedTheme,setSelectedTheme]=useState<string>('light');
  
    const handleChange=(themeSelection:string)=>{
        setSelectedTheme(themeSelection);
        themes.map(theme=>document.body.querySelector('.main-layout')?.classList.remove(theme.value));
        document.body.querySelector('.main-layout')?.classList.add(themeSelection);
        dispatch(setTheme(themeSelection));
    }

    return <Select label={t('preferences.theme.label')} value={selectedTheme} options={themes} onChanger={handleChange} />
}