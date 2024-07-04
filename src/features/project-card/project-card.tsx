// Import libraries
import { Box } from '@mui/material';
import { faEllipsis } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import assets
import ProjectIcon from 'assets/icons/project-icon.svg';

// Import components
import { Card, Title, MembersCount } from './project-card.styles';

// Import utils
import { COLORS } from 'utils/colors';

const ProjectCard = () => {
  return (
    <Card>
      <img src={ProjectIcon} style={{ width: 40 }} />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
      >
        <Title>Project X</Title>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <MembersCount>1 member</MembersCount>
          <FontAwesomeIcon
            icon={faEllipsis}
            style={{
              color: COLORS.mildGrey,
              fontSize: 18,
              cursor: 'pointer',
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectCard;
