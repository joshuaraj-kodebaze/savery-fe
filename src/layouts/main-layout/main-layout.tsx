// Import libraries
import { Outlet, useLocation } from 'react-router-dom';
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

// Import utils
import { ROUTES } from 'utils/constants';

const MainLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { isSidebarOpen } = useAppSelector((state) => state.user);

  // useEffect(() => {
  //   if (isMobile) {
  //     dispatch(toggleSideBar());
  //   }
  // }, []);

  useEffect(() => {
    if (
      !isMobile &&
      isSidebarOpen &&
      location.pathname.includes(ROUTES.projects.PROJECT)
    ) {
      dispatch(toggleSideBar());
    }
    if (
      !isMobile &&
      !isSidebarOpen &&
      !location.pathname.includes(ROUTES.projects.PROJECT)
    ) {
      dispatch(toggleSideBar());
    }
  }, [location, dispatch]);

  const handleClick = () => dispatch(toggleSideBar());

  console.log('isSidebarOpen ->', isSidebarOpen);

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
