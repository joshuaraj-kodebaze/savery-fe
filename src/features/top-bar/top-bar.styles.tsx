// Import libraries
import { styled } from '@mui/material';
import AppBar, { AppBarProps } from '@mui/material/AppBar';

export const HeaderContainer = styled(AppBar)<AppBarProps>(
  ({ theme }) => ({
    height: 50,

    backgroundColor: 'transparent',
    borderBottom: '1px solid #ebebeb',
    boxShadow: 'none',

    display: 'flex',
    flexDirection: 'row',

    color: 'black',
  })
);
