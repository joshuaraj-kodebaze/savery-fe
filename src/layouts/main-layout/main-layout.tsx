// Import libraries
import { Outlet } from 'react-router-dom';

// Import features
import TopBar from 'features/top-bar/TopBar';

// Import components
import { LayoutContainer } from './main-layout.styles';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default MainLayout;
