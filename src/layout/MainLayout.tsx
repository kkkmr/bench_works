// import PreferencesPanel from "../features/preferences/preferencesPanel"
// import { useTranslation } from "react-i18next"
import Header from "./Header";
import SideNav from "./SideNave"
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
//   const { t } = useTranslation();

    return (
        <div className="main-layout main typography">
            <Header/>
            <SideNav/>
            <div className="content">
               <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}