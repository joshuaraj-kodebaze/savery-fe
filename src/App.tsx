// import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';

// Import layouts
import MainLayout from 'layouts/main-layout/main-layout';

// Import pages
import Projects from 'pages/projects/projects';
import Login from 'pages/login/login';
import Saml from 'pages/saml/saml';
import Policy from 'pages/policy/policy';
import Terms from 'pages/terms/terms';
import General from 'pages/general/general';
import ErrorPage from 'pages/error-page/error-page';
import Recent from 'pages/recent/recent';

// Import utils
import { ROUTES } from 'utils/constants';

function App() {
  return (
    <Routes>
      <Route path="404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Projects />} />
        <Route path={ROUTES.settings.GENERAL} element={<General />} />
        <Route
          path={ROUTES.projects.RECENT_PROJECTS}
          element={<Recent />}
        />
      </Route>
      <Route path={ROUTES.user.LOGIN} element={<Login />} />
      <Route path={ROUTES.user.SAML} element={<Saml />} />
      <Route path={ROUTES.user.POLICY} element={<Policy />} />
      <Route path={ROUTES.user.TERMS} element={<Terms />} />
    </Routes>
  );
}

export default App;
