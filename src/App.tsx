// import './App.css'
import { Routes, Route } from 'react-router-dom';

// Import layouts
import MainLayout from 'layouts/main-layout/main-layout';

// Import pages
import Projects from 'pages/projects/projects';
import Login from 'pages/login/login';
import Saml from 'pages/saml/saml';
import Policy from 'pages/policy/policy';
import Terms from 'pages/terms/terms';

// Import utils
import { ROUTES } from 'utils/constants';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Projects />} />
        <Route index path={ROUTES.user.LOGIN} element={<Login />} />
        <Route index path={ROUTES.user.SAML} element={<Saml />} />
        <Route index path={ROUTES.user.POLICY} element={<Policy />} />
        <Route index path={ROUTES.user.TERMS} element={<Terms />} />
      </Route>
    </Routes>
  );
}

export default App;
