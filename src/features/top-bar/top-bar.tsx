// Import libraries
import { Box, useTheme, useMediaQuery } from '@mui/material';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';

// Import assets
import ProjectIcon from 'assets/icons/project-icon.svg';

// Import components
import {
  HeaderContainer,
  UserContainer,
  ToolBarContainer,
  UserAvatar,
} from './top-bar.styles';
import Logo from 'components/logo/logo';

// Import utils
import { PROJECTS } from 'utils/constants';

const UserProps = {
  name: 'Neal Drasback',
};

const TopBar = () => {
  const { projectId } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const projectDetails = useMemo(() => {
    if (!projectId) return;

    return PROJECTS.find((val) => val.id === parseInt(projectId));
  }, [projectId]);

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
          {matches ? (
            <Typography
              sx={{
                fontSize: 14,
              }}
            >
              {UserProps.name}
            </Typography>
          ) : null}
        </Box>
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{
            color: theme.palette.text.primary,
            cursor: 'pointer',
          }}
        />
      </UserContainer>
      <ToolBarContainer>
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <Box
            component={'div'}
            sx={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              style={{
                color: theme.palette.text.disabled,
              }}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{
                color: theme.palette.text.disabled,
              }}
            />
          </Box>
          {projectDetails ? (
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
              }}
            >
              <img
                src={ProjectIcon}
                style={{ width: 20 }}
                alt="Project Icon"
              />
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {projectDetails.name}
              </Typography>
            </Box>
          ) : null}
        </Box>
        <Logo />
      </ToolBarContainer>
    </HeaderContainer>
  );
};

export default TopBar;
