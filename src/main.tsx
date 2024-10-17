import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './pages';
import './styles/normalize.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
