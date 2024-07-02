// Import libraries
import { Outlet } from 'react-router-dom';

// Import features
import TopBar from 'features/top-bar/TopBar';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <div style={{ marginTop: 50, marginLeft: 200 }}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
