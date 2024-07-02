// import './App.css'
import { Routes, Route } from 'react-router-dom';

// Import layouts
import MainLayout from 'layouts/main-layout/main-layout';

// Import pages
import Projects from 'pages/projects/Projects';
import Login from 'pages/auth/Login';
import Saml from 'pages/auth/Saml';
import Policy from 'pages/auth/Policy';
import Terms from 'pages/auth/Terms';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Projects />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/saml" element={<Saml />} />
        <Route index path="/policy" element={<Policy />} />
        <Route index path="/terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}

export default App;
