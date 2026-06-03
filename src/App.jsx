import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from './contexts/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
