// Import libraries
import { Box, useTheme, useMediaQuery } from '@mui/material';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/pro-regular-svg-icons';
import { Typography } from '@mui/material';
import {
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useMemo, useEffect, useState } from 'react';

// Import assets
import ProjectIcon from 'assets/icons/project-icon.svg';

// Import components
import {
  HeaderContainer,
  UserContainer,
  ToolBarContainer,
  UserAvatar,
  ToolBarInnerContainer,
  SimpleContainer,
} from './top-bar.styles';
import Logo from 'components/logo/logo';
import IconButton from 'components/icon-button/icon-button';

// Import hooks
import { useAppSelector } from 'hooks/useAppSelector';

// Import utils
import { PROJECTS, ROUTES } from 'utils/constants';

const UserProps = {
  name: 'Neal Drasback',
};

type TopBarProps = {
  isOpen?: boolean;
  onClick?: () => void;
};

const TopBar = ({ isOpen = false, onClick }: TopBarProps) => {
  const { projectId } = useParams();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const navigate = useNavigate();
  const { userToken } = useAppSelector((state) => state.auth);

  const [isNavigateBack, setIsNavigateBack] =
    useState<boolean>(false);
  const [isNavigateForward, setIsNavigateForward] =
    useState<boolean>(false);

  useEffect(() => {
    if (location.pathname !== ROUTES.projects.ALL_PROJECTS) {
      setIsNavigateBack(true);
    } else {
      setIsNavigateBack(false);
    }
  }, [location]);

  const projectDetails = useMemo(() => {
    if (!projectId) return;

    return PROJECTS.find((val) => val.id === parseInt(projectId));
  }, [projectId]);

  const locationAuthPath = () => {
    //will be removed
    if (location.pathname === ROUTES.user.SAML) {
      return true;
    } else if (location.pathname === ROUTES.user.LOGIN) {
      return true;
    } else if (location.pathname === ROUTES.user.POLICY) {
      return true;
    } else if (location.pathname === ROUTES.user.TERMS) {
      return true;
    }

    return false;
  };

  return (
    <HeaderContainer>
      {!locationAuthPath() ? (
        <>
          <UserContainer>
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <UserAvatar>{UserProps.name.charAt(0)}</UserAvatar>
              {isDesktop ? (
                <Typography
                  sx={{
                    fontSize: 14,
                  }}
                >
                  {UserProps.name}
                </Typography>
              ) : null}
            </Box>
            <IconButton
              icontype="icon"
              icon={isOpen ? faAngleUp : faAngleDown}
              onClick={onClick}
            />
          </UserContainer>
          <ToolBarContainer>
            <ToolBarInnerContainer>
              <Box
                component={'div'}
                sx={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                }}
              >
                <IconButton
                  icontype="icon"
                  icon={faAngleLeft}
                  disabled={!isNavigateBack}
                  onClick={() => navigate(-1)}
                />
                <IconButton
                  icontype="icon"
                  icon={faAngleRight}
                  disabled={!isNavigateForward}
                  onClick={() => navigate(1)}
                />
              </Box>
              {isDesktop && projectDetails ? (
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
            </ToolBarInnerContainer>
            {isMobile ? (
              projectDetails ? (
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
              ) : (
                <Logo />
              )
            ) : (
              <Logo />
            )}
          </ToolBarContainer>
        </>
      ) : (
        <SimpleContainer>
          {location.pathname === ROUTES.user.SAML ? (
            <Box
              sx={{
                width: '70px',
              }}
            >
              <IconButton
                icontype="icon"
                icon={faAngleLeft}
                disabled={!isNavigateBack}
                onClick={() => navigate(-1)}
              />
            </Box>
          ) : (
            <Box
              sx={{
                width: '70px',
              }}
            ></Box>
          )}

          <Logo />
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: theme.palette.primary.main,
            }}
          >
            Sign in
          </Typography>
        </SimpleContainer>
      )}
    </HeaderContainer>
  );
};

export default TopBar;
