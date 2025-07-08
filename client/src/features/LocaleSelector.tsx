import { useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setPreferences} from './preferences/preferencesSlice';
import Select from '../components/Select';
import useAppSelector from '../hooks/useAppSelector';
import { useEffect,useState } from 'react';

const LocaleSelector=()=> {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState<string>(useAppSelector((state) => state.preferences.language));

  useEffect(()=>{
    i18n.changeLanguage(locale);
  },[locale])

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLocale(lang);
    dispatch(setPreferences({language:lang}));
  };

  const locales=[
    {label:'English', value:'en'},
    {label:'తెలుగు', value:'telugu'},
    {label:'हिन्दी', value:'hindi'}
  ]

  return <Select options={locales} label={t('preferences.language')} value={locale} onChanger={changeLanguage}/>
}

export default LocaleSelector;