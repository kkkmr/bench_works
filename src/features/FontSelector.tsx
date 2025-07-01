import Select from "../components/Select"
import useAppSelector from "../hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { setFontFamily } from './preferences/preferencesSlice';
import { useTranslation } from "react-i18next";

export default function FontSelector(){

    const dispatch=useDispatch();
    const {t}=useTranslation();

    const fontTypes=t('preferences.font.types', {returnObjects:true}) as {label:string,value:string}[];
    const [selectedFont,setSelectedFont]=useState<string>(fontTypes[0].value);
    const language=useAppSelector(state=>state.preferences.language);

    useEffect(()=>{
            setSelectedFont(fontTypes[0].value);
            updateAtDocument(fontTypes[0].value);
    },[language]);

    const updateAtDocument=(initialFont:string)=>{
        document.body.className='';
        document.body.classList.add(initialFont);
        dispatch(setFontFamily(initialFont));
    }

    const createLabel=(label:string,value:string):React.ReactNode=>{
        return <span className={`${value}`}>{label}</span>
    }

    const handleChange=(fontSelection:string)=>{
        setSelectedFont(fontSelection);
        document.body.className='';
        document.body.classList.add(fontSelection);
        dispatch(setFontFamily(fontSelection));
    }

    const createOption=(label:string, value:string):React.ReactNode=>{
        return <span className={`${value}`}>{label}</span>
    }
    
    return <Select label={t('preferences.font.label')} value={selectedFont} options={fontTypes} onChanger={handleChange} renderLabel={createLabel} renderOption={createOption}/>
}