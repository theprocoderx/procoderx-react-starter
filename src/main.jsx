import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoutes';
import { ThemeProvider } from '@/contexts/Theme'; // Yahan sahi hai

import '@/styles/index.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
