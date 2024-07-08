// Import libraries
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

// Import features
import TopBar from 'features/top-bar/top-bar';
import SideBar from 'features/side-bar/side-bar';

// Import components
import { LayoutContainer } from './main-layout.styles';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleClick = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <TopBar isOpen={isSidebarOpen} onClick={handleClick} />
      <SideBar isOpen={isSidebarOpen} />
      <LayoutContainer isOpen={isSidebarOpen}>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default MainLayout;
