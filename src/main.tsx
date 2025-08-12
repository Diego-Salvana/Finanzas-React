import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalProviders } from './contexts/GlobalProviders.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProviders>
      <App />
    </GlobalProviders>
  </StrictMode>
);
