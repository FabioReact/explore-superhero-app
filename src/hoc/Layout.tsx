import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

// HOC - High Order Component - Composant d'ordre superieur
// Un composant prenant en parametre un autre composant
const Layout = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
