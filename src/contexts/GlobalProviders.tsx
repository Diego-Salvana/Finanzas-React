import { PrimeReactProvider } from 'primereact/api';
import { ThemeContextProvider } from './ThemeContextProvider';
import { BrowserRouter } from 'react-router-dom';
import type { PropsWithChildren } from 'react';

export function GlobalProviders({ children }: PropsWithChildren) {
  return (
    <>
      <PrimeReactProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </ThemeContextProvider>
      </PrimeReactProvider>
    </>
  );
}
