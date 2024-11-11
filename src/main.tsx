import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import { App } from './pages';
import './styles/normalize.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { router } from './routes/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
