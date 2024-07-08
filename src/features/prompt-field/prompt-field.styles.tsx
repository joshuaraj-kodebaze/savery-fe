// Import libraries
import {
  styled,
  Input,
  type InputProps,
  type BoxProps,
} from '@mui/material';

export const PromptInputContainer = styled('div')<BoxProps>(
  ({ theme }) => ({
    minWidth: 200,
    height: 48,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 24,
    border: `1px solid ${theme.palette.divider}`,
    padding: '8px 8px 8px 16px',
    display: 'flex',
    gap: 12,
    justifyContent: 'space-between',
  })
);

export const PromptInputField = styled(Input)<InputProps>(
  ({ theme }) => ({
    width: 'calc(100% - 110px)',
    height: 32,
    padding: 0,
    border: 'none',
    backgroundColor: theme.palette.common.white,
    fontSize: 14,
    borderRadius: 24,
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  })
);
