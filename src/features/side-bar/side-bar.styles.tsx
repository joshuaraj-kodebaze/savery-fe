// Import libraries
import { styled } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer';

export const SideBarContainer = styled(Drawer)<DrawerProps>(() => ({
  '& .MuiPaper-root': {
    width: 230,
    height: '100vh',
    borderRight: '1px solid #ebebeb',
    backgroundColor: '#f6f6f6',
    paddingTop: '80px',
  },
}));
