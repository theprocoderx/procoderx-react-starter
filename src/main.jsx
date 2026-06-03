import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoutes';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/theme/ThemeProvider';
import './index.css';
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
