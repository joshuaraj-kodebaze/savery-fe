// Import libraries
import { Box, useTheme } from '@mui/material';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';

// Import components
import {
  HeaderContainer,
  UserContainer,
  ToolBarContainer,
  UserAvatar,
} from './top-bar.styles';
import Logo from 'components/logo/logo';

const UserProps = {
  name: 'Neal Drasback',
};

const TopBar = () => {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <UserContainer>
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <UserAvatar>{UserProps.name.charAt(0)}</UserAvatar>
          <Typography
            sx={{
              fontSize: 14,
            }}
          >
            {UserProps.name}
          </Typography>
        </Box>
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: theme.palette.text.primary }}
        />
      </UserContainer>
      <ToolBarContainer>
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            gap: '24px',
          }}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ color: theme.palette.text.disabled }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: theme.palette.text.disabled }}
          />
        </Box>
        <Logo />
      </ToolBarContainer>
    </HeaderContainer>
  );
};

export default TopBar;
