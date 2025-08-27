import './Navbar.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeButton } from '../ThemeButton/ThemeButton';

export function Navbar() {
  const navBar = useRef<HTMLElement>(null);
  const navMenu = useRef<HTMLDivElement>(null);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const hideIconClass = 'hide-icon';
  const hideNavMenuClass = 'hide-nav-menu';
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      const htmlTop = document.documentElement.scrollTop;
      const navbar = navBar.current;

      if (htmlTop > 20) {
        navbar?.classList.add('reduce-height');
      } else {
        navbar?.classList.remove('reduce-height');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!navMenu.current) return;

      if (event.target !== navMenu.current && !navMenu.current.contains(event.target as Node)) {
        changeVisibility(event);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  /** Cambia la visibilidad del menú según en el elemento target del click. */
  function changeVisibility(event: Event) {
    const eventElement: HTMLElement = event.target as HTMLElement;

    if (eventElement.classList.contains('pi-bars')) {
      setMenuVisibility(true);
    } else {
      setMenuVisibility(false);
    }
  }

  function navigateTo(path: string) {
    setMenuVisibility(false);

    if (!location.pathname.includes(path)) {
      navigate(path);
    }
  }

  return (
    <>
      <nav
        ref={navBar}
        className="px-4 lg:px-6 xl:px-8 shadow-2 flex justify-content-between fixed top-0 w-full z-5"
      >
        <div className="min-w-max flex align-items-center text-xl lg:text-2xl font-semibold">
          <span className="landing-name">Dólar Y Más</span>
        </div>

        <span className="cursor-pointer block lg:hidden align-self-center text-700 relative w-2rem h-2rem">
          <i className={'pi pi-bars text-4xl absolute' + ` ${menuVisibility ? hideIconClass : ''}`}></i>
          <i className={'pi pi-times text-4xl absolute' + ` ${menuVisibility ? '' : hideIconClass}`}></i>
        </span>

        <div
          ref={navMenu}
          className={
            'flex-grow-1 justify-content-end lg:flex absolute lg:static w-full left-0 top-100 z-1 shadow-2 lg:shadow-none nav-menu' +
            ` ${menuVisibility ? '' : hideNavMenuClass}`
          }
        >
          <ul className="list-none p-0 m-0 font-semibold lg:font-medium flex select-none flex-column lg:flex-row">
            <li>
              <a
                className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600          border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-teal-500 cursor-pointer transition-colors transition-duration-150"
                onClick={() => navigateTo('/home')}
              >
                <i className="pi pi-home mr-2"></i>
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a
                className="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-teal-500 cursor-pointer transition-colors transition-duration-150"
                onClick={() => navigateTo('/dashboard/panel')}
              >
                <i className="pi pi-table mr-2"></i>
                <span>Panel</span>
              </a>
            </li>
            <li>
              <div className="flex px-6 p-3 h-full lg:pl-3 lg:pr-0 lg:py-2 align-items-center text-600 text-base">
                <i className="pi pi-sun font-semibold lg:font-medium mr-1"></i>
                <ThemeButton />
                <i className="pi pi-moon font-medium lg:font-medium ml-1"></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
