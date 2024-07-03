// Import libraries
import { Typography, Box, useTheme } from '@mui/material';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import components
import SearchField from 'components/search-field/search-field';
import Button from 'components/button/button';
import { AddProjectButton, SectionToolBar } from './projects.styles';

const Projects = () => {
  const theme = useTheme();

  return (
    <Box component={'section'}>
      <SectionToolBar component={'div'}>
        <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
          All Projects
        </Typography>
        <Box component={'div'} sx={{ display: 'flex', gap: '12px' }}>
          <SearchField placeholder="Search project" />
          <Button
            variant="contained"
            startIcon={
              <FontAwesomeIcon
                icon={faPlus}
                style={{ fontSize: 12 }}
              />
            }
          >
            New Project
          </Button>
        </Box>
      </SectionToolBar>
      <Box
        component={'div'}
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
      >
        <AddProjectButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '24px',
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                fontSize: 12,
                color: theme.palette.common.white,
              }}
            />
          </Box>
        </AddProjectButton>
      </Box>
    </Box>
  );
};

export default Projects;
