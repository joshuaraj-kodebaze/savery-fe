// Import libraries
import { Box, Link, Divider, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

// Import components
import { SideBarContainer } from './side-bar.styles';

// Import utils
import {
  SIDEBAR_NAV_ITEMS,
  SIDEBAR_SECTIONS,
} from './side-bar.utils';

const SideBar = () => {
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
          {Object.entries(SIDEBAR_NAV_ITEMS).map(([key, value]) => {
            if (key === SIDEBAR_SECTIONS.EXTERNAL) return;

            if (key === SIDEBAR_SECTIONS.MAIN) {
              return value.map((item, i) => (
                <Link
                  key={`side-bar-nav-item-${i}`}
                  href={item.path}
                  sx={{
                    padding: '0px 25px',
                    marginBottom: '20px',
                    color: 'black',
                  }}
                  underline="none"
                >
                  {item.title}
                </Link>
              ));
            }

            return (
              <>
                <Divider />
                <Typography
                  sx={{
                    textTransform: 'capitalize',
                    padding: '0 15px',
                    fontSize: '12px',
                    fontWeight: 700,
                    margin: '15px 0 25px',
                  }}
                >
                  {key}
                </Typography>
                {value.map((item, i) => (
                  <Link
                    key={`side-bar-nav-item-${i}`}
                    href={item.path}
                    sx={{
                      padding: '0px 25px',
                      marginBottom: '20px',
                      color: 'black',
                    }}
                    underline="none"
                  >
                    {item.title}
                  </Link>
                ))}
              </>
            );
          })}
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
                <Link
                  key={`side-bar-nav-item-${i}`}
                  href={item.path}
                  sx={{
                    padding: '0px 25px',
                    marginBottom: '20px',
                    color: 'black',
                  }}
                  underline="none"
                >
                  {item.title}
                </Link>
              ));
            }
          })}
        </Box>
      </Box>
    </SideBarContainer>
  );
};

export default SideBar;
