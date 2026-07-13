import { Outlet } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout'; // Aapke folder structure ke hisab se sahi path check karlein

const App = () => {
  return (
    <MainLayout>
      {/* React Router ke saare child pages ab is Outlet ki jagah render honge.
        Aur kyunki ye MainLayout ke andar hai, toh saare pages par Header aur Footer automatic dikhega.
      */}
      <Outlet />
    </MainLayout>
  );
};

export default App;
