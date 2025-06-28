import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Todo', path: '/todo' },
  { label: 'Google Maps', path: '/maps' },
  { label: 'E-commerce', path: '/shop' },
  { label: 'Forms', path: '/forms' },
  { label: 'Settings', path: '/settings' }
];

export default function SideNav() {
  const location = useLocation();
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const index = navItems.findIndex(item => item.path === location.pathname);
      if (index === -1) return;

      let nextIndex = index;

      if (e.key === 'ArrowDown') {
        nextIndex = (index + 1) % navItems.length;
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        nextIndex = (index - 1 + navItems.length) % navItems.length;
        e.preventDefault();
      } else if (e.key === 'Enter') {
        navRefs.current[index]?.click();
        e.preventDefault();
      }

      navRefs.current[nextIndex]?.focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location.pathname]);

  return (
    <aside className="bg-[#1e3a8a] text-white w-auto h-screen py-4 pl-4 pr-8 space-y-4 shadow-md" role="navigation" aria-label="Primary">
      <nav className="flex flex-col space-y-2" role="listbox">
        {navItems.map(({ label, path }, i) => (
          <NavLink
            key={path}
            to={path+i} // dummy
            // ref={el => navRefs.current[i] = el}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md focus:outline-none focus-visible:ring-2 ring-offset-2 ring-green-500 transition-all duration-200 ease-in-out cursor-pointer
              ${isActive ? 'bg-[#3b82f6] text-white scale-[1.02]' : 'hover:bg-[#1e3a8a] hover:text-white'}`
            }
            role="option"
            aria-selected={location.pathname === path}
            tabIndex={0}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
