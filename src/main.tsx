import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './pages';
import './styles/normalize.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
