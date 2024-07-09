// Import libraries
import { styled, type BoxProps } from '@mui/material';

export const SectionContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 1000,
  margin: '0 auto',
  height: 'calc(100vh - 74px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const ChatContainer = styled('div')<BoxProps>(() => ({
  height: 'calc(100% - 75px)',
  overflow: 'auto',
  paddingBottom: '24px',
}));
