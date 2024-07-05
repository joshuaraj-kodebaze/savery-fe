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

export interface TProjectCard {
  name: string;
  membersCount: number;
}

const ProjectCard = ({ name, membersCount }: TProjectCard) => {
  return (
    <Card>
      <img src={ProjectIcon} style={{ width: 40 }} />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
      >
        <Title>{name}</Title>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <MembersCount>{membersCount} member</MembersCount>
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
