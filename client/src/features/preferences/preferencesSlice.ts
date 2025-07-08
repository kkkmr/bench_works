import {createSlice } from '@reduxjs/toolkit';
import type{ PayloadAction} from '@reduxjs/toolkit'

// type Theme = 'light'|'dark'| 'beach' | 'winter'| 'summer'| 'tg';
// type FontSize = 'sm' | 'md' | 'lg' | 'xl';
// type FontSytle=string|null;
// type Language = 'en' | 'fr' | 'telugu' | 'hindi';
type Animation = 'fast' | 'medium' | 'slow' | 'none';

type fontFamily={
    [key:string]:string
}

type PreferencesState={
    theme:string;
    fontSize:string;
    language:string;
    animation:Animation;
    fontFamily:fontFamily;
}

const fontDefaults={
    en:'bw-roboto',
    telugu:'bw-serif-telugu',
    hindi:'bw-devanagari-hindi',
}

const defaults = {
    theme:'dark',
    fontSize:'font-size-normal',
    language:'en',
    animation:'medium',
    fontFamily:fontDefaults
};

const savedUserPreferences = JSON.parse(localStorage.getItem('userPreferences')??'{}');

const initialState:PreferencesState=Object.assign(
    {},
    defaults,
    savedUserPreferences
);

localStorage.setItem('userPreferences',JSON.stringify(initialState));

const preferencesSlice = createSlice({
    name:'preferences',
    initialState,
    reducers:{
        setPreferences:(state, action:PayloadAction<Partial<PreferencesState>>)=>{
            Object.assign(state,action.payload);
            localStorage.setItem('userPreferences', JSON.stringify(state));
        },
        setTheme: (state, action:PayloadAction<string>)=>{ // not necessary as setPreferences replaced it
            state.theme=action.payload;
        },
        setFontSize:(state, action:PayloadAction<string>)=>{ // not necessary as setPreferences replaced it
            state.fontSize=action.payload;
        },
        setLanguage:(state, action:PayloadAction<string>)=>{ // not necessary as setPreferences replaced it
            state.language=action.payload;
        },
        setAnimation:(state, action:PayloadAction<Animation>)=>{
            state.animation=action.payload;
        },
        setFontFamily:(state, action:PayloadAction<string>)=>{ // not necessary as setPreferences replaced it
            state.fontFamily=action.payload as any;
        }

    }
})

export const {setPreferences, setTheme, setFontSize, setLanguage, setAnimation, setFontFamily}=preferencesSlice.actions;
export default preferencesSlice.reducer;