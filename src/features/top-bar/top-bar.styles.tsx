// Import libraries
import { styled } from '@mui/material';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import {
  Avatar,
  Box,
  type AvatarProps,
  type BoxProps,
} from '@mui/material';

export const HeaderContainer = styled(AppBar)<AppBarProps>(() => ({
  height: 50,

  borderBottom: '1px solid #ebebeb',
  boxShadow: 'none',

  display: 'flex',
  flexDirection: 'row',

  color: 'black',
  zIndex: 99999,
}));

export const UserContainer = styled(Box)<BoxProps>(() => ({
  width: 'calc(230px - 50px)',
  borderRight: '1px solid #ebebeb',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 25px',
  backgroundColor: '#f6f6f6',
}));

export const ToolBarContainer = styled(Box)<BoxProps>(() => ({
  width: 'calc(100% - 280px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: ' center',
  padding: '0 25px',
  backgroundColor: '#fff',
}));

export const UserAvatar = styled(Avatar)<AvatarProps>(() => ({
  backgroundColor: '#ddd',
  color: '#000',
  width: 24,
  height: 24,
  fontSize: 14,
  fontWeight: 700,
}));
