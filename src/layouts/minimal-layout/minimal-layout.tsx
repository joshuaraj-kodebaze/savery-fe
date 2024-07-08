// Import libraries
import { Outlet } from 'react-router-dom';

// Import features
import TopBar from 'features/top-bar/top-bar';

// Import components
import { LayoutContainer } from './minimal-layout.styles';

const MinimalLayout = () => {
  return (
    <>
      <TopBar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default MinimalLayout;
