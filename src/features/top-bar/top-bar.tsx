// Import libraries
import { Box } from '@mui/material';
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
  return (
    <HeaderContainer>
      <UserContainer>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <UserAvatar>{UserProps.name.charAt(0)}</UserAvatar>
          <Typography
            sx={{
              fontSize: 14,
              marginTop: '1px',
            }}
          >
            {UserProps.name}
          </Typography>
        </Box>
        <FontAwesomeIcon icon={faAngleDown} />
      </UserContainer>
      <ToolBarContainer>
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ color: '#ddd' }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: '#ddd' }}
          />
        </Box>
        <Logo />
      </ToolBarContainer>
    </HeaderContainer>
  );
};

export default TopBar;
