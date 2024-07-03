// Import libraries
import { styled } from '@mui/material';

export const LayoutContainer = styled('div')(({ theme }) => ({
  height: 'calc(100vh - 50px)',
  marginTop: 50,
  marginLeft: 208,
  padding: '24px 24px 24px 40px',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    padding: '24px 24px 24px 25px', //eddie - may remove, reducing left padding for mobile
  },
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));
