import { useTranslation } from 'react-i18next';
import useAppSelector from '../hooks/useAppSelector';
import { useEffect } from 'react';

export const LanguageSync = ({onReady}:{onReady:()=>void}) => {
  const language = useAppSelector((state) => state.preferences.language);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language)
        .then(() => {
            onReady(); // notify app that language is ready
        });
  }, [language]);

  return null;
};
