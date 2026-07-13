import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/pages';
import { MainLayout } from '@/layouts';
// import { Playground } from '@/pages';
import Playground from '@/pages/Playground';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/playground',
        element: <Playground />,
      },
    ],
  },
]);
