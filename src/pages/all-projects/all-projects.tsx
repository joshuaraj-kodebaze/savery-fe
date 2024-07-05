// Import libraries
import {
  Typography,
  Box,
  useTheme,
  DialogContent,
} from '@mui/material';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useMemo } from 'react';

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

import { TProjectCard } from 'features/project-card/project-card';

const INITIAL_STATE = [
  {
    name: 'Project A',
    membersCount: 1,
  },
  {
    name: 'Project B',
    membersCount: 2,
  },
  {
    name: 'Project C',
    membersCount: 3,
  },
];

const AllProjects = () => {
  const theme = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projectName, setProjectName] = useState<string>('');
  const [projectList, setProjectList] =
    useState<TProjectCard[]>(INITIAL_STATE);
  const [searchText, setSearchText] = useState<string>('');

  const projects = useMemo(() => {
    if (!searchText) return projectList;

    return projectList.filter((project) =>
      project.name
        .toLocaleLowerCase()
        .startsWith(searchText.toLocaleLowerCase())
    );
  }, [projectList, searchText]);

  const toggleDialog = () => {
    setIsDialogOpen((prevState) => !prevState);
  };

  const handleCreateProject = () => {
    const newProject = {
      name: projectName,
      membersCount: 0,
    };
    setProjectList((prevState) => [...prevState, newProject]);
    setProjectName('');
    toggleDialog();
  };

  return (
    <Box component={'section'}>
      <SectionToolBar component={'div'}>
        <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
          All Projects
        </Typography>
        <Box component={'div'} sx={{ display: 'flex', gap: '12px' }}>
          <SearchField
            value={searchText}
            placeholder="Search project"
            onChange={(e) => setSearchText(e.target.value)}
            onClose={() => setSearchText('')}
          />
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
        {projects?.map((project, idx) => (
          <ProjectCard
            key={`project-card-${idx}`}
            name={project.name}
            membersCount={project.membersCount}
          />
        ))}
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
              value={projectName}
              label={'Name'}
              placeholder="Enter name"
              autoFocus
              onChange={(e) => setProjectName(e.target.value)}
            />
          </Box>
          <Button variant="contained" onClick={handleCreateProject}>
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AllProjects;
