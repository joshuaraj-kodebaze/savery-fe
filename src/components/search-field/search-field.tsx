// Import libraries
import {
  InputAdornment,
  type TextFieldProps,
  useTheme,
} from '@mui/material';
import {
  faSearch,
  faXmark,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import components
import { SearchFieldInput } from './search-field.styles';

const SearchField = (props: Omit<TextFieldProps, 'InputProps'>) => {
  const theme = useTheme();
  const { value } = props;

  return (
    <SearchFieldInput
      id="search-textfield"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                fontSize: 12,
                color: theme.palette.text.secondary,
              }}
            />
          </InputAdornment>
        ),
        endAdornment: value ? (
          <InputAdornment position="end">
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                fontSize: 12,
                color: theme.palette.text.secondary,
              }}
            />
          </InputAdornment>
        ) : (
          <></>
        ),
      }}
      {...props}
    />
  );
};

export default SearchField;
