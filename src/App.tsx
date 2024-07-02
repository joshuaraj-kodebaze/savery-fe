// Import libraries
import { Routes, Route } from 'react-router-dom';

// Import layouts
import MainLayout from 'layouts/main-layout/MainLayout';

// Import pages
import Projects from 'pages/projects/Projects';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
