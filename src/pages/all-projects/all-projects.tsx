// Import libraries
import {
  Typography,
  Box,
  useTheme,
  DialogContent,
} from '@mui/material';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

// Import assets
import ProjectIcon from 'assets/icons/project-icon.svg';

// Import components
import SearchField from 'components/search-field/search-field';
import Button from 'components/button/button';
import Dialog from 'components/dialog/dialog';
import TextInput from 'components/text-input/text-input';
import ProjectCard from 'features/project-card/project-card';

// Import styled components
import {
  AddProjectButton,
  SectionToolBar,
} from './all-projects.styles';

const AllProjects = () => {
  const theme = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen((prevState) => !prevState);
  };

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
            onClick={toggleDialog}
          >
            New Project
          </Button>
        </Box>
      </SectionToolBar>
      <Box
        component={'div'}
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
      >
        <ProjectCard />
        <AddProjectButton onClick={toggleDialog}>
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
      <Dialog open={isDialogOpen} onClose={toggleDialog}>
        <DialogContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'center',
            padding: 0,
          }}
        >
          <img src={ProjectIcon} style={{ width: 40 }} />
          <Typography>Name your new project</Typography>
          <Box sx={{ width: '100%' }}>
            <TextInput
              label={'Name'}
              placeholder="Enter name"
              autoFocus
            />
          </Box>
          <Button variant="contained">Save</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AllProjects;
