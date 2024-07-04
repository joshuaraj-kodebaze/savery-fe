// Import libraries
import { styled, Button, type ButtonProps } from '@mui/material';

export const StyledButton = styled(Button)<ButtonProps>(() => ({
  minWidth: 89,
  height: 32,
  borderRadius: 24,
  textTransform: 'capitalize',
  fontSize: 12,
  boxShadow: 'none !important',
  lineHeight: 'inherit !important',
}));
