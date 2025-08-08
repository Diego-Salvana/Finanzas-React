import { createContext, type Dispatch, type SetStateAction } from 'react';

interface ThemeContextType {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

// Creación de contexto con valores por defecto.
export const DarkThemeContext = createContext<ThemeContextType>({ isDark: false, setIsDark: () => {} });
