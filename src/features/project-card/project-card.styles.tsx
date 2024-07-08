// Import libraries
import {
  styled,
  Typography,
  type BoxProps,
  type TypographyProps,
} from '@mui/material';

// Import utils
import { COLORS } from 'utils/colors';

export const Card = styled('div')<BoxProps>(({ theme }) => ({
  width: 182,
  height: 208,
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 24,
  cursor: 'pointer'
}));

export const Title = styled(Typography)<TypographyProps>(() => ({
  fontSize: '14px',
  fontWeight: 600,
}));

export const MembersCount = styled(Typography)<TypographyProps>(
  () => ({
    fontSize: '12px',
    color: COLORS.mildGrey,
  })
);
