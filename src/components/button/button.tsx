// Import libraries
import { type ButtonProps } from '@mui/material';

// Import components
import { StyledButton } from './button.styles';

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
