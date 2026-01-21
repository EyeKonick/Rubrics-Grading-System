import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import CreateProject from './pages/CreateProject';
import Analytics from './pages/Analytics';
import NotFound from './pages/NotFound';
import { ROUTES } from './constants/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTES.CREATE_PROJECT,
        element: <CreateProject />,
      },
      {
        path: '/analytics',
        element: <Analytics />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);