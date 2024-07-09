// Import libraries
import { styled, Drawer, type DrawerProps } from '@mui/material';

export const TaskbarContainer = styled(Drawer)<DrawerProps>(
  ({ theme }) => ({
    '& .MuiPaper-root': {
      width: 295,
      height: '100vh',
      borderLeft: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.default,
      paddingTop: 50,
      paddingBottom: 24,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  })
);
