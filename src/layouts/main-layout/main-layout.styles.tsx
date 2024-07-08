// Import libraries
import { styled, type BoxProps } from '@mui/material';

type LayoutContainerProps = {
  isOpen: boolean;
} & BoxProps;

export const LayoutContainer = styled('div')<LayoutContainerProps>(
  ({ theme, isOpen }) => ({
    height: 'calc(100vh - 50px)',
    marginTop: 50,
    marginLeft: isOpen ? 208 : 0,
    padding: '24px 24px 24px 40px',
    transition: 'all 200ms',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      padding: '16px',
    },
  })
);
