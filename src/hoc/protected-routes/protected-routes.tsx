// Import libraries
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Import hooks
import { useAppSelector } from 'hooks/useAppSelector';

// Import utils
// import { ROUTES } from 'utils/constants';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { userToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // if (!userToken) {
    //   return navigate(ROUTES.user.LOGIN);
    // }
  }, [userToken, navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
