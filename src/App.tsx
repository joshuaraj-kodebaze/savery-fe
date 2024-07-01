// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/projects/Projects'
import MainLayout from './layouts/MainLayout'

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index path="/" element={<Projects />} />
            </Route>
        </Routes>
    )
}

export default App
