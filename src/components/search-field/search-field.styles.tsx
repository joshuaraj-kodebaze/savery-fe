// Import libraries
import {
  styled,
  TextField,
  type TextFieldProps,
} from '@mui/material';

export const SearchFieldInput = styled(TextField)<TextFieldProps>(
  ({ theme, value }) => ({
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
        padding: value ? '7px 7px 7px 0' : '7px 16px 7px 0',
        fontSize: 12,
        '&::placeholder': {
          color: theme.palette.text.secondary,
        },
      },
      '&.Mui-focused fieldset': {
        border: `1px solid #A3A3A3`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 120px)',
    },
  })
);
