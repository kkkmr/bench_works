import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../features/preferences/preferencesSlice';
import { useSelector } from "react-redux";
import type { RootState } from "./../../store";
// import FloatingSelect from '../FloatingSelect';

import FloatingSelect from '../FloatingSelect';



export default function LocaleSelector() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const language = useSelector((state:RootState) => state.preferences.language);

  const changeLanguage = (lang: string) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };

  const locales=[
    {label:'English', value:'en'},
    {label:'తెలుగు', value:'telugu'},
    {label:'हिन्दी', value:'hindi'}
  ]

  return <FloatingSelect options={locales} label='Language' value={language} onChanger={changeLanguage}/>
  // return <FloatingSelect options={locales} label='Choose locale' onChanger={changeLanguage}/>

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="p-1 text-sm rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
    >
      <option value="en">EN</option>
      <option value="hindi">हिन्दी</option>
      <option value="telugu">తెలుగు</option>
    </select>
  );
}
