import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function SideNav(){

    const {t}=useTranslation();
    const navItems=t('sideNav.sideNavMenu',{returnObjects:true})as {label:string, path:string}[];

    return (
        <aside className="side-nav" role="navigation" aria-label="Primary">
            <nav className="flex flex-col gap-8" role="listbox">
                { navItems.map(({label,path})=> (
                    <NavLink 
                        to={path}
                        key={path} 
                        role="option"
                        >
                            {label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}