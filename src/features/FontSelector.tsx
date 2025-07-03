import Select from "../components/Select"
import useAppSelector from "../hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { setPreferences } from './preferences/preferencesSlice';
import { useTranslation } from "react-i18next";

export default function FontSelector(){

    const dispatch=useDispatch();
    const {t}=useTranslation();
    const language=useAppSelector(state=>state.preferences.language);

    const fontTypes=t('preferences.font.types', {returnObjects:true}) as {label:string,value:string}[];
    const [selectedFont,setSelectedFont]=useState<{[key:string]:string}>(useAppSelector(state => state.preferences.fontFamily));

    useEffect(()=>{
        updateAtDocument(selectedFont[language]);
    },[language]);

    const updateAtDocument=(initialFont:string)=>{
        document.body.className='';
        document.body.classList.add(initialFont);
    }

    const handleChange=(fontSelection:string)=>{
        document.body.className='';
        document.body.classList.add(fontSelection);
        const updatedFontFamily={...selectedFont,[language]:fontSelection}
        setSelectedFont(updatedFontFamily);
        dispatch(setPreferences({fontFamily:updatedFontFamily}));
    }

    const createLabel=(label:string,value:string):React.ReactNode=>{
        return <span className={`${value}`}>{label}</span>
    }

    const createOption=(label:string, value:string):React.ReactNode=>{
        return <span className={`${value}`}>{label}</span>
    }
    
    return <Select label={t('preferences.font.label')} value={selectedFont[language]} options={fontTypes} onChanger={handleChange} renderLabel={createLabel} renderOption={createOption}/>
}