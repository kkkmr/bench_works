import {createSlice } from '@reduxjs/toolkit';
import type{ PayloadAction} from '@reduxjs/toolkit'

// type Theme = 'light'|'dark'| 'beach' | 'winter'| 'summer'| 'tg';
// type FontSize = 'sm' | 'md' | 'lg' | 'xl';
// type FontSytle=string|null;
// type Language = 'en' | 'fr' | 'telugu' | 'hindi';
type Animation = 'fast' | 'medium' | 'slow' | 'none';


type PreferencesState={
    theme:string;
    fontSize:string;
    language:string;
    animation:Animation;
    fontFamily:string;
}

const initialState:PreferencesState={
    theme:'light',
    fontSize:'lg',
    language:'en',
    animation:'medium',
    fontFamily:'sansa'
}

const preferencesSlice = createSlice({
    name:'preferences',
    initialState,
    reducers:{
        setTheme: (state, action:PayloadAction<string>)=>{
            state.theme=action.payload;
        },
        setFontSize:(state, action:PayloadAction<string>)=>{
            state.fontSize=action.payload;
        },
        setLanguage:(state, action:PayloadAction<string>)=>{
            state.language=action.payload;
        },
        setAnimation:(state, action:PayloadAction<Animation>)=>{
            state.animation=action.payload;
        },
        setFontFamily:(state, action:PayloadAction<string>)=>{
            state.fontFamily=action.payload;
        }

    }
})

export const {setTheme, setFontSize, setLanguage, setAnimation, setFontFamily}=preferencesSlice.actions;
export default preferencesSlice.reducer;