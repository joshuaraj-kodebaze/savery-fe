// Import libraries
import { Link } from '@mui/material';

// Import assets
import SaveryLogo from 'assets/images/savery-logo.png';

// Import utils
import { ROUTES } from 'utils/constants';

const Logo = () => {
  return (
    <Link href={ROUTES.projects.ALL_PROJECTS}>
      <div style={{ display: 'flex' }}>
        <img src={SaveryLogo} style={{ width: 100 }} />
      </div>
    </Link>
  );
};

export default Logo;
