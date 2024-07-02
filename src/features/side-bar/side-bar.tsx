// Import components
import { SideBarContainer } from './side-bar.styles';

const SideBar = () => {
  return (
    <SideBarContainer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        // '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    ></SideBarContainer>
  );
};

export default SideBar;
