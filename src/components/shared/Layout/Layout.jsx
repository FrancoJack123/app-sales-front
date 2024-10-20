import FlexContainer from '@/components/common/FlexContainer';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <FlexContainer column style={{ minHeight: '100vh' }}>
      <Navbar />
      <section id="layoutSidenav_content">
        <div className="container px-4 px-lg-5 my-3">
          <Outlet />
        </div>
      </section>
      <Footer />
    </FlexContainer>
  );
};
export default Layout;
