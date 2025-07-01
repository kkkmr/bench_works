import Header from "./Header";
import SideNav from "./SideNav"
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout(){

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