// Import libraries
import { Box } from '@mui/material';
import { faEllipsis } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// Import assets
import ProjectIcon from 'assets/icons/project-icon.svg';

// Import components
import { Card, Title, MembersCount } from './project-card.styles';

// Import utils
import { COLORS } from 'utils/colors';
import { ROUTES } from 'utils/constants';

export interface TProjectCard {
  id?: number;
  name: string;
  membersCount: number;
}

const ProjectCard = ({ id, name, membersCount }: TProjectCard) => {
  return (
    <Link
      to={`${ROUTES.projects.PROJECT}/${id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card>
        <img
          src={ProjectIcon}
          style={{ width: 40 }}
          alt="Project Icon"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <Title>{name}</Title>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <MembersCount>{membersCount} member</MembersCount>
            <FontAwesomeIcon
              icon={faEllipsis}
              style={{
                color: COLORS.mildGrey,
                fontSize: 18,
                cursor: 'pointer',
                zIndex: 999,
                position: 'absolute',
                right: 0,
              }}
              onClick={() => console.log('More options...')}
            />
          </Box>
        </Box>
      </Card>
    </Link>
  );
};

export default ProjectCard;
