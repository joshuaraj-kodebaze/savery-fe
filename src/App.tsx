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

// Import utils
import { ROUTES } from 'utils/constants';

function App() {
  return (
    <Routes>
      <Route path="404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Projects />} />
        <Route
          index
          path={ROUTES.settings.GENERAL}
          element={<General />}
        />
      </Route>
      <Route index path={ROUTES.user.LOGIN} element={<Login />} />
      <Route index path={ROUTES.user.SAML} element={<Saml />} />
      <Route index path={ROUTES.user.POLICY} element={<Policy />} />
      <Route index path={ROUTES.user.TERMS} element={<Terms />} />
    </Routes>
  );
}

export default App;
