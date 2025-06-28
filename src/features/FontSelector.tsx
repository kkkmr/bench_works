import Select from "../components/Select"
import useAppSelector from "../hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { setFontFamily } from './preferences/preferencesSlice';

export default function FontSelector(){

    const dispatch=useDispatch();
    const englishFonts=[
        {label:'Roboto', value:'bw-roboto'},
        {label:'Open Sans', value:'bw-open-sans'},
        {label:'Montserrat', value:'bw-montserrat'},
        {label:'Inter', value:'bw-inter'},
        {label:'Dancing Script', value:'bw-dancing-script'},
        {label:'Orbitron', value:'bw-orbitron'}
    ]

     const teluguFonts=[
        {label:'సెరిఫ్ తెలుగు', value:'bw-serif-telugu'},
        {label:'సాంస్ తెలుగు', value:'bw-sans-telugu'},
        {label:'అనేక్ తెలుగు', value:'bw-anek-telugu'}
    ]

    const hindiFonts=[
        {label:'देवनागरी हिंदी', value:'bw-devanagari-hindi'},
        {label:'मातंगी', value:'bw-matangi'},
        {label:'पॉप्पीन्स ', value:'bw-poppins'}
    ]
    const [fonts,setFonts]=useState<{label:string, value:string}[]>([...englishFonts]);
    const [selectedFont,setSelectedFont]=useState<string>('bw-roboto');
    const language=useAppSelector(state=>state.preferences.language);

    useEffect(()=>{
        if(language=='en'){
            setFonts([...englishFonts]);
            setSelectedFont('bw-roboto');
            updateAtDocument('bw-roboto');
        }
        else if(language=='telugu'){
            setFonts([...teluguFonts]);
            setSelectedFont('bw-serif-telugu');
            updateAtDocument('bw-serif-telugu');
        }
        else if(language=='hindi'){
            setFonts([...hindiFonts]);
            setSelectedFont('bw-devanagari-hindi');
            updateAtDocument('bw-devanagari-hindi');
        }
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
    
    return <Select label='Fonts' value={selectedFont} options={fonts} onChanger={handleChange} renderLabel={createLabel} renderOption={createOption}/>
}