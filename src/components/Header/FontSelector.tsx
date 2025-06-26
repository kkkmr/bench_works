import Select from "../Select"
import useAppSelector from "../../hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { setFontFamily } from '../../features/preferences/preferencesSlice';


export default function FontSelector(){

    const dispatch=useDispatch();
    const englishFonts=[
        {label:'Roboto', value:'roboto'},
        {label:'Open Sans', value:'open-sans'},
        {label:'Montserrat', value:'montserrat'},
        {label:'Inter', value:'inter'},
        {label:'Dancing Script', value:'dancing-script'},
        {label:'Orbitron', value:'orbitron'}
    ]
     const teluguFonts=[
        {label:'సెరిఫ్ తెలుగు', value:'serif-telugu'},
        {label:'సాంస్ తెలుగు', value:'sans-telugu'},
        {label:'అనేక్ తెలుగు', value:'anek-telugu'}
    ]

    const hindiFonts=[
        {label:'देवनागरी हिंदी', value:'devanagari-hindi'},
        {label:'मातंगी', value:'matangi'},
        {label:'पॉप्पीन्स ', value:'poppins'}
    ]
    const [fonts,setFonts]=useState<{label:string, value:string}[]>([...englishFonts]);
    const [selectedFont,setSelectedFont]=useState<string>('roboto');
    const language=useAppSelector(state=>state.preferences.language);

    useEffect(()=>{
        if(language=='en'){
            setFonts([...englishFonts]);
            setSelectedFont('roboto');
            document.body.className='';
            document.body.classList.add('roboto');
            dispatch(setFontFamily('roboto'));
        }
        else if(language=='telugu'){
            setFonts([...teluguFonts]);
            setSelectedFont('serif-telugu');
            document.body.className='';
            document.body.classList.add('serif-telugu');
            dispatch(setFontFamily('serif-telugu'));
        }
        else if(language=='hindi'){
            setFonts([...hindiFonts]);
            setSelectedFont('devanagari-hindi');
            document.body.className='';
            document.body.classList.add('devanagari-hindi');
            dispatch(setFontFamily('devanagari-hindi'));

        }
    },[language]);

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
    
    return (
        <Select label='Fonts' value={selectedFont} options={fonts} onChanger={handleChange} renderLabel={createLabel} renderOption={createOption}/>
    )
}