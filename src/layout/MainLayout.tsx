// import PreferencesPanel from "../features/preferences/preferencesPanel"
// import { useTranslation } from "react-i18next"
import Header from "../components/Header/Header";
import "./../styles/index.css"
import "./../styles/fonts.css"
import "./MainLayout.css"

export default function MainLayout(){
//   const { t } = useTranslation();

    return (
        <div className="main-layout">
            <Header/>
            <div className="side-nav">Side Nav</div>
            <div className="content">
                Content
            </div>
            <div className="footer">
                Footer
            </div>
            {/* <h1>{t('preferences.title')}</h1>
            <PreferencesPanel/> */}
        </div>
    )
}