import LocaleSelector from "../features/LocaleSelector"
import FontSelector from "../features/FontSelector"
import ThemeSelector from "../features/ThemeSelector"
import { NavLink } from "react-router-dom"
import FontSizeSelector from "../features/FontSizeSelector"
import { useTranslation } from 'react-i18next';

export default function Header(){

    const { t } = useTranslation();

    return (
        <div className="header">
            <NavLink to="/">
                <div className="flex items-center">
                        <span className="w-16 inline-block">
                            <img src="bench_works.svg" alt=""/>
                        </span>
                        <span className="logo-name">{t('preferences.title')}</span>
                </div>
            </NavLink>
            <ol className="flex gap-4 items-center">
                <li>
                    <LocaleSelector/>
                </li>
                <li>
                    <FontSelector/>
                </li>
                <li>
                    <ThemeSelector/>
                </li>
                <li>
                    <FontSizeSelector/>
                </li>
                {/* <li>
                    Animation
                </li> */}
                
            </ol>
        </div>
    )
}