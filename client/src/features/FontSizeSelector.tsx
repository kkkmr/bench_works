import Select from "../components/Select"
import { useDispatch } from "react-redux"
import {  useState,useEffect } from "react";
import { setPreferences } from './preferences/preferencesSlice';
import { useTranslation } from "react-i18next";
import useAppSelector from "../hooks/useAppSelector";

export default function FontSizeSelector(){

    const dispatch=useDispatch();
    const {t}=useTranslation();
    const fontSizes=t('preferences.fontSize.types', {returnObjects:true}) as {label:string, value:string}[];
    const [selectedFontSize,setselectedFontSize]=useState<string>(useAppSelector((state) => state.preferences.fontSize));

    useEffect(()=>{
            document.body.querySelector('.main-layout')?.classList.add(selectedFontSize);
    },[])
  
    const handleChange=(fontSizeSelection:string)=>{
        setselectedFontSize(fontSizeSelection);
        fontSizes.map(fontSize=>document.body.querySelector('.main-layout')?.classList.remove(fontSize.value));
        document.body.querySelector('.main-layout')?.classList.add(fontSizeSelection);
        dispatch(setPreferences({fontSize:fontSizeSelection}));
    }

    return <Select label={t('preferences.fontSize.label')} value={selectedFontSize} options={fontSizes} onChanger={handleChange} />
}