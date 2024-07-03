// import './App.css'
import { Routes, Route } from 'react-router-dom';

// Import layouts
import MainLayout from 'layouts/main-layout/main-layout';

// Import pages
import Projects from 'pages/projects/projects';
import Login from 'pages/auth/Login';
import Saml from 'pages/auth/Saml';
import Policy from 'pages/auth/Policy';
import Terms from 'pages/auth/Terms';

// Import utils
import { ROUTES } from 'utils/constants';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Projects />} />
      </Route>
      <Route index path={ROUTES.user.LOGIN} element={<Login />} />
      <Route index path={ROUTES.user.SAML} element={<Saml />} />
      <Route index path={ROUTES.user.POLICY} element={<Policy />} />
      <Route index path={ROUTES.user.TERMS} element={<Terms />} />
    </Routes>
  );
}

export default App;
