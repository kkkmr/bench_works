import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";

export default function SideNav(){

    const {t}=useTranslation();
    const navItems=t('sideNav.sideNavMenu',{returnObjects:true})as {label:string, path:string}[];
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleNav = () => setIsExpanded(prev => !prev);

    return (
        <aside className={`side-nav  ${isExpanded ? 'w-40' : 'w-20'}`} role="navigation" aria-label="Primary">
            <nav className="flex flex-col gap-8" role="listbox">
                <span className="cursor-pointer menu-icon" onClick={toggleNav}>
                    <FiMenu />
                </span>
                {isExpanded && navItems.map(({label,path})=> (
                    <NavLink 
                        to={path}
                        key={path}
                        role="option"
                        >
                            {label}
                    </NavLink>
                ))}
            </nav>
            <div
                className="absolute top-0 right-0 h-full w-4 cursor-ew-resize"
                onClick={() => setIsExpanded(!isExpanded)}
            />
        </aside>
    )
}