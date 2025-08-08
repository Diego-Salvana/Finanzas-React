import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { PrimeReactProvider } from 'primereact/api';
import { ThemeContextProvider } from './contexts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </PrimeReactProvider>
  </StrictMode>
);
