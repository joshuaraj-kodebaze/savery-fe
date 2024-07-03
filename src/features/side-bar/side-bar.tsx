// Import libraries
import { Box, Divider } from '@mui/material';
import { faArrowUpRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import components
import {
  SideBarContainer,
  SectionTitle,
  NavLink,
} from './side-bar.styles';

// Import utils
import {
  SIDEBAR_NAV_ITEMS,
  SIDEBAR_SECTIONS,
} from './side-bar.utils';

const SideBar = () => {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <SideBarContainer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
      open
    >
      <Box
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 'calc(100vh - 80px)',
        }}
      >
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {Object.entries(SIDEBAR_NAV_ITEMS).map(
            ([key, value], idx) => {
              if (key === SIDEBAR_SECTIONS.EXTERNAL) return;

              if (key === SIDEBAR_SECTIONS.MAIN) {
                return value.map((item, i) => (
                  <NavLink
                    key={`nav-item-${key}-${i}`}
                    href={item.path}
                    underline="none"
                    disabled={item.isDisabled}
                    isactivelink={
                      activeLink.includes(item.path) ? 1 : 0
                    }
                  >
                    {item.title}
                  </NavLink>
                ));
              }

              return (
                <Box
                  key={`nav-section-${idx}`}
                  component={'div'}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Divider />
                  <SectionTitle>{key}</SectionTitle>
                  {value.map((item, i) => (
                    <NavLink
                      key={`nav-item-${key}-${i}`}
                      href={item.path}
                      underline="none"
                      disabled={item.isDisabled}
                      isactivelink={
                        activeLink.includes(item.path) ? 1 : 0
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </Box>
              );
            }
          )}
        </Box>
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {Object.entries(SIDEBAR_NAV_ITEMS).map(([key, value]) => {
            if (key === SIDEBAR_SECTIONS.EXTERNAL) {
              return value.map((item, i) => (
                <NavLink
                  key={`nav-item-${key}-${i}`}
                  href={item.path}
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  disabled={item.isDisabled}
                  target="_blank"
                >
                  {item.title}
                  <FontAwesomeIcon
                    icon={faArrowUpRight}
                    style={{ fontSize: 10 }}
                  />
                </NavLink>
              ));
            }
          })}
        </Box>
      </Box>
    </SideBarContainer>
  );
};

export default SideBar;
