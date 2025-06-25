import LocaleSelector from "./LocaleSelector"
import { useTranslation } from "react-i18next"
export default function Header(){

    const { t }= useTranslation();
    return (
        <div className="header flex justify-between bg-primary items-center text-white">
            <div className="flex items-center">
                <span className="w-20 inline-block">
                    <img src="bench_works.svg" alt=""/>
                </span>
                <span className="text-2xl">Bench Works</span>
                {t('preferences.title')}
            </div>
            <ol className="flex">
                <li>
                    <LocaleSelector/>
                </li>
                <li>
                    Font size
                </li>
                <li>
                    Font Family
                </li>
                <li>
                    Animation
                </li>
                <li>
                    Theme
                </li>
            </ol>
        </div>
    )
}