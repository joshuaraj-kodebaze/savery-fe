// Import libraries
import {
  styled,
  Typography,
  type TypographyProps,
} from '@mui/material';

export const TextContainer = styled('div')(({ theme }) => ({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  padding: '16px 12px',
  borderRadius: '0px 8px 8px 8px',
  fontSize: '12px',
  fontWeight: 400,
  color: theme.palette.text.primary,
  wordBreak: 'break-word',
}));

export const Username = styled(Typography)<TypographyProps>(() => ({
  fontSize: '10px',
  fontWeight: 400,
  alignItems: 'center',
  display: 'flex',
}));
