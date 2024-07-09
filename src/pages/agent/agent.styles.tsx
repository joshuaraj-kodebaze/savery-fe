// Import libraries
import { styled, type BoxProps } from '@mui/material';

type SectionContainerProps = {
  taskBar: boolean;
} & BoxProps;

export const SectionContainer = styled('div')<SectionContainerProps>(
  ({ theme, taskBar }) => ({
    position: 'relative',
    width: !taskBar ? '1000px' : 'calc(100vw - 368px)',
    margin: !taskBar ? '0 auto' : 0,
    height: 'calc(100vh - 74px)',
    display: 'flex',
    transition: 'all 200ms',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '100%',
    },
  })
);

export const SectionInnerContainer = styled('div')<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 74px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  })
);

export const ChatContainer = styled('div')<SectionContainerProps>(
  ({ theme, taskBar }) => ({
    height: !taskBar ? 'calc(100% - 74px)' : 'calc(100% - 24px)',
    overflow: 'auto',
    paddingBottom: !taskBar ? '24px' : 0,
    [theme.breakpoints.down('md')]: {
      height: 'calc(100% - 58px)',
    },
  })
);
