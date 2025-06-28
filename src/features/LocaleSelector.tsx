import { useDispatch, useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage } from './preferences/preferencesSlice';
import type { RootState } from "../store";
import Select from '../components/Select';

export default function LocaleSelector() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
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

  return <Select options={locales} label={t('preferences.language')} value={language} onChanger={changeLanguage}/>
}
