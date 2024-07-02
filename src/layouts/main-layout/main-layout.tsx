// Import libraries
import { Outlet } from 'react-router-dom';

// Import features
import TopBar from 'features/top-bar/top-bar';
import SideBar from 'features/side-bar/side-bar';

// Import components
import { LayoutContainer } from './main-layout.styles';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <SideBar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default MainLayout;
