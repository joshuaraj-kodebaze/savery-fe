// Import libraries
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Import features
import TopBar from 'features/top-bar/top-bar';
import SideBar from 'features/side-bar/side-bar';

// Import components
import { LayoutContainer } from './main-layout.styles';

const MainLayout = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (matches) return setIsSidebarOpen(false);
    else setIsSidebarOpen(true);
  }, [matches]);

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
