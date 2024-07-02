// Import libraries
import { styled } from '@mui/material';

export const LayoutContainer = styled('div')(({ theme }) => ({
  height: 'calc(100vh - 110px)',

  marginTop: 50,
  marginLeft: 200,

  padding: '30px 25px 30px 45px',

  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
}));
