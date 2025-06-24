import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './../../store';
// import { useEffect } from 'react';
import {
  setTheme,
  setFontSize,
  setLanguage,
} from './preferencesSlice';
import { useTranslation } from 'react-i18next';

export default function PreferencesPanel() {
  const dispatch = useDispatch();
  const { theme, fontSize, language } = useSelector((state: RootState) => state.preferences);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
  };

//   useEffect(() => {
//   i18n.changeLanguage(language);
// }, [language]);

  return (
    <div className="p-4 space-y-4 border rounded-md shadow-md w-fit bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {t('preferences.title') || 'Preferences'}
      </h2>

      {/* Theme Toggle */}
      <div className="flex items-center gap-2">
        <label>{t('preferences.theme') || 'Theme'}:</label>
        <select
          value={theme}
          onChange={(e) => dispatch(setTheme(e.target.value as 'light' | 'dark'))}
          className="p-1 rounded"
        >
          <option value="light">{t('preferences.light') || 'Light'}</option>
          <option value="dark">{t('preferences.dark') || 'Dark'}</option>
        </select>
      </div>

      {/* Font Size */}
      <div className="flex items-center gap-2">
        <label>{t('preferences.fontSize') || 'Font Size'}:</label>
        <select
          value={fontSize}
          onChange={(e) => dispatch(setFontSize(e.target.value as 'sm' | 'md' | 'lg'))}
          className="p-1 rounded"
        >
          <option value="sm">{t('preferences.small') || 'Small'}</option>
          <option value="md">{t('preferences.medium') || 'Medium'}</option>
          <option value="lg">{t('preferences.large') || 'Large'}</option>
        </select>
      </div>

      {/* Language */}
      <div className="flex items-center gap-2">
        <label>{t('preferences.language') || 'Language'}:</label>
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="p-1 rounded"
        >
          <option value="en">English</option>
          <option value="hindi">हिन्दी</option>
          <option value="telugu">తెలుగు</option>

        </select>
      </div>
    </div>
  );
}
