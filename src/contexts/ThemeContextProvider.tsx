import { PrimeReactContext } from 'primereact/api';
import { useContext, useEffect, useState, type ReactNode } from 'react';
import { DarkThemeContext } from './dark-theme-context';

interface Props {
  children: ReactNode;
}

// Componente que provee el contexto y contiene el estado del tema.
export function ThemeContextProvider({ children }: Props) {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const { changeTheme } = useContext(PrimeReactContext);
  const darkTheme = 'lara-dark-teal';
  const lightTheme = 'lara-light-teal';
  const themeLink = 'theme-link';

  useEffect(() => {
    if (!changeTheme) return;

    if (isDark) {
      changeTheme(lightTheme, darkTheme, themeLink, () => {
        localStorage.setItem('theme', 'dark');
        console.log('Cambiando tema a oscuro');
      });
    } else {
      changeTheme(darkTheme, lightTheme, themeLink, () => {
        localStorage.setItem('theme', 'light');
        console.log('Cambiando tema a claro');
      });
    }
  }, [changeTheme, isDark]);

  return <DarkThemeContext value={{ isDark: isDark, setIsDark }}>{children}</DarkThemeContext>;
}
