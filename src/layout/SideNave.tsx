// import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function SideNav(){

    const navItems=[
        {label:'TODO',path:'/todo'},
        // {label:'Animation',path:'/animation'},
        // {label:'Google Maps',path:'/'},
        // {label:'Form',path:'/form'},
        // {label:'Node',path:'/Node'},
        {label:'Components',path:'/components'},
    ]
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