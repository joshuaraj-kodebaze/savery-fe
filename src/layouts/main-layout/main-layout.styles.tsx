// Import libraries
import { styled } from '@mui/material';

export const LayoutContainer = styled('div')(({ theme }) => ({
  marginTop: 50,
  marginLeft: 200,
  [theme.breakpoints.down('sm')]: {
    marginTop: 100,
    marginLeft: 0,
  },
}));
