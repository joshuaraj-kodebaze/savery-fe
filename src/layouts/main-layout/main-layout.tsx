// Import libraries
import { Outlet } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

// Import hooks
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

// Import features
import TopBar from 'features/top-bar/top-bar';
import SideBar from 'features/side-bar/side-bar';

// Import components
import { LayoutContainer } from './main-layout.styles';

// Import redux
import { toggleSideBar } from 'store/user/userSlice';

const MainLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();

  const { isSidebarOpen } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (isMobile) {
      dispatch(toggleSideBar());
    }
  }, [isMobile, dispatch]);

  const handleClick = () => dispatch(toggleSideBar());

  return (
    <>
      <TopBar isOpen={isSidebarOpen} onClick={handleClick} />
      <SideBar
        isOpen={isSidebarOpen}
        handleClose={() => isMobile && handleClick()}
      />
      <LayoutContainer isOpen={isSidebarOpen}>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default MainLayout;
