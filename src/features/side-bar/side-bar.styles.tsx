// Import libraries
import { styled } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer';

export const SideBarContainer = styled(Drawer)<DrawerProps>(
  ({ theme }) => ({
    position: 'fixed',
    width: 200,
    height: 'calc(100vh - 50px)',
    borderRight: '1px solid #ebebeb',
  })
);
