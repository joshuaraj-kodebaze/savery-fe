// Import libraries
import {
  styled,
  TextField,
  type TextFieldProps,
} from '@mui/material';

export const SearchFieldInput = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    width: 298,
    height: 32,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 24,
    '& .MuiOutlinedInput-root': {
      '& .MuiInputAdornment-root': {
        marginRight: 4,
      },
      '& fieldset': {
        borderColor: theme.palette.divider,
        borderRadius: 24,
      },
      '& input': {
        padding: '7px 16px 7px 0',
        fontSize: 12,
        '&::placeholder': {
          color: theme.palette.text.secondary,
        },
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  })
);
