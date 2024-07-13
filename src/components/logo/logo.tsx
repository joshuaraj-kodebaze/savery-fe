// Import libraries
import { Link } from 'react-router-dom';

// Import assets
import SaveryLogo from 'assets/images/savery-logo.png';

// Import utils
import { ROUTES } from 'utils/constants';

// Import hooks
import { useAppSelector } from 'hooks/useAppSelector';

const Logo = () => {
  const { userToken } = useAppSelector((state) => state.auth);
  return (
    <Link to={userToken ? ROUTES.projects.ALL_PROJECTS : '#'}>
      <div style={{ display: 'flex' }}>
        <img src={SaveryLogo} style={{ width: 100 }} />
      </div>
    </Link>
  );
};

export default Logo;
