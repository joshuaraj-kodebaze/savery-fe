// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/projects/Projects';
import Login from './pages/auth/Login';
import Saml from './pages/auth/Saml';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Projects />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/saml" element={<Saml />} />
      </Route>
    </Routes>
  );
}

export default App;
