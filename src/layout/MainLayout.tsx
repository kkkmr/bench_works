import Header from "./Header";
import SideNav from "./SideNav"
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { LanguageSync } from "./LanguageSync";

export default function MainLayout(){
    const [languageReady,setLanguageReady]=useState(false);
    
    return ( <>
      {!languageReady ? (
        <LanguageSync onReady={() => setLanguageReady(true)} />
      ) : (
         <div className="main-layout typography">
            <Header/>
            <SideNav/>
            <div className="content">
               <Outlet/>
            </div>
            <Footer/>
        </div>
      )}
    </>
  );
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