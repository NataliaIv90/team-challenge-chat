import { createBrowserRouter } from 'react-router-dom';
import { App, Page404, Onboarding } from '@/pages';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    errorElement: <Page404 />,
    children: [
      {
        element: <Onboarding />,
        path: '/welcome/',
      },
    ],
  },
]);
