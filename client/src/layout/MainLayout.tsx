import Header from "./Header";
import SideNav from "./SideNav"
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Profiler, useState } from "react";
import { LanguageSync } from "./LanguageSync";

const onRenderCallback=(
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  // interactions: Set<any>,
  // renderedComponentStack: string
)=> {
  // You can log or handle profiling info here if needed
  console.log(`[${id}] ${phase} phase`);
  console.log(`Actual duration: ${actualDuration}ms`);
  console.log(`Base duration: ${baseDuration}ms`);
  console.log(`Start: ${startTime}, Commit: ${commitTime}`);
  // console.log(`Interactions:`, interactions);
  // console.log(`Rendered Component Stack:`, renderedComponentStack);
}

export default function MainLayout(){
    const [languageReady,setLanguageReady]=useState(false);
    
    return ( <>
      {!languageReady ? (
        <LanguageSync onReady={() => setLanguageReady(true)} />
      ) : (
         <div className="main-layout typography">
            <Header/>
            <Profiler id="SideNav" onRender={onRenderCallback}>
              <SideNav/>
            </Profiler>
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