// Import libraries
import { styled } from '@mui/material';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import {
  Avatar,
  Box,
  type AvatarProps,
  type BoxProps,
} from '@mui/material';

export const HeaderContainer = styled(AppBar)<AppBarProps>(
  ({ theme }) => ({
    height: 50,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    zIndex: 99999,
  })
);

export const UserContainer = styled(Box)<BoxProps>(({ theme }) => ({
  width: 208,
  borderRight: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 24px',
  backgroundColor: theme.palette.background.default,
}));

export const ToolBarContainer = styled(Box)<BoxProps>(
  ({ theme }) => ({
    width: 'calc(100% - 208px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: ' center',
    padding: '14px 24px',
    backgroundColor: theme.palette.background.paper,
  })
);

export const UserAvatar = styled(Avatar)<AvatarProps>(
  ({ theme }) => ({
    backgroundColor: theme.palette.divider,
    color: '#000',
    width: 24,
    height: 24,
    fontSize: 12,
    fontWeight: 700,
  })
);
