import Select from "../components/Select"
import { useDispatch } from "react-redux"
import {  useState } from "react";
import { setFontSize } from './preferences/preferencesSlice';
import { useTranslation } from "react-i18next";

export default function FontSizeSelector(){

    const dispatch=useDispatch();
    const {t}=useTranslation();
    const fontSizes=t('preferences.fontSize.types', {returnObjects:true}) as {label:string, value:string}[];

    const [selectedFontSize,setselectedFontSize]=useState<string>('font-size-normal');
  
    const handleChange=(fontSizeSelection:string)=>{
        setselectedFontSize(fontSizeSelection);
        fontSizes.map(fontSize=>document.body.querySelector('.main-layout')?.classList.remove(fontSize.value));
        document.body.querySelector('.main-layout')?.classList.add(fontSizeSelection);
        dispatch(setFontSize(fontSizeSelection));
    }

    return <Select label={t('preferences.fontSize.label')} value={selectedFontSize} options={fontSizes} onChanger={handleChange} />
}