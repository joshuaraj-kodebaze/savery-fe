// Import libraries
import { styled } from '@mui/material';

export const LayoutContainer = styled('div')(({ theme }) => ({
  height: 'calc(100vh - 50px)',
  marginTop: 50,
  marginLeft: 208,
  padding: '24px 24px 24px 40px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
}));
