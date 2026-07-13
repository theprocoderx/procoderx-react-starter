import { Header, Footer } from '@/components/layout';
import { Outlet } from 'react-router-dom';
// import { Button, Overlay, Portal } from '@/components/ui';
export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
